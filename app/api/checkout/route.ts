import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const plans = { weekly: { name: 'Weekly meal plan', amount: 2500 }, monthly: { name: 'Monthly meal plan', amount: 8500 } } as const

export async function POST(request: Request) {
  const { plan } = await request.json()
  if (!(plan in plans)) return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  const selected = plans[plan as keyof typeof plans]
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return NextResponse.json({ error: 'Payments are not configured' }, { status: 503 })
  const stripe = new Stripe(secretKey)
  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin
  const session = await stripe.checkout.sessions.create({ mode: 'payment', line_items: [{ price_data: { currency: 'usd', product_data: { name: selected.name }, unit_amount: selected.amount }, quantity: 1 }], success_url: `${origin}/?checkout=success`, cancel_url: `${origin}/?checkout=cancelled` })
  return NextResponse.json({ url: session.url })
}

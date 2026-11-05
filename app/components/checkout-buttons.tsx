'use client'

import { useState } from 'react'

export function CheckoutButtons() {
  const [loading, setLoading] = useState<string | null>(null)
  async function checkout(plan: 'weekly' | 'monthly') {
    setLoading(plan)
    const response = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan }) })
    const data = await response.json()
    if (data.url) window.location.assign(data.url)
    setLoading(null)
  }
  return <div className="payment-panel"><div><p className="eyebrow eyebrow-dark">Meal passes</p><h2>Keep lunch sorted.</h2><p className="muted">Secure checkout powered by Stripe.</p></div><div className="payment-actions"><button className="button button-primary" onClick={() => checkout('weekly')} disabled={Boolean(loading)}>{loading === 'weekly' ? 'Opening checkout…' : 'Weekly pass · $25'}</button><button className="button button-light" onClick={() => checkout('monthly')} disabled={Boolean(loading)}>{loading === 'monthly' ? 'Opening checkout…' : 'Monthly pass · $85'}</button></div></div>
}

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect(new URL('/auth/login', request.url))
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  const form = await request.formData()
  await supabase.from('announcements').insert({ title: String(form.get('title') || '').trim(), body: String(form.get('body') || '').trim(), location: String(form.get('location') || 'Hilltop after Transformer').trim(), created_by: user.id })
  return NextResponse.redirect(new URL('/admin', request.url))
}

'use client'

import { FormEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const { error } = await createClient().auth.signInWithPassword({ email, password })
    if (error) setMessage('Invalid email or password.')
    else window.location.assign('/admin')
    setLoading(false)
  }

  return <main className="auth-shell"><form className="auth-card" onSubmit={submit}><a href="/" className="brand-mark">have<span>you</span>eaten</a><p className="eyebrow">Team access</p><h1>Sign in to continue</h1><p className="muted">Admin access is reserved for approved Hilltop operators.</p><label>Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><label>Password<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label>{message && <p className="form-error" role="alert">{message}</p>}<button className="button button-primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button></form></main>
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Eye, EyeOff, AlertCircle } from 'lucide-react'

const ADMIN_CREDENTIALS = {
  email: 'sarah@thompsonrealty.com',
  password: '1234',
}

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('st_realty_auth', 'true')
        router.push('/dashboard')
      } else {
        setError('Invalid email or password')
      }
      setLoading(false)
    }, 800)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent-gold/10 border border-accent-gold/20 rounded-full flex items-center justify-center">
            <Shield className="w-7 h-7 text-accent-gold" />
          </div>
          <h1 className="text-3xl font-display font-light text-white mb-2">Admin Portal</h1>
          <p className="text-neutral-400 font-light">Sarah Thompson Real Estate Dashboard</p>
        </div>

        <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm uppercase tracking-wider text-neutral-400 mb-2 font-light">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                placeholder="sarah@thompsonrealty.com"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-neutral-400 mb-2 font-light">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 border border-red-800/30 rounded-lg px-4 py-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-accent-gold text-black font-medium tracking-wider uppercase text-sm rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-neutral-700">
            <p className="text-neutral-500 text-xs text-center">
              Demo credentials: sarah@thompsonrealty.com / thompson2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

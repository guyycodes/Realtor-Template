'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'
import StickyMobileCTA from './StickyMobileCTA'

const ADMIN_ROUTES = ['/admin', '/dashboard']

export default function LayoutShell({ children }) {
  const pathname = usePathname()
  const isAdmin = ADMIN_ROUTES.includes(pathname)

  return (
    <>
      {!isAdmin && <Navigation />}
      <main className="min-h-screen">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <StickyMobileCTA />}
    </>
  )
}

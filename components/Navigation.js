'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { BookingWidget } from '@/hooks/useWidgetfied'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaPhone size={12} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:sarah@thompsonrealty.com" className="hidden sm:flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaEnvelope size={12} />
              <span>sarah@thompsonrealty.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block">Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-primary-700">Sarah Thompson</span>
                <span className="text-xs uppercase tracking-wider text-accent-gold font-semibold">Luxury Real Estate</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <BookingWidget id="nav-booking" className="ml-4" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t`}>
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <BookingWidget id="nav-mobile-booking" className="inline-block mt-4" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

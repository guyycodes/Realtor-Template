'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaCalendarAlt } from 'react-icons/fa'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-black/95 backdrop-blur-lg border-t border-accent-gold/20 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href="tel:+1234567890"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:border-accent-gold/50 active:scale-[0.98] transition-all duration-200"
          >
            <FaPhone className="text-accent-gold text-xs" />
            Call Now
          </a>
          <button
            onClick={() => {
              const widget = document.querySelector('[data-widgetfied-booking], .widgetfied-button, #hero-booking button, #hero-booking a')
              if (widget) {
                widget.click()
              } else {
                window.location.href = '/contact'
              }
            }}
            className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-accent-gold to-yellow-500 text-black text-sm font-semibold tracking-wide active:scale-[0.98] transition-all duration-200 shadow-lg shadow-accent-gold/20"
          >
            <FaCalendarAlt className="text-xs" />
            Schedule a Showing
          </button>
        </div>
      </div>
    </div>
  )
}

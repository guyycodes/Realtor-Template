'use client'

import { FaPhone } from 'react-icons/fa'
import { BookingWidget } from '@/hooks/useWidgetfied'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-black/95 backdrop-blur-lg border-t border-accent-gold/20 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-lg mx-auto items-center">
          <a
            href="tel:+1234567890"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:border-accent-gold/50 active:scale-[0.98] transition-all duration-200"
          >
            <FaPhone className="text-accent-gold text-xs" />
            Call Now
          </a>
          <BookingWidget id="sticky-cta-booking" className="flex-[2]" />
        </div>
      </div>
    </div>
  )
}

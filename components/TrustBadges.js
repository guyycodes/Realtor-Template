'use client'

import { FaShieldAlt, FaCheck, FaStar, FaGoogle, FaBalanceScale, FaHome } from 'react-icons/fa'

const badges = [
  {
    icon: FaShieldAlt,
    label: 'NAR',
    sublabel: 'Member',
  },
  {
    icon: FaCheck,
    label: 'MLS',
    sublabel: 'Listed',
  },
  {
    icon: FaStar,
    label: 'Zillow',
    sublabel: '5-Star Agent',
  },
  {
    icon: FaGoogle,
    label: 'Google',
    sublabel: '5-Star Rated',
  },
  {
    icon: FaHome,
    label: 'Realtor.com',
    sublabel: 'Featured',
  },
  {
    icon: FaBalanceScale,
    label: 'Equal Housing',
    sublabel: 'Opportunity',
  },
]

export default function TrustBadges() {
  return (
    <section className="bg-neutral-950 border-y border-neutral-800/50 py-6 md:py-8 overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14 flex-wrap">
          <span className="hidden md:block text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-light whitespace-nowrap">
            Trusted &amp; Verified
          </span>
          <div className="hidden md:block w-px h-6 bg-neutral-700" />
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-neutral-400 hover:text-accent-gold transition-colors duration-300 group cursor-default"
              >
                <Icon className="text-base md:text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="leading-none">
                  <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-300 group-hover:text-white transition-colors duration-300">
                    {badge.label}
                  </span>
                  <span className="block text-[9px] md:text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                    {badge.sublabel}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

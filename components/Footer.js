import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    { href: '/services#buying', label: 'Home Buying' },
    { href: '/services#selling', label: 'Home Selling' },
    { href: '/services#renting', label: 'Property Rentals' },
    { href: '/services#investment', label: 'Investment Properties' },
    { href: '/services#consultation', label: 'Free Consultation' },
  ]

  const propertyTypes = [
    { href: '/properties?type=residential', label: 'Residential Homes' },
    { href: '/properties?type=condo', label: 'Condominiums' },
    { href: '/properties?type=luxury', label: 'Luxury Estates' },
    { href: '/properties?type=commercial', label: 'Commercial Properties' },
    { href: '/properties?type=land', label: 'Land & Lots' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-700">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-100">Get the latest property listings and real estate news</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-neutral-900 flex-1 lg:w-80 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="btn-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">Sarah Thompson</span>
                <span className="text-sm uppercase tracking-wider text-accent-gold font-semibold">Luxury Real Estate</span>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 pr-4">
              Your trusted real estate advisor in Southern California. With over 15 years of experience, 
              I'm dedicated to making your real estate dreams come true.
            </p>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary-500" />
                <span>123 Main Street, Suite 100<br />Los Angeles, CA 90001</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-500" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-500" />
                <a href="mailto:sarah@thompsonrealty.com" className="hover:text-white transition-colors">
                  sarah@thompsonrealty.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© {currentYear} Sarah Thompson Real Estate. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

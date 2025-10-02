'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    propertyType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        propertyType: '',
        budget: '',
        timeline: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Direct Line',
      details: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'sarah@thompsonluxuryestates.com',
      link: 'mailto:sarah@thompsonluxuryestates.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      details: '9701 Wilshire Blvd, Suite 1000\nBeverly Hills, CA 90212',
      link: 'https://maps.google.com'
    },
    {
      icon: FaClock,
      title: 'Availability',
      details: 'Mon-Fri: 9:00 AM - 7:00 PM\nWeekends: By Appointment',
      link: null
    }
  ]

  const socialLinks = [
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ]

  return (
    <>
      {/* Hero Section - Sophisticated Welcome */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37),
            linear-gradient(-45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}></div>
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
              Private Consultation
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
              Let's Connect
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              Begin your luxury real estate journey with a confidential consultation. 
              I'm here to understand your vision and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section - Premium Layout */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form - Elegant Design */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-neutral-200 p-12">
                <h2 className="text-3xl font-display font-light text-neutral-900 mb-2">
                  Schedule Your Consultation
                </h2>
                <div className="h-px w-24 bg-accent-gold mb-8"></div>
                <p className="text-neutral-600 font-light mb-10">
                  Share your real estate aspirations, and I'll respond personally within 24 hours to discuss how I can help achieve your goals.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-neutral-50 border border-accent-gold/30">
                    <p className="text-neutral-800 font-light">Thank you for your inquiry. I look forward to speaking with you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                        Interest *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="buying">Property Acquisition</option>
                        <option value="selling">Property Listing</option>
                        <option value="investment">Investment Consultation</option>
                        <option value="consultation">Private Meeting</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>

                  {(formData.subject === 'buying' || formData.subject === 'investment') && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                        >
                          <option value="">Select Type</option>
                          <option value="estate">Luxury Estate</option>
                          <option value="penthouse">Penthouse</option>
                          <option value="waterfront">Waterfront Property</option>
                          <option value="investment">Investment Property</option>
                          <option value="land">Development Land</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                          Investment Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                        >
                          <option value="">Select Range</option>
                          <option value="1m-2m">$1M - $2M</option>
                          <option value="2m-5m">$2M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m-25m">$10M - $25M</option>
                          <option value="over-25m">$25M+</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {formData.subject !== 'general' && (
                    <div>
                      <label htmlFor="timeline" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-3months">1-3 Months</option>
                        <option value="3-6months">3-6 Months</option>
                        <option value="6-12months">6-12 Months</option>
                        <option value="future">Future Planning</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-neutral-700 mb-3 font-light">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors font-light resize-none"
                      placeholder="Please share details about your real estate goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-10 py-4 bg-black text-white font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:bg-accent-gold hover:text-black"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Submit Inquiry <FaPaperPlane className="inline-block ml-2 text-sm" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar - Luxury Style */}
            <div className="space-y-10">
              {/* Contact Details */}
              <div className="border border-neutral-200 p-8">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Direct Contact</h3>
                <div className="h-px w-16 bg-accent-gold mb-8"></div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="text-accent-gold text-sm" />
                        </div>
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-neutral-700 mb-1 font-light">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-neutral-600 hover:text-accent-gold transition-colors whitespace-pre-line font-light"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-neutral-600 whitespace-pre-line font-light">{info.details}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links - Refined Design */}
              <div className="border border-neutral-200 p-8">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Connect</h3>
                <div className="h-px w-16 bg-accent-gold mb-6"></div>
                <p className="text-neutral-600 mb-6 font-light">
                  Follow for exclusive property previews and market insights
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                      >
                        <Icon className="text-sm" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* VIP Promise */}
              <div className="bg-black text-white p-8">
                <h4 className="text-lg font-medium mb-3 tracking-wide">White Glove Service</h4>
                <p className="text-neutral-300 font-light text-sm leading-relaxed">
                  Every inquiry receives my personal attention. I respond within 24 hours 
                  and am available for urgent matters at your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Sophisticated Overlay */}
      <section className="h-[500px] bg-neutral-900 relative">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3"
          alt="Beverly Hills Location"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <FaMapMarkerAlt className="text-accent-gold text-4xl mb-6 mx-auto" />
            <h3 className="text-3xl font-display font-light mb-4">Beverly Hills Office</h3>
            <p className="text-lg font-light mb-2">9701 Wilshire Boulevard, Suite 1000</p>
            <p className="text-lg font-light">Beverly Hills, California 90212</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant Invitation */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6">
            Your Luxury Real Estate Journey Awaits
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated luxury specialist who puts your interests first.
          </p>
          <a href="tel:+1234567890" className="inline-flex items-center gap-3 text-accent-gold font-medium tracking-wider uppercase text-sm hover:text-white transition-colors">
            Call Direct: (123) 456-7890
          </a>
        </div>
      </section>
    </>
  )
}
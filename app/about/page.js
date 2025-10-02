import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaPhone, FaEnvelope, FaAward, FaTrophy, FaHandshake, FaUsers, FaStar, FaCheck, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'

export const metadata = {
  title: 'About Sarah Thompson - Elite Luxury Real Estate Agent',
  description: 'Meet Sarah Thompson, Southern California\'s most distinguished luxury real estate specialist with an impeccable track record of excellence.',
}

export default function About() {
  const achievements = [
    { value: '500+', label: 'Exclusive Transactions' },
    { value: '$250M+', label: 'Total Sales Volume' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '98%', label: 'Client Satisfaction' }
  ]

  const expertise = [
    'Luxury Property Acquisition',
    'Elite Seller Representation',
    'International Marketing',
    'Investment Portfolio Management',
    'Relocation Concierge',
    'Market Intelligence',
    'Estate Planning Consultation',
    'Negotiation Mastery'
  ]

  const awards = [
    { year: '2024', title: 'Luxury Specialist of the Year', org: 'International Luxury Alliance' },
    { year: '2023', title: 'Top Producer Diamond Award', org: 'California Association of Realtors' },
    { year: '2023', title: 'Global Luxury Specialist', org: 'Million Dollar Guild' },
    { year: '2022', title: 'Five Star Premier Agent', org: 'Los Angeles Magazine' },
    { year: '2021', title: 'Top 1% Nationwide', org: 'Real Trends America\'s Best' },
    { year: '2020', title: 'Lifetime Achievement Award', org: 'Luxury Real Estate Network' }
  ]

  const testimonials = [
    {
      content: "Sarah's sophistication and market acumen are unmatched. She negotiated a deal that exceeded our expectations while maintaining absolute discretion throughout the process.",
      author: "Victoria & Alexander Chen",
      role: "Beverly Hills Estate Owners"
    },
    {
      content: "In my 30 years of property investment, I've never encountered an agent with Sarah's level of professionalism and strategic insight. She's transformed my portfolio.",
      author: "Robert Montgomery III",
      role: "International Property Investor"
    },
    {
      content: "Sarah orchestrated the sale of our Malibu estate with remarkable finesse. Her network and marketing approach attracted qualified buyers immediately.",
      author: "The Vanderbilt Family",
      role: "Luxury Estate Sellers"
    }
  ]

  return (
    <>
      {/* Hero Section - Elegant Introduction */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37),
            linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}></div>
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl">
            <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
              Distinguished Service Since 2009
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
              Sarah Thompson
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              Southern California's premier luxury real estate advisor, combining unparalleled market expertise 
              with a commitment to exceptional client experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section - Sophisticated Presentation */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative">
                {/* Decorative frames */}
                <div className="absolute -inset-4 border border-accent-gold/20"></div>
                <div className="absolute -inset-8 border border-accent-gold/10"></div>
                
                {/* Main portrait */}
                <div className="relative h-[700px] overflow-hidden bg-neutral-900">
                  <Image
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&w=800&h=1000&fit=crop"
                    alt="Sarah Thompson - Luxury Real Estate Specialist"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Accent badge */}
                <div className="absolute -bottom-6 -right-6 bg-black p-6 border border-accent-gold/30">
                  <FaTrophy className="text-accent-gold text-2xl mx-auto mb-2" />
                  <p className="text-white text-sm font-light">Top 1% Nationwide</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-8">
                A Legacy of Excellence
              </h2>
              <div className="h-px w-24 bg-accent-gold mb-8"></div>
              
              <p className="text-lg text-neutral-600 font-light mb-6 leading-relaxed">
                With an illustrious 15-year career in Southern California's most exclusive markets, 
                I've cultivated a reputation for discretion, sophistication, and results that consistently 
                exceed expectations.
              </p>
              <p className="text-lg text-neutral-600 font-light mb-6 leading-relaxed">
                My approach transcends traditional real estate services. I offer a curated experience 
                tailored to each client's unique aspirations, whether acquiring a primary residence, 
                expanding an investment portfolio, or marketing an exceptional property.
              </p>
              <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
                Every transaction is handled with meticulous attention to detail, leveraging my extensive 
                network of industry professionals, from international buyers to renowned architects and designers.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-10">
                <a href="tel:+1234567890" className="flex items-center gap-4 text-neutral-700 hover:text-accent-gold transition-colors group">
                  <div className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center group-hover:border-accent-gold transition-colors">
                    <FaPhone className="text-sm" />
                  </div>
                  <span className="font-light">(123) 456-7890 - Direct Line</span>
                </a>
                <a href="mailto:sarah@thompsonrealty.com" className="flex items-center gap-4 text-neutral-700 hover:text-accent-gold transition-colors group">
                  <div className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center group-hover:border-accent-gold transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <span className="font-light">sarah@thompsonluxuryestates.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {[FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    aria-label="Social Media"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist Luxury */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {achievements.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-light text-accent-gold mb-3">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Refined Grid */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
                Areas of Expertise
              </h2>
              <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
              <p className="text-xl text-neutral-600 font-light">
                Comprehensive luxury real estate services tailored to discerning clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white border border-neutral-200 hover:border-accent-gold/30 transition-colors">
                  <div className="w-px h-4 bg-accent-gold"></div>
                  <span className="text-neutral-700 font-light">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Elegant Approach */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
                My Philosophy
              </h2>
              <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
              <p className="text-xl text-neutral-600 font-light">
                Excellence in every detail, discretion in every transaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 border border-neutral-200 rounded-full flex items-center justify-center">
                  <FaUsers className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">Client-Centric Excellence</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Your aspirations drive every decision. I provide white-glove service tailored to your unique requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 border border-neutral-200 rounded-full flex items-center justify-center">
                  <FaHandshake className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">Absolute Integrity</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Trust is paramount. Every interaction is guided by transparency, honesty, and professional ethics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 border border-neutral-200 rounded-full flex items-center justify-center">
                  <FaTrophy className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">Proven Performance</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Results speak volumes. My track record demonstrates consistent success in the most competitive markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Accolades - Premium Design */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                Awards & Accolades
              </h2>
              <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
              <p className="text-xl text-neutral-400 font-light">
                Recognition from the industry's most prestigious organizations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-6 p-8 border border-white/10 hover:border-accent-gold/30 transition-colors">
                  <FaTrophy className="text-accent-gold text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{award.title}</h3>
                    <p className="text-accent-gold text-sm font-light mb-1">{award.org}</p>
                    <p className="text-neutral-500 text-sm">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Sophisticated Style */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
                Client Testimonials
              </h2>
              <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
              <p className="text-xl text-neutral-600 font-light">
                The true measure of success is client satisfaction
              </p>
            </div>

            <div className="space-y-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <FaQuoteLeft className="text-accent-gold/10 text-4xl absolute -top-2 -left-2" />
                  <div className="pl-12">
                    <p className="text-xl text-neutral-700 font-light italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-accent-gold text-sm" />
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{testimonial.author}</p>
                      <p className="text-sm text-neutral-500 font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Luxurious Invitation */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
            Begin Your Luxury Real Estate Journey
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto">
            Experience the difference of working with Southern California's most distinguished real estate professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="group relative px-10 py-4 bg-accent-gold text-black font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300">
              <span className="relative z-10">Schedule Private Consultation</span>
              <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <a href="tel:+1234567890" className="px-10 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all duration-300">
              Direct: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
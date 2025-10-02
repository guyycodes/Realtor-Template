import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaHandshake, FaChartLine, FaKey, FaMapMarkedAlt, FaPalette, FaUserTie, FaClipboardCheck, FaArrowRight, FaGem, FaGlobe, FaShieldAlt } from 'react-icons/fa'

export const metadata = {
  title: 'Luxury Real Estate Services - Sarah Thompson',
  description: 'Bespoke real estate services for discerning clients. From acquisition to disposition, experience white-glove service tailored to your unique requirements.',
}

export default function Services() {
  const services = [
    {
      id: 'acquisition',
      icon: FaHome,
      title: 'Property Acquisition',
      shortDesc: 'Exclusive access to the finest properties',
      description: 'Navigate the luxury market with unparalleled expertise and access to both on and off-market opportunities.',
      features: [
        'Exclusive pocket listings and pre-market opportunities',
        'Global network of luxury property connections',
        'Comprehensive market analysis and valuation',
        'Discreet property tours and virtual walkthroughs',
        'Expert negotiation and transaction management',
        'Coordination with legal and financial advisors',
        'Post-purchase concierge services'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    },
    {
      id: 'disposition',
      icon: FaKey,
      title: 'Property Disposition',
      shortDesc: 'Maximize value through strategic marketing',
      description: 'Achieve optimal results with sophisticated marketing strategies designed to attract qualified buyers globally.',
      features: [
        'Professional staging and property enhancement consultation',
        'Cinematic property videography and photography',
        'International luxury marketing campaigns',
        'Private showings to pre-qualified buyers',
        'Strategic pricing for maximum value',
        'Discreet off-market sales when preferred',
        'Complete transaction management and closing coordination'
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    },
    {
      id: 'investment',
      icon: FaChartLine,
      title: 'Investment Advisory',
      shortDesc: 'Build generational wealth through strategic investments',
      description: 'Leverage data-driven insights and market expertise to identify lucrative investment opportunities.',
      features: [
        'Portfolio analysis and optimization strategies',
        'Cash flow and ROI projections',
        'Market timing and cycle analysis',
        '1031 exchange facilitation',
        'Development opportunity identification',
        'Property management coordination',
        'Exit strategy planning'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    },
    {
      id: 'luxury',
      icon: FaGem,
      title: 'Ultra-Luxury Services',
      shortDesc: 'White-glove service for the most discerning clients',
      description: 'Bespoke solutions for trophy properties and ultra-high-net-worth individuals requiring absolute discretion.',
      features: [
        'Celebrity and high-profile client representation',
        'International buyer attraction strategies',
        'Art and collectibles advisory',
        'Architectural and design team coordination',
        'Security and privacy consultation',
        'Lifestyle and property management services',
        'Global luxury network access'
      ],
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    },
    {
      id: 'relocation',
      icon: FaGlobe,
      title: 'Relocation Excellence',
      shortDesc: 'Seamless transitions to Southern California',
      description: 'Comprehensive relocation services ensuring a smooth transition to your new luxury lifestyle.',
      features: [
        'Personalized area orientation and lifestyle matching',
        'School and country club recommendations',
        'Corporate relocation management',
        'Temporary luxury housing arrangements',
        'Vendor and service provider introductions',
        'Remote transaction facilitation',
        'Settling-in concierge services'
      ],
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    },
    {
      id: 'consultation',
      icon: FaShieldAlt,
      title: 'Private Consultation',
      shortDesc: 'Confidential advisory services',
      description: 'Begin with a discreet consultation to discuss your real estate objectives and develop a customized strategy.',
      features: [
        'Confidential needs assessment',
        'Market opportunity analysis',
        'Investment strategy development',
        'Timeline and milestone planning',
        'Team assembly and coordination',
        'Risk assessment and mitigation',
        'Ongoing advisory support'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&w=800&h=600&fit=crop'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your unique requirements, preferences, and objectives through confidential consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing a bespoke approach tailored to your specific goals and timeline.'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implementing our strategy with precision, leveraging our extensive network and resources.'
    },
    {
      step: '04',
      title: 'Negotiation',
      description: 'Securing optimal terms through expert negotiation and strategic positioning.'
    },
    {
      step: '05',
      title: 'Completion',
      description: 'Managing every detail to ensure a seamless closing and transition.'
    },
    {
      step: '06',
      title: 'Continuity',
      description: 'Providing ongoing support and advisory services for your evolving needs.'
    }
  ]

  return (
    <>
      {/* Hero Section - Sophisticated Introduction */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
            linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
            linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
            linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          }}></div>
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
              Bespoke Solutions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
              Luxury Real Estate Services
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              Elevating real estate to an art form. Experience service that anticipates your needs 
              and exceeds your expectations at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Elegant Presentation */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Tailored to Perfection
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Every service is customized to meet the unique requirements of our distinguished clientele
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 border border-accent-gold/30 rounded-full flex items-center justify-center">
                          <Icon className="text-accent-gold text-2xl" />
                        </div>
                        <h3 className="text-3xl font-display font-light">{service.title}</h3>
                      </div>
                      
                      <p className="text-lg text-neutral-600 font-light mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4 mb-10">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-px h-4 bg-accent-gold mt-1.5 flex-shrink-0"></div>
                            <span className="text-neutral-700 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href="/contact" className="inline-flex items-center gap-3 text-black font-medium tracking-wider uppercase text-sm hover:text-accent-gold transition-colors group">
                        Begin Your Journey
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                    
                    <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="relative h-[500px] overflow-hidden bg-neutral-900">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>
                      {/* Decorative accent */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent-gold/20"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Minimalist Timeline */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              The Thompson Method
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
              A proven approach refined over 15 years of excellence in luxury real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="border border-white/10 p-8 hover:border-accent-gold/30 transition-colors">
                  <div className="text-5xl font-light text-accent-gold/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-medium mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-neutral-400 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Sophisticated Benefits */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              The Distinction of Excellence
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16 text-left">
              <div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">Unmatched Track Record</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  With over 500 successful transactions totaling $250M+ in sales, 
                  my proven expertise delivers exceptional results consistently.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">Global Network</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Access to an exclusive network of international buyers, sellers, 
                  and industry professionals spanning six continents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">Absolute Discretion</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Complete confidentiality for high-profile clients, with proven 
                  protocols for maintaining privacy throughout every transaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">Strategic Excellence</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Sophisticated negotiation tactics and market positioning strategies 
                  that consistently achieve optimal outcomes for clients.
                </p>
              </div>
            </div>

            <Link href="/contact" className="group relative px-10 py-4 bg-black text-white font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 inline-block">
              <span className="relative z-10">Schedule Private Consultation</span>
              <div className="absolute inset-0 bg-accent-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Luxurious Invitation */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            Experience Excellence
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto">
            Discover how personalized service and unparalleled expertise can transform your real estate experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-accent-gold text-black font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors">
              Begin Consultation
            </Link>
            <a href="tel:+1234567890" className="px-10 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all duration-300">
              Direct Line: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
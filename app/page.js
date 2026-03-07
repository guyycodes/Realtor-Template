import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaHandshake, FaChartLine, FaUsers, FaStar, FaQuoteLeft, FaArrowRight, FaCheck, FaTrophy, FaPhone, FaEnvelope } from 'react-icons/fa'
import PropertyCard from '@/components/PropertyCard'
import TestimonialCard from '@/components/TestimonialCard'
import ResponsiveQuantumSection from '@/components/ResponsiveQuantumSection'
import TrustBadges from '@/components/TrustBadges'
import { BookingWidget } from '@/hooks/useWidgetfied'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Sarah Thompson - Luxury Real Estate Agent | Your Dream Home Awaits',
  description: 'Find your perfect home with Sarah Thompson, Southern California\'s premier luxury real estate agent. Exclusive listings and personalized service.',
}

export default function Home() {
  const features = [
    {
      icon: FaHome,
      title: 'Premium Properties',
      description: 'Access to exclusive listings and luxury homes in prime locations.'
    },
    {
      icon: FaHandshake,
      title: 'Expert Guidance',
      description: 'Deep local market knowledge and expertise to guide your decisions.'
    },
    {
      icon: FaChartLine,
      title: 'Market Analysis',
      description: 'Data-driven insights to help you make informed decisions.'
    },
    {
      icon: FaUsers,
      title: 'Personal Service',
      description: 'One-on-one attention and tailored solutions for your unique needs.'
    }
  ]

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$1,250,000',
      location: 'Beverly Hills, CA',
      beds: 5,
      baths: 4,
      sqft: 4500,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'For Sale',
      featured: true
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$890,000',
      location: 'Los Angeles, CA',
      beds: 3,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'For Sale',
      featured: true
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      price: '$750,000',
      location: 'Malibu, CA',
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'For Sale',
      featured: true
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      content: 'Sarah made our home buying experience seamless. Her expertise and attention to detail exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'I have been working with Sarah for years. Her market insights and professional approach have helped me build a successful portfolio.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'First-time Buyer',
      content: 'As a first-time buyer, I was nervous about the process. Sarah guided me through every step and found me the perfect home.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop'
    }
  ]

  const stats = [
    { value: '500+', label: 'Properties Sold' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '$250M+', label: 'In Sales Volume' }
  ]

  return (
    <>
      {/* Hero Section - Refined Luxury Design */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        
        {/* Luxury geometric pattern overlay */}
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
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Refined Typography */}
              <AnimatedSection animation="fade-up" threshold={0.05} className="text-center lg:text-left">
                <div className="mb-8">
                  <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
                    Southern California's Elite Agent
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-4 leading-tight">
                    Sarah
                    <span className="block font-normal bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold bg-clip-text text-transparent">
                      Thompson
                    </span>
                  </h1>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto lg:mx-0 my-8"></div>
                  <p className="text-xl md:text-2xl text-neutral-400 font-light mb-4">
                    Luxury Real Estate Expert
                  </p>
                  <p className="text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    With over 15 years of experience and $250M+ in sales, I don't just sell homes – 
                    I make dreams come true.
                  </p>
                </div>
                
                {/* CTAs - Elegant Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link href="/properties" className="group relative px-8 py-4 bg-white text-black font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:text-white">
                    <span className="relative z-10">Explore Listings</span>
                    <div className="absolute inset-0 bg-accent-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </Link>
                  <BookingWidget id="hero-booking" className="inline-block" />
                </div>

                {/* Stats - Minimalist Design */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl font-light text-accent-gold mb-1">{stat.value}</div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right Image - Premium Presentation */}
              <AnimatedSection animation="fade-left" delay={200} threshold={0.05} className="relative">
                <div className="relative max-w-lg mx-auto">
                  {/* Frame decoration */}
                  <div className="absolute -inset-4 border border-accent-gold/20"></div>
                  <div className="absolute -inset-8 border border-accent-gold/10"></div>
                  
                  {/* Main Image */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=600&h=800&fit=crop"
                      alt="Sarah Thompson - Luxury Real Estate Agent"
                      width={500}
                      height={700}
                      className="w-full h-auto"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating accent */}
                  <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-md p-6 border border-accent-gold/30">
                    <div className="text-center">
                      <FaTrophy className="text-accent-gold text-2xl mx-auto mb-2" />
                      <p className="text-white text-sm font-light">Top 1% Nationwide</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <div className="text-xs uppercase tracking-wider mb-2">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Quantum Immersive Property Experience Section */}
      <ResponsiveQuantumSection />

      {/* Why Choose Section - Luxe Minimal */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Why Choose Sarah Thompson
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Personalized real estate solutions with a luxury touch
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="text-center p-8 group">
                  <div className="w-20 h-20 mx-auto mb-6 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-accent-gold transition-colors duration-300">
                    <Icon className="text-2xl text-neutral-400 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">{feature.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties - Gallery Style */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Featured Properties
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <AnimatedSection key={property.id} animation="scale" delay={index * 150} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-neutral-900 aspect-[4/5]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-4">
                      <span className="text-accent-gold text-2xl font-light">{property.price}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{property.title}</h3>
                    <p className="text-neutral-300 text-sm mb-4">{property.location}</p>
                    <div className="flex gap-4 text-sm text-neutral-400">
                      <span>{property.beds} Beds</span>
                      <span>•</span>
                      <span>{property.baths} Baths</span>
                      <span>•</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" className="text-center mt-16">
            <Link href="/properties" className="inline-flex items-center gap-3 text-neutral-900 font-medium tracking-wider uppercase text-sm hover:text-accent-gold transition-colors group">
              View All Properties 
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section - Elegant Presentation */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right" className="relative h-[700px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
                alt="Luxury Home Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" delay={200} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Real Estate Solutions
              </h2>
              <div className="h-px w-24 bg-accent-gold mb-8"></div>
              <p className="text-xl text-neutral-300 font-light mb-12 leading-relaxed">
                From buying your first home to selling your property or finding the perfect investment, 
                I provide end-to-end real estate services tailored to your goals.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  'Professional property valuation and market analysis',
                  'Expert negotiation and transaction management',
                  'Comprehensive marketing for property sellers',
                  'Investment property consultation',
                  'Relocation and rental services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-px h-4 bg-accent-gold"></div>
                    <span className="text-neutral-300 font-light">{service}</span>
                  </div>
                ))}
              </div>

              <Link href="/services" className="inline-flex items-center gap-3 text-accent-gold font-medium tracking-wider uppercase text-sm hover:text-white transition-colors group">
                Explore Services
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Design */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Client Testimonials
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} animation="fade-up" delay={index * 150} className="text-center">
                <div className="mb-8">
                  <FaQuoteLeft className="text-3xl text-accent-gold/20 mx-auto" />
                </div>
                <p className="text-neutral-600 font-light italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-accent-gold text-sm" />
                  ))}
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-white">
        <AnimatedSection animation="fade-up" className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
            Ready to Make Your Move?
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, I'm here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <BookingWidget id="cta-booking" className="inline-block" />
            
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="text-sm uppercase tracking-wider">or call directly</span>
              <a href="tel:+1234567890" className="text-accent-gold text-xl font-light hover:text-white transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
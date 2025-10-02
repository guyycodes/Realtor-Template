'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

// Fake luxury property data
const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    price: '$8,500,000',
    location: 'Beverly Hills',
    type: 'Modern Villa'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
    price: '$12,300,000',
    location: 'Malibu Beach',
    type: 'Oceanfront Estate'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    price: '$6,750,000',
    location: 'Hollywood Hills',
    type: 'Contemporary Mansion'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    price: '$9,200,000',
    location: 'Bel Air',
    type: 'Luxury Estate'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
    price: '$15,500,000',
    location: 'Pacific Palisades',
    type: 'Architectural Marvel'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    price: '$7,900,000',
    location: 'Venice Beach',
    type: 'Modern Beach House'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    price: '$11,200,000',
    location: 'Manhattan Beach',
    type: 'Coastal Paradise'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2071',
    price: '$18,700,000',
    location: 'Brentwood',
    type: 'Premier Estate'
  }
]

const ImmersiveSection = () => {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [momentum, setMomentum] = useState(0)
  const scrollVelocity = useRef(0)
  const animationFrame = useRef(null)
  const lastScrollTime = useRef(Date.now())

  // Handle momentum physics
  const updateMomentum = useCallback(() => {
    if (Math.abs(momentum) > 0.001) {
      const friction = 0.94
      setMomentum(prev => prev * friction)
      
      setScrollProgress(prev => {
        const newProgress = prev + momentum * 0.0005
        return ((newProgress % 1) + 1) % 1 // Keep it looping between 0 and 1
      })
      
      animationFrame.current = requestAnimationFrame(updateMomentum)
    } else {
      setMomentum(0)
      setIsScrolling(false)
    }
  }, [momentum])

  useEffect(() => {
    if (Math.abs(momentum) > 0.001 && !isScrolling) {
      animationFrame.current = requestAnimationFrame(updateMomentum)
    }
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [momentum, isScrolling, updateMomentum])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight
      
      // Check if section is in view
      const inView = rect.top <= windowHeight && rect.bottom >= 0
      
      if (inView) {
        // Calculate progress through ALL properties
        const scrolled = Math.max(0, -rect.top)
        const maxScroll = sectionHeight - windowHeight
        
        // Create a continuous loop through properties
        const rawProgress = scrolled / maxScroll
        const loopedProgress = (rawProgress * properties.length) % properties.length
        
        setScrollProgress(loopedProgress)
        
        // Calculate velocity for momentum
        const currentTime = Date.now()
        const deltaTime = currentTime - lastScrollTime.current
        const deltaY = window.scrollY - lastScrollY
        
        if (deltaTime > 0) {
          scrollVelocity.current = deltaY / deltaTime * 100
          setMomentum(scrollVelocity.current)
        }
        
        lastScrollY = window.scrollY
        lastScrollTime.current = currentTime
        setIsScrolling(true)
      }
    }

    // Handle wheel events for smooth experience
    const handleWheel = (e) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0
      
      if (inView) {
        // Add to momentum
        setMomentum(prev => prev + e.deltaY * 0.8)
        setIsScrolling(true)
      }
    }

    const handleScrollEnd = () => {
      setIsScrolling(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('scrollend', handleScrollEnd)
    
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scrollend', handleScrollEnd)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  // Get property transform based on its position in the carousel
  const getPropertyTransform = (index) => {
    // Calculate distance from current scroll position
    let distance = index - scrollProgress
    
    // Handle wrapping for continuous loop
    if (distance > properties.length / 2) {
      distance -= properties.length
    } else if (distance < -properties.length / 2) {
      distance += properties.length
    }
    
    // Create a carousel effect
    const angle = distance * 45 // Degrees of rotation per property
    const z = -Math.abs(distance) * 300 // Depth
    const x = Math.sin((distance * Math.PI) / properties.length) * 800 // Horizontal spread
    const y = Math.abs(distance) * 30 // Vertical offset
    const scale = Math.max(0.4, 1 - Math.abs(distance) * 0.15)
    const opacity = Math.max(0.3, 1 - Math.abs(distance) * 0.2)
    
    // Special handling for the front card
    const isFront = Math.abs(distance) < 0.5
    
    return {
      transform: `
        translateX(${x}px)
        translateY(${isFront ? 0 : y}px)
        translateZ(${z}px)
        rotateY(${-angle}deg)
        scale(${isFront ? 1.1 : scale})
      `,
      opacity: isFront ? 1 : opacity,
      zIndex: Math.floor(100 - Math.abs(distance) * 10),
      filter: isFront ? 'none' : `brightness(${0.7 + (1 - Math.abs(distance) * 0.2) * 0.3})`
    }
  }

  // Dynamic background effects based on scroll
  const bgRotation = scrollProgress * 360
  const bgScale = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-black overflow-hidden"
      style={{ height: '600vh' }} // Enough height for smooth scrolling
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-neutral-900" />
          
          {/* Rotating gradient mesh */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at ${50 + Math.cos(scrollProgress * Math.PI * 2) * 20}% ${50 + Math.sin(scrollProgress * Math.PI * 2) * 20}%,
                  rgba(212, 175, 55, 0.1) 0%,
                  transparent 50%
                ),
                radial-gradient(
                  circle at ${50 - Math.sin(scrollProgress * Math.PI * 2) * 30}% ${50 - Math.cos(scrollProgress * Math.PI * 2) * 30}%,
                  rgba(255, 255, 255, 0.05) 0%,
                  transparent 50%
                )
              `,
              transform: `rotate(${bgRotation}deg) scale(${bgScale})`
            }}
          />
          
          {/* Ambient light effects */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2"
              style={{
                background: 'radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                transform: `translateY(${Math.sin(scrollProgress * Math.PI * 2) * 50}px)`
              }}
            />
          </div>
        </div>

        {/* 3D Property Carousel */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            perspective: '1500px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {properties.map((property, index) => {
              const transform = getPropertyTransform(index)
              const isFront = Math.abs(index - scrollProgress) < 0.5 || 
                             Math.abs(index - scrollProgress + properties.length) < 0.5 ||
                             Math.abs(index - scrollProgress - properties.length) < 0.5
              
              return (
                <div
                  key={property.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    ...transform,
                    transition: isScrolling ? 'none' : 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                  }}
                >
                  <div className="relative">
                    {/* Glow effect for front card */}
                    {isFront && (
                      <div 
                        className="absolute -inset-8 bg-gradient-to-r from-accent-gold/20 via-white/10 to-accent-gold/20 rounded-2xl blur-2xl"
                        style={{
                          animation: 'glow 3s ease-in-out infinite'
                        }}
                      />
                    )}
                    
                    {/* Property card */}
                    <div 
                      className="relative w-[500px] h-[700px] lg:w-[600px] lg:h-[800px] rounded-2xl overflow-hidden"
                      style={{
                        boxShadow: isFront 
                          ? '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(212, 175, 55, 0.3)'
                          : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <Image
                        src={property.image}
                        alt={property.type}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 500px, 600px"
                        priority={index < 3}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Property details */}
                      {isFront && (
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="transform transition-all duration-500">
                            <h3 className="text-5xl font-light text-white mb-2">{property.price}</h3>
                            <p className="text-xl text-accent-gold">{property.type}</p>
                            <p className="text-lg text-white/80">{property.location}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="flex gap-2">
            {properties.map((_, index) => {
              const distance = Math.min(
                Math.abs(index - scrollProgress),
                Math.abs(index - scrollProgress + properties.length),
                Math.abs(index - scrollProgress - properties.length)
              )
              const isActive = distance < 0.5
              
              return (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#d4af37' : 'rgba(255, 255, 255, 0.2)',
                    transform: `scale(${isActive ? 1.5 : 1})`
                  }}
                />
              )
            })}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
              style={{
                left: `${(i * 31) % 100}%`,
                top: `${(i * 41) % 100}%`,
                transform: `
                  translateY(${Math.sin(scrollProgress * Math.PI * 2 + i) * 100}px)
                  translateX(${Math.cos(scrollProgress * Math.PI * 2 + i) * 50}px)
                `,
                opacity: 0.3 + Math.sin(scrollProgress * Math.PI * 2 + i * 0.5) * 0.3
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  )
}

export default ImmersiveSection
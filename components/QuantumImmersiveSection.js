"use client"

import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import Image from 'next/image'
import { TypewriterDisplay } from './TypewriterDisplay'

// -------------------------
// Property Data
// -------------------------
const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    price: '$8,500,000',
    location: 'Beverly Hills',
    type: 'Modern Villa',
    beds: 5,
    baths: 6,
    sqft: '8,200'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
    price: '$12,300,000',
    location: 'Malibu Beach',
    type: 'Oceanfront Estate',
    beds: 7,
    baths: 8,
    sqft: '12,500'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    price: '$6,750,000',
    location: 'Hollywood Hills',
    type: 'Contemporary Mansion',
    beds: 4,
    baths: 5,
    sqft: '6,800'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    price: '$9,200,000',
    location: 'Bel Air',
    type: 'Luxury Estate',
    beds: 6,
    baths: 7,
    sqft: '9,500'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
    price: '$15,500,000',
    location: 'Pacific Palisades',
    type: 'Architectural Marvel',
    beds: 8,
    baths: 10,
    sqft: '14,000'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    price: '$7,900,000',
    location: 'Venice Beach',
    type: 'Modern Beach House',
    beds: 4,
    baths: 4,
    sqft: '5,200'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    price: '$11,200,000',
    location: 'Manhattan Beach',
    type: 'Coastal Paradise',
    beds: 5,
    baths: 6,
    sqft: '7,800'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2071',
    price: '$18,700,000',
    location: 'Brentwood',
    type: 'Premier Estate',
    beds: 9,
    baths: 12,
    sqft: '16,000'
  }
]

// -------------------------
// FibonacciSphere
// -------------------------
// This class creates evenly distributed points on a sphere using the Fibonacci spiral algorithm.
// It ensures each property card has a well-spaced position in 3D space.
class FibonacciSphere {
  #points = []  // Private array storing 3D coordinates for each point

  get points() {
    return this.#points
  }

  constructor(N) {
    // Golden angle in radians (~137.5 degrees) - creates optimal spacing
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))
    
    for (let i = 0; i < N; i++) {
      // y ranges from 1 (top) to -1 (bottom) of sphere
      const y = 1 - (i / (N - 1)) * 2
      
      // Calculate radius at this height (forms circles at different latitudes)
      const radius = Math.sqrt(1 - y ** 2)
      
      // Angle for this point using golden ratio for even distribution
      const a = goldenAngle * i
      
      // Convert polar to cartesian coordinates
      const x = Math.cos(a) * radius
      const z = Math.sin(a) * radius
      
      // Store as [x, y, z] where each component is between -1 and 1
      this.#points.push([x, y, z])
    }
  }
}

// -------------------------
// Quaternion Math Utilities
// -------------------------
// Quaternions are used for smooth 3D rotations without gimbal lock.
// They're represented as [x, y, z, w] where xyz is the vector part and w is the scalar.

// Normalize a 3D vector to unit length (length = 1)
function normalize(v) {
  const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
  if (length < 0.000001) return [0, 0, 0]
  const inv = 1 / length
  return [v[0] * inv, v[1] * inv, v[2] * inv]
}

// Calculate dot product of two 3D vectors (measures similarity/alignment)
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

// Calculate cross product of two 3D vectors (finds perpendicular vector)
function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ]
}

// Convert axis-angle rotation to quaternion representation
// axis: 3D vector defining rotation axis [x, y, z]
// angle: rotation angle in radians
function axisAngleToQuat(axis, angle) {
  const half = angle * 0.5
  const s = Math.sin(half)
  // Returns quaternion as [x, y, z, w]
  return [axis[0] * s, axis[1] * s, axis[2] * s, Math.cos(half)]
}

// Spherical linear interpolation (SLERP) between two quaternions
// Provides smooth rotation from q1 to q2, where t is 0-1 (0=start, 1=end)
function slerp(q1, q2, t) {
  let [x1, y1, z1, w1] = q1
  let [x2, y2, z2, w2] = q2

  let cosTheta = x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2
  if (cosTheta < 0) {
    x2 = -x2
    y2 = -y2
    z2 = -z2
    w2 = -w2
    cosTheta = -cosTheta
  }

  if (cosTheta > 0.9995) {
    const x = x1 + t * (x2 - x1)
    const y = y1 + t * (y2 - y1)
    const z = z1 + t * (z2 - z1)
    const w = w1 + t * (w2 - w1)
    const len = Math.sqrt(x * x + y * y + z * z + w * w)
    return [x / len, y / len, z / len, w / len]
  }

  const theta0 = Math.acos(cosTheta)
  const theta = theta0 * t
  const sinTheta = Math.sin(theta)
  const sinTheta0 = Math.sin(theta0)

  const s0 = Math.cos(theta) - cosTheta * (sinTheta / sinTheta0)
  const s1 = sinTheta / sinTheta0

  return [
    x1 * s0 + x2 * s1,
    y1 * s0 + y2 * s1,
    z1 * s0 + z2 * s1,
    w1 * s0 + w2 * s1
  ]
}

// Rotate a 3D point using quaternion rotation
function rotatePointByQuat(p, q) {
  const px = p[0], py = p[1], pz = p[2]
  const qx = q[0], qy = q[1], qz = q[2], qw = q[3]

  const uvx = qy * pz - qz * py
  const uvy = qz * px - qx * pz
  const uvz = qx * py - qy * px

  const uuvx = qy * uvz - qz * uvy
  const uuvy = qz * uvx - qx * uvz
  const uuvz = qx * uvy - qy * uvx

  const w2 = qw * 2.0
  return [
    px + uvx * w2 + uuvx * 2.0,
    py + uvy * w2 + uuvy * 2.0,
    pz + uvz * w2 + uuvz * 2.0
  ]
}

// Multiply two quaternions: returns q1 * q2 (applies q2 first, then q1)
function quatMultiply(a, b) {
  return [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]
  ]
}

// -------------------------
// QuantumPropertyCloud Class
// -------------------------
// Main class managing the 3D sphere of property cards.
// Handles rotation, positioning, and animation of all cards.
class QuantumPropertyCloud {
  constructor(root, propsData, sphereScale = 1, frontScale = 1.5, frontXOffset = 0, frontYOffset = 0) {
    this.root = root
    this.propsData = propsData
    this.sphereScale = sphereScale
    this.frontScale = frontScale
    this.frontXOffset = frontXOffset
    this.frontYOffset = frontYOffset

    this.N = propsData.length
    this.sphere = new FibonacciSphere(this.N)

    this.currentQuat = [0, 0, 0, 1]
    this.targetQuat = [0, 0, 0, 1]
    this.rotationProgress = 1.0

    this.ambientRotation = 0
    this.frameId = null

    this.elements = Array.from(root.querySelectorAll('.q-prop-item'))
    this.focusedIndex = 0
    this._prevFocusedIndex = -1

    // Cache container dimensions to avoid layout reflows every frame
    this._w = root.offsetWidth
    this._h = root.offsetHeight
    this._resizeObserver = new ResizeObserver(entries => {
      const cr = entries[0].contentRect
      this._w = cr.width
      this._h = cr.height
    })
    this._resizeObserver.observe(root)

    this.updatePositions()
    this.start()
  }

  focusOnIndex(index) {
    if (index < 0 || index >= this.N) return

    this.focusedIndex = index

    const front = [0, 0, 1]
    const p = this.sphere.points[index]
    const pn = normalize(p)

    let cosA = dot(pn, front)
    if (cosA > 1) cosA = 1
    if (cosA < -1) cosA = -1
    const angle = Math.acos(cosA)

    if (angle < 0.0001) return

    let axis = cross(pn, front)
    axis = normalize(axis)

    this.targetQuat = axisAngleToQuat(axis, angle)
    this.rotationProgress = 0
  }

  updatePositions() {
    // Only run slerp when actually transitioning
    if (this.rotationProgress < 1) {
      const easedT = 1 - Math.pow(1 - this.rotationProgress, 3)
      this.currentQuat = slerp(this.currentQuat, this.targetQuat, easedT)
    }

    this.ambientRotation += 0.00105
    const ambientQuat = axisAngleToQuat([0, 1, 0], this.ambientRotation)

    // Pre-compose currentQuat * ambientQuat so orbiting items need only one rotation
    const orbitQuat = quatMultiply(ambientQuat, this.currentQuat)

    // Cache dimensions and derived constants outside the loop
    const w = this._w
    const h = this._h
    const wScale = w / 3.5
    const hScale = h / 3.5
    const halfW = w * 0.5
    const halfH = h * 0.5 - 80
    const ss = this.sphereScale
    const focusedIndex = this.focusedIndex
    const focusChanged = focusedIndex !== this._prevFocusedIndex

    const N = this.N
    for (let i = 0; i < N; i++) {
      const el = this.elements[i]
      if (!el) continue

      const pt = this.sphere.points[i]

      if (i === focusedIndex) {
        const rotated = rotatePointByQuat(pt, this.currentQuat)

        const rx = rotated[0] * ss
        const ry = rotated[1] * ss
        const rz = rotated[2] * ss

        const perspective = 6 / (6 - rz * 3.5)

        const tx = halfW + this.frontXOffset + rx * perspective * wScale
        const ty = halfH + this.frontYOffset + ry * perspective * hScale

        el.style.transform = `translate(${tx}px,${ty}px) scale(${this.frontScale})`
        el.style.zIndex = '9999'
        el.style.opacity = '1'
        el.style.filter = 'none'
        if (focusChanged) el.classList.add('quantum-front')
      } else {
        // Single rotation using pre-composed quaternion
        const rotated = rotatePointByQuat(pt, orbitQuat)

        const rx = rotated[0] * ss
        const ry = rotated[1] * ss
        const rz = rotated[2] * ss

        const perspective = 6 / (6 - rz * 3.5)

        const tx = halfW + rx * perspective * wScale
        const ty = halfH + ry * perspective * hScale

        const depthFactor = (rz + 1) * 0.5
        const scale = (0.2 + depthFactor * 0.6) * perspective * 0.7

        el.style.transform = `translate(${tx}px,${ty}px) scale(${scale}) rotateY(${rz * 15}deg) translateZ(${rz * 200}px)`
        el.style.zIndex = String((rz + 2) * 1000 | 0)
        const absRz = rz < 0 ? -rz : rz
        el.style.opacity = String(1 - absRz * 0.6 < 0.15 ? 0.15 : 1 - absRz * 0.6)
        el.style.filter = rz < -0.5 ? `blur(${(-rz - 0.5) * 2}px)` : 'none'
        if (focusChanged) el.classList.remove('quantum-front')
      }
    }

    this._prevFocusedIndex = focusedIndex
  }

  start() {
    const animate = () => {
      if (this.rotationProgress < 1) {
        this.rotationProgress += 0.05
        if (this.rotationProgress > 1) this.rotationProgress = 1
      }

      this.updatePositions()
      this.frameId = requestAnimationFrame(animate)
    }
    animate()
  }

  stop() {
    if (this.frameId) cancelAnimationFrame(this.frameId)
  }

  destroy() {
    this.stop()
    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
      this._resizeObserver = null
    }
  }
}

// -------------------------
// Main Component
// -------------------------
export default function QuantumImmersiveSection({ frontScale = 1.5, frontXOffset = 0, frontYOffset = 0 }) {
  const sectionRef = useRef(null)
  const sphereRef = useRef(null)
  const cloudRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isEngaged, setIsEngaged] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showAIAnalysis, setShowAIAnalysis] = useState(false)
  const [aiAnalysisText, setAiAnalysisText] = useState('')

  // Enhanced flares or particles (optional)
  const [particles] = useState(
    [...Array(60)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      speed: 0.2 + Math.random() * 0.8
    }))
  )

  // Initialize quantum cloud on component mount
  useEffect(() => {
    if (sphereRef.current && !cloudRef.current) {
      // Create the 3D property cloud
      cloudRef.current = new QuantumPropertyCloud(
        sphereRef.current,  // Container element
        properties,         // Property data array
        1.0,               // Sphere scale factor
        frontScale,        // Front item scale
        frontXOffset,       // Front item X offset
        frontYOffset,       // Front item Y offset
      )
      cloudRef.current.focusOnIndex(0)  // Start with first property focused
    }

    return () => {
      if (cloudRef.current) {
        cloudRef.current.destroy()
        cloudRef.current = null
      }
    }
  }, [])

  // Track scroll position and section visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is currently visible on screen
      const isVisible = rect.top < windowHeight && rect.bottom > 0
      setIsInView(isVisible)

      const totalHeight = rect.height
      const scrolled = -rect.top
      let ratio = scrolled / (totalHeight || 1)
      ratio = Math.max(0, Math.min(1, ratio))
      setScrollProgress(ratio)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disengage on click outside section or Escape key
  useEffect(() => {
    if (!isEngaged) return

    const onClickOutside = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setIsEngaged(false)
      }
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsEngaged(false)
    }

    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isEngaged])

  // SCROLL-WHEEL NAVIGATION (also supports clicking radio buttons)
  useEffect(() => {
    let wheelTimeout
    const wheelAccumulator = { value: 0 }  // Accumulate small scroll movements

    const onWheel = (e) => {
      if (!sphereRef.current || !isEngaged || !isInView) return

      e.preventDefault()  // Prevent page scroll
      e.stopPropagation()

      // Accumulate wheel delta (handles both mouse wheels and trackpads)
      wheelAccumulator.value += e.deltaY

      // Debounce wheel events to prevent too-rapid changes
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        // Threshold to trigger navigation (prevents accidental changes)
        if (Math.abs(wheelAccumulator.value) > 50) {
          const direction = wheelAccumulator.value > 0 ? 1 : -1  // Down = next, Up = previous
          
          setCurrentIndex((prev) => {
            // Calculate next index with wraparound
            const next = (prev + direction + properties.length) % properties.length
            
            // Trigger 3D rotation to bring new item to front
            if (cloudRef.current) {
              cloudRef.current.focusOnIndex(next)
            }
            
            // Close AI analysis when switching properties
            setShowAIAnalysis(false)
            setAiAnalysisText('')
            
            return next
          })
        }
        wheelAccumulator.value = 0  // Reset accumulator
      }, 50)  // 50ms debounce
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      clearTimeout(wheelTimeout)
    }
  }, [isEngaged, isInView])

  const currentProperty = properties[currentIndex]

  // Generate AI analysis text based on property
  const generateAIAnalysis = (property) => {
    const analyses = {
      1: `🏡 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Beverly Hills represents one of the most prestigious zip codes globally, with properties appreciating at 8-12% annually. This area offers unparalleled privacy, security, and proximity to world-class dining and entertainment.

💎 Key Investment Insights:
• Property values in this area have shown consistent growth over the past decade
• The modern villa design appeals to international buyers and tech entrepreneurs
• 5 bedrooms and 6 bathrooms configuration is optimal for both family living and entertaining
• 8,200 sq ft provides luxury spacing without excessive maintenance costs

🎯 Buyer Profile Match:
Ideal for entertainment industry executives, tech leaders, or international investors seeking a prestigious Los Angeles address.

📈 Market Outlook:
Strong demand expected to continue with limited inventory in this price range. Potential for 15-20% appreciation over next 3 years.`,
      
      2: `🏖️ PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Malibu Beach offers the ultimate California coastal lifestyle. This oceanfront position provides both privacy and direct beach access - a rare combination. Properties with deeded beach access command 30-40% premium.

💎 Key Investment Insights:
• Oceanfront properties are irreplaceable assets with limited supply
• 7 bedrooms and 12,500 sq ft perfect for hosting and multi-generational living
• Tsunami-resistant construction and elevated positioning ensure safety
• Rental potential: $75,000-100,000/month for short-term luxury rentals

🎯 Buyer Profile Match:
Appeals to celebrities, CEOs, and international buyers seeking ultimate privacy with beach access.

📈 Market Outlook:
Oceanfront properties expected to outperform market by 2x due to scarcity. Climate-resilient features add long-term value.`,
      
      3: `🌆 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Hollywood Hills provides iconic city views and convenient access to studios, restaurants, and nightlife. This location balances privacy with urban connectivity.

💎 Key Investment Insights:
• Contemporary architecture appeals to younger affluent buyers
• 4 bedrooms optimal for couples or small families
• Smart home integration potential high
• Views protection ordinances ensure long-term value
• Lower maintenance costs compared to larger estates

🎯 Buyer Profile Match:
Perfect for entertainment industry professionals, young entrepreneurs, or as a secondary residence.

📈 Market Outlook:
Strong rental demand from film industry. Expected 10-15% appreciation with renovation potential adding another 20%.`,
      
      4: `🏰 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Bel Air represents old-money prestige with new-world amenities. Gated communities here offer maximum security and privacy, attracting global elite.

💎 Key Investment Insights:
• 6 bedrooms and 9,500 sq ft hits the sweet spot for luxury without excess
• Proximity to UCLA and top private schools adds family appeal
• Established neighborhood with stable, appreciating values
• HOA provides additional security and maintenance

🎯 Buyer Profile Match:
Ideal for established families, diplomats, or executives requiring security and school proximity.

📈 Market Outlook:
Consistent 8-10% annual appreciation expected. Limited new construction ensures value retention.`,
      
      5: `✨ PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Pacific Palisades offers the perfect blend of coastal living and urban sophistication. Known for excellent schools and family-friendly atmosphere.

💎 Key Investment Insights:
• 8 bedrooms and 14,000 sq ft - true estate living
• Architectural significance adds collector value
• Potential for subdivision or guest house addition
• Energy-efficient design reduces operating costs
• Resort-style amenities justify premium pricing

🎯 Buyer Profile Match:
Ultra-high-net-worth families, art collectors, or buyers seeking architectural significance.

📈 Market Outlook:
Limited inventory of architectural estates drives 15-20% premium. Trophy property status ensures liquidity.`,
      
      6: `🏄 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Venice Beach combines bohemian charm with luxury living. The area has seen significant gentrification with tech company presence driving values.

💎 Key Investment Insights:
• Modern design appeals to tech executives from nearby Silicon Beach
• 4 bedrooms perfect for work-from-home professionals
• Walking distance to beach, restaurants, and entertainment
• Lower price point offers better entry into luxury market
• Strong rental demand from tech workers

🎯 Buyer Profile Match:
Tech entrepreneurs, creative professionals, or investors targeting Silicon Beach growth.

📈 Market Outlook:
Rapid appreciation expected (12-18% annually) as tech sector expands. Gentrification continuing to drive values.`,
      
      7: `🌊 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Manhattan Beach represents the pinnacle of South Bay luxury. Top-rated schools and family atmosphere make this highly sought after.

💎 Key Investment Insights:
• 5 bedrooms and 7,800 sq ft perfect for growing families
• Proximity to LAX convenient for frequent travelers
• Beach volleyball capital adds lifestyle appeal
• Excellent schools drive consistent demand
• Walk/bike friendly community increases quality of life

🎯 Buyer Profile Match:
Professional families, athletes, or executives valuing schools and beach lifestyle.

📈 Market Outlook:
School districts ensure stable appreciation (8-12% annually). Limited coastal inventory supports long-term value.`,
      
      8: `👑 PROPERTY INTELLIGENCE REPORT: ${property.type}

📍 Location Analysis:
Brentwood offers prestigious living with convenient westside location. Celebrity enclave with top-tier amenities and services.

💎 Key Investment Insights:
• 9 bedrooms and 16,000 sq ft - true compound potential
• Suitable for multi-generational living or staff quarters
• Entertainment facilities support high-profile lifestyle
• Security features meet diplomatic standards
• Potential to host charitable events adds social capital

🎯 Buyer Profile Match:
Ultra-wealthy families, celebrities, international buyers, or those requiring maximum privacy and space.

📈 Market Outlook:
Trophy properties in Brentwood consistently outperform market. Expected 12-15% annual appreciation with limited competition.`
    }
    
    return analyses[property.id] || `Analyzing property data...`
  }

  // Handle AI analysis button click
  const handleAIAnalysis = () => {
    if (showAIAnalysis) {
      setShowAIAnalysis(false)
      setAiAnalysisText('')
    } else {
      setAiAnalysisText(generateAIAnalysis(currentProperty))
      setShowAIAnalysis(true)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"  // Reduced from 120vh for tighter vertical space
    >
      {/* Sticky Viewport - Keeps content in view during scroll */}
      <div className="sticky top-0 w-full h-screen">
        <div className="absolute inset-0">
          {/* Dynamic Background Gradients - Animated orbs that respond to scroll */}
          <div className="absolute inset-0">
            {/* Blue gradient orb - moves in circular pattern based on scroll */}
            <div
              className="absolute top-1/3 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent)',
                transform: `translate(${Math.sin(scrollProgress * Math.PI * 2) * 150}px, ${
                  Math.cos(scrollProgress * Math.PI * 2) * 100
                }px) scale(${1 + scrollProgress * 0.5})`,
                opacity: 0.6
              }}
            />
            {/* Gold gradient orb - inverse circular motion */}
            <div
              className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] rounded-full blur-[150px]"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
                transform: `translate(${
                  -Math.cos(scrollProgress * Math.PI * 2) * 150
                }px, ${Math.sin(scrollProgress * Math.PI * 2) * 100}px) scale(${
                  1 + scrollProgress * 0.3
                })`,
                opacity: 0.6
              }}
            />
            {/* Purple gradient orb - center rotating effect */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
              style={{
                background: 'radial-gradient(circle, rgba(147,51,234,0.2), transparent)',
                transform: `rotate(${scrollProgress * 180}deg) scale(${
                  1.2 + Math.sin(scrollProgress * Math.PI) * 0.3
                })`,
                opacity: 0.4
              }}
            />
          </div>

          {/* 3D Grid Floor - Creates perspective grid effect */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4">
            <div
              className="absolute inset-0 origin-bottom"
              style={{
                transform: `perspective(800px) rotateX(70deg) translateZ(-150px) translateY(100px)`,  // 3D perspective transformation
                // Grid pattern using repeating gradients
                background: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 59px,
                    rgba(212,175,55,0.15) 59px,
                    rgba(212,175,55,0.15) 61px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 59px,
                    rgba(212,175,55,0.15) 59px,
                    rgba(212,175,55,0.15) 61px
                  )
                `,
                backgroundSize: '60px 60px',
                backgroundPosition: `${scrollProgress * 60}px ${scrollProgress * 60}px`,  // Grid moves with scroll
                opacity: 0.7
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center top, rgba(212,175,55,0.3), transparent 60%)',
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>

          {/* Floating Particles - Small animated dots for ambiance */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-accent-gold/60 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  transform: `
                    translateZ(${particle.z}px)
                    translateY(${Math.sin((Date.now() * 0.001 * particle.speed) + particle.id) * 30}px)
                    translateX(${Math.cos((Date.now() * 0.001 * particle.speed) + particle.id) * 20}px)
                  `,
                  opacity: 0.4 + Math.sin((Date.now() * 0.001) + particle.id) * 0.3
                }}
              />
            ))}
          </div>

          {/* Quantum Sphere Container - Main 3D property cloud */}
          <div
            ref={sphereRef}
            className="absolute inset-0 w-full h-full"
          >
            {/* Interaction Zone - Click to engage, click outside or Escape to disengage */}
            <div
              className="absolute inset-y-0 left-6 right-6 h-full"
              onClick={(e) => {
                e.stopPropagation()
                setIsEngaged(true)
              }}
              style={{
                cursor: isEngaged ? 'grab' : 'pointer'
              }}
            />
            
            {/* Property Items - Individual cards positioned by QuantumPropertyCloud class */}
            {properties.map((prop, index) => (
              <div
                key={prop.id}
                className="q-prop-item absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"  // Centered positioning
                style={{
                  width: '260px',
                  height: '360px',
                  willChange: 'transform, opacity'  // Optimize for animations
                }}
              >
                <div className="relative w-full h-full group">
                  {/* Card Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-sm border border-white/10">
                    {/* Image */}
                    <div className="relative h-[60%] overflow-hidden">
                      <Image
                        src={prop.image}
                        alt={prop.type}
                        fill
                        priority={index <= 3}
                        sizes="260px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      {/* Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                        <span className="text-accent-gold text-xs font-semibold">EXCLUSIVE</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                      <h3 className="text-2xl font-light text-white mb-1">
                        {prop.price}
                      </h3>
                      <p className="text-accent-gold font-medium mb-2">
                        {prop.type}
                      </p>
                      <p className="text-white/70 text-sm mb-3">
                        {prop.location}
                      </p>
                      <div className="flex gap-4 text-xs text-white/60">
                        <span>{prop.beds} beds</span>
                        <span>{prop.baths} baths</span>
                        <span>{prop.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Focus Decor - Decorative pulsing rings (non-interactive) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                {/* Three concentric animated rings */}
                <div className="absolute inset-0 border-2 border-accent-gold/30 rounded-full animate-pulse" />
                <div className="absolute inset-2 border border-white/20 rounded-full animate-pulse animation-delay-200" />
                <div className="absolute inset-4 border border-accent-gold/20 rounded-full animate-pulse animation-delay-400" />
              </div>
            </div>
          </div>

          {/* Bottom UI - Navigation indicators and property info */}
          <div className="absolute bottom-0 left-0 right-0 p-8" style={{ zIndex: 10001 }}>
            <div className="max-w-7xl mx-auto relative">
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Progress Indicators - Clickable radio buttons AND scroll-wheel navigation */}
                <div className="flex items-center gap-6" style={{ position: 'relative', zIndex: 10002 }}>
                  <div className="flex gap-3">
                    {properties.map((_, i) => (
                      // CLICKABLE radio button indicators
                      <button
                        key={i}
                        className="relative group cursor-pointer"
                        onClick={() => {
                          setCurrentIndex(i)
                          if (cloudRef.current) {
                            cloudRef.current.focusOnIndex(i)
                          }
                          // Close AI analysis when switching properties
                          setShowAIAnalysis(false)
                          setAiAnalysisText('')
                        }}
                      >
                        {/* Dot indicator - gold when active */}
                        <div
                          className="w-2 h-2 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor:
                              i === currentIndex
                                ? '#d4af37'  // Gold for active
                                : 'rgba(255,255,255,0.2)',  // Dim white for inactive
                            transform: `scale(${i === currentIndex ? 1.5 : 1})`,  // Scale up when active
                            boxShadow:
                              i === currentIndex
                                ? '0 0 20px rgba(212,175,55,0.8)'  // Glow effect
                                : 'none'
                          }}
                        />
                        {/* Pulse animation for active indicator */}
                        {i === currentIndex && (
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent-gold/50 animate-ping" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Current Property Info with AI Button */}
                  <div className="text-white sm:pl-8 sm:border-l border-white/20 flex items-center gap-4 w-full sm:w-auto">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Currently Viewing</p>
                      <p className="text-lg font-light">{currentProperty.type}</p>
                      <p className="text-accent-gold">{currentProperty.location}</p>
                    </div>
                    
                    {/* AI Analysis Button */}
                    <button
                      onClick={handleAIAnalysis}
                      className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                        showAIAnalysis 
                          ? 'bg-gradient-to-r from-accent-gold/30 to-yellow-600/30 border-accent-gold/50' 
                          : 'bg-gradient-to-r from-accent-gold/10 to-yellow-600/10 hover:from-accent-gold/20 hover:to-yellow-600/20 border-accent-gold/30'
                      }`}
                      style={{ position: 'relative', zIndex: 10002 }}
                    >
                      <div className="relative">
                        <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {!showAIAnalysis && <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />}
                      </div>
                      <span className="text-white/70 group-hover:text-white text-xs font-light">
                        {showAIAnalysis ? 'Hide AI Analysis' : 'Perform AI Analysis'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Interaction Hints - Guide users on how to navigate */}
                <div className="text-right hidden sm:block">
                  <div className="text-white/60 text-sm animate-pulse">
                    {isEngaged ? (
                      <div className="flex items-center gap-2">
                        <span>Scroll to explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Click to interact</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-xs text-white/40">
                    {isEngaged ? 'Press Esc to exit • Scroll wheel or click dots' : 'Click anywhere on the sphere'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Inline AI Analysis Display */}
            {showAIAnalysis && (
              <>
                {/* Mobile: Absolute positioning above controls */}
                <div className="lg:hidden absolute -bottom-1/2 mb-4 left-0 right-0 px-8 pointer-events-none" style={{ zIndex: 10003 }}>
                  <div className="max-w-7xl mx-auto">
                    <div className="w-full max-w-sm bg-black/90 backdrop-blur-sm rounded-lg p-4 pointer-events-auto">
                      <TypewriterDisplay 
                        text={aiAnalysisText}
                        speed={35}
                        onComplete={() => {
                          setShowAIAnalysis(false)
                          setAiAnalysisText('')
                        }}
                        inline={true}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Desktop: Inline positioning below controls */}
                <div className="hidden lg:block max-w-7xl mx-auto mt-4 relative" style={{ zIndex: 10003 }}>
                  <div className="w-full max-w-2xl">
                    <TypewriterDisplay 
                      text={aiAnalysisText}
                      speed={35}
                      onComplete={() => {
                        setShowAIAnalysis(false)
                        setAiAnalysisText('')
                      }}
                      inline={true}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes glow {
          0%, 100% { 
            filter: drop-shadow(0 0 40px rgba(212, 175, 55, 0.5));
          }
          50% { 
            filter: drop-shadow(0 0 60px rgba(212, 175, 55, 0.8));
          }
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        :global(.quantum-front) {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Image from 'next/image'

// // Luxury property data
// const properties = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
//     price: '$8,500,000',
//     location: 'Beverly Hills',
//     type: 'Modern Villa'
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
//     price: '$12,300,000',
//     location: 'Malibu Beach',
//     type: 'Oceanfront Estate'
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
//     price: '$6,750,000',
//     location: 'Hollywood Hills',
//     type: 'Contemporary Mansion'
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
//     price: '$9,200,000',
//     location: 'Bel Air',
//     type: 'Luxury Estate'
//   },
//   {
//     id: 5,
//     image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
//     price: '$15,500,000',
//     location: 'Pacific Palisades',
//     type: 'Architectural Marvel'
//   },
//   {
//     id: 6,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
//     price: '$7,900,000',
//     location: 'Venice Beach',
//     type: 'Modern Beach House'
//   },
//   {
//     id: 7,
//     image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
//     price: '$11,200,000',
//     location: 'Manhattan Beach',
//     type: 'Coastal Paradise'
//   },
//   {
//     id: 8,
//     image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2071',
//     price: '$18,700,000',
//     location: 'Brentwood',
//     type: 'Premier Estate'
//   }
// ]

// const ImmersiveSection = () => {
//   // Tracking scroll / carousel
//   const sectionRef = useRef(null)
//   const carouselRef = useRef(null)

//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isInView, setIsInView] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const [hasCompletedCycle, setHasCompletedCycle] = useState(false)
//   const [scrollLocked, setScrollLocked] = useState(false)
//   const [momentum, setMomentum] = useState(0)
//   const [viewedSlides, setViewedSlides] = useState(new Set([0]))

//   // For background grid animation
//   const [gridAnimation, setGridAnimation] = useState(0)
//   const gridAnimationFrame = useRef(null)

//   // Lens flares: now with random initial coords, plus updated on each render
//   const [lensFlares, setLensFlares] = useState(
//     [...Array(8)].map(() => ({
//       x: Math.random() * 100,  // percentage
//       y: Math.random() * 100,  // percentage
//       scale: 0.4 + Math.random() * 0.7,
//       rotation: Math.random() * 360
//     }))
//   )

//   // Momentum update references
//   const animationFrame = useRef(null)
//   const wheelAccumulator = useRef(0)
//   const lastWheelTime = useRef(Date.now())
//   const scrollProgress = currentSlide / properties.length

//   // Track viewport size for parallax calculations
//   const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })

//   // Track mouse position for custom cursor & parallax
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

//   // Initialize viewport size and listen for resize
//   useEffect(() => {
//     const handleResize = () => {
//       setViewportSize({ width: window.innerWidth, height: window.innerHeight })
//     }
//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   // Update cursor position for custom cursor & parallax lens flares
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   // Smooth momentum update
//   const updateMomentum = useCallback(() => {
//     if (Math.abs(momentum) > 0.001) {
//       const friction = 0.94
//       setMomentum(prev => prev * friction)
//       animationFrame.current = requestAnimationFrame(updateMomentum)
//     } else {
//       setMomentum(0)
//     }
//   }, [momentum])

//   useEffect(() => {
//     if (Math.abs(momentum) > 0.001) {
//       animationFrame.current = requestAnimationFrame(updateMomentum)
//     }
//     return () => {
//       if (animationFrame.current) {
//         cancelAnimationFrame(animationFrame.current)
//       }
//     }
//   }, [momentum, updateMomentum])

//   // Animate the grid floor
//   useEffect(() => {
//     const animateGrid = () => {
//       setGridAnimation(prev => (prev + 0.01) % (Math.PI * 2))
//       gridAnimationFrame.current = requestAnimationFrame(animateGrid)
//     }
//     if (isInView) {
//       gridAnimationFrame.current = requestAnimationFrame(animateGrid)
//     }
//     return () => {
//       if (gridAnimationFrame.current) {
//         cancelAnimationFrame(gridAnimationFrame.current)
//       }
//     }
//   }, [isInView])

//   // Lens flare rotation animation
//   useEffect(() => {
//     let raf
//     const animateFlares = () => {
//       setLensFlares(previousFlares =>
//         previousFlares.map(flare => ({
//           ...flare,
//           rotation: (flare.rotation + 0.02) % 360
//         }))
//       )
//       raf = requestAnimationFrame(animateFlares)
//     }
//     animateFlares()
//     return () => cancelAnimationFrame(raf)
//   }, [])

//   // 3D transform for each property in carousel
//   const getPropertyTransform = (index) => {
//     let distance = index - currentSlide

//     // Circular wrap-around for a continuous feel
//     if (distance > properties.length / 2) {
//       distance -= properties.length
//     } else if (distance < -properties.length / 2) {
//       distance += properties.length
//     }

//     // 3D offset & rotation
//     const angle = distance * 40 // degrees
//     const z = -Math.abs(distance) * 300
//     const x = Math.sin((distance * Math.PI) / properties.length) * 450
//     const y = Math.abs(distance) * 30
//     const scale = Math.max(0.5, 1 - Math.abs(distance) * 0.15)
//     const opacity = Math.max(0.3, 1 - Math.abs(distance) * 0.2)

//     const isFront = Math.abs(distance) < 0.5

//     return {
//       transform: `
//         translateX(${x}px)
//         translateY(${isFront ? 0 : y}px)
//         translateZ(${z}px)
//         rotateY(${-angle}deg)
//         scale(${isFront ? 1.1 : scale})
//       `,
//       opacity: isFront ? 1 : opacity,
//       zIndex: Math.floor(100 - Math.abs(distance) * 10),
//       filter: isFront
//         ? 'none'
//         : `brightness(${0.6 + (1 - Math.abs(distance) * 0.2) * 0.4})`
//     }
//   }

//   // Scroll event handling
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return
//       const rect = sectionRef.current.getBoundingClientRect()
//       const windowHeight = window.innerHeight

//       // "In view" if mostly centered
//       const sectionCenter = rect.top + rect.height / 2
//       const viewportCenter = windowHeight / 2
//       const centerDistance = Math.abs(sectionCenter - viewportCenter)

//       const inView =
//         centerDistance < windowHeight * 0.3 &&
//         rect.top < windowHeight * 0.8 &&
//         rect.bottom > windowHeight * 0.2

//       setIsInView(inView)
//       setScrollLocked(inView && !hasCompletedCycle && isHovering)
//     }

//     const handleWheel = (e) => {
//       if (!sectionRef.current || !carouselRef.current) return
//       const rect = sectionRef.current.getBoundingClientRect()
//       const isVisible = rect.top < window.innerHeight && rect.bottom > 0

//       // Intercept scroll if hovered & visible
//       const shouldIntercept = isHovering && isVisible
//       if (shouldIntercept) {
//         e.preventDefault()
//         e.stopPropagation()

//         // Accumulate delta for smoother transitions
//         wheelAccumulator.current += e.deltaY
//         const threshold = 80

//         if (Math.abs(wheelAccumulator.current) > threshold) {
//           const direction = wheelAccumulator.current > 0 ? 1 : -1
//           let nextSlide = currentSlide + direction

//           // Wrap or proceed
//           if (nextSlide >= properties.length) {
//             if (viewedSlides.size === properties.length) {
//               // All slides viewed, let the user scroll onward
//               setHasCompletedCycle(true)
//               window.scrollBy({
//                 top: direction * 100,
//                 behavior: 'smooth'
//               })
//             } else {
//               // Wrap around
//               nextSlide = 0
//               setCurrentSlide(nextSlide)
//               setMomentum(e.deltaY * 0.3)
//             }
//           } else if (nextSlide < 0) {
//             if (viewedSlides.size === properties.length) {
//               setHasCompletedCycle(true)
//               window.scrollBy({
//                 top: direction * 100,
//                 behavior: 'smooth'
//               })
//             } else {
//               // Wrap around
//               nextSlide = properties.length - 1
//               setCurrentSlide(nextSlide)
//               setMomentum(e.deltaY * 0.3)
//             }
//           } else {
//             // Normal slide
//             setCurrentSlide(nextSlide)
//             setMomentum(e.deltaY * 0.3)
//           }

//           // Track viewed slides
//           if (nextSlide >= 0 && nextSlide < properties.length) {
//             setViewedSlides(prev => {
//               const newSet = new Set(prev)
//               newSet.add(nextSlide)
//               if (newSet.size === properties.length) {
//                 setHasCompletedCycle(true)
//               }
//               return newSet
//             })
//             setScrollLocked(true)
//           }

//           wheelAccumulator.current = 0
//         }

//         // Reset accumulation if user paused scrolling
//         const now = Date.now()
//         if (now - lastWheelTime.current > 150) {
//           wheelAccumulator.current = 0
//         }
//         lastWheelTime.current = now
//       }
//     }

//     // Reset when leaving section
//     const handleScrollReset = () => {
//       if (!sectionRef.current) return
//       const rect = sectionRef.current.getBoundingClientRect()
//       if (rect.bottom < 0 || rect.top > window.innerHeight) {
//         setHasCompletedCycle(false)
//         setCurrentSlide(0)
//         setViewedSlides(new Set([0]))
//         wheelAccumulator.current = 0
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     window.addEventListener('wheel', handleWheel, { passive: false })
//     window.addEventListener('scroll', handleScrollReset)

//     // Initial check
//     handleScroll()

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       window.removeEventListener('wheel', handleWheel)
//       window.removeEventListener('scroll', handleScrollReset)
//       if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
//       if (gridAnimationFrame.current) cancelAnimationFrame(gridAnimationFrame.current)
//     }
//   }, [currentSlide, hasCompletedCycle, viewedSlides, isHovering, scrollLocked])

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isInView || hasCompletedCycle || !isHovering) return

//       if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
//         e.preventDefault()
//         const nextSlide = Math.min(currentSlide + 1, properties.length - 1)
//         if (nextSlide !== currentSlide) {
//           setCurrentSlide(nextSlide)
//           setViewedSlides(prev => {
//             const newSet = new Set(prev)
//             newSet.add(nextSlide)
//             if (newSet.size === properties.length) {
//               setTimeout(() => setHasCompletedCycle(true), 500)
//             }
//             return newSet
//           })
//         }
//       } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
//         e.preventDefault()
//         const prevSlide = Math.max(currentSlide - 1, 0)
//         if (prevSlide !== currentSlide) {
//           setCurrentSlide(prevSlide)
//           setViewedSlides(prev => {
//             const newSet = new Set(prev)
//             newSet.add(prevSlide)
//             if (newSet.size === properties.length) {
//               setTimeout(() => setHasCompletedCycle(true), 500)
//             }
//             return newSet
//           })
//         }
//       }
//     }

//     window.addEventListener('keydown', handleKeyDown)
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, [currentSlide, isInView, hasCompletedCycle, isHovering])

//   // Parallax offset for lens flares
//   const parallaxX = viewportSize.width
//     ? cursorPos.x - viewportSize.width / 2
//     : 0
//   const parallaxY = viewportSize.height
//     ? cursorPos.y - viewportSize.height / 2
//     : 0
//   const parallaxStrength = 0.02

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[120vh] bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden"
//     >
//       {/* Custom Luxury Cursor */}
//       <div
//         className="pointer-events-none fixed z-[9999] w-12 h-12 border-2 border-accent-gold/60 rounded-full"
//         style={{
//           left: cursorPos.x,
//           top: cursorPos.y,
//           transform: 'translate(-50%, -50%)',
//           mixBlendMode: 'difference'
//         }}
//       />

//       {/* Fixed (sticky) viewport container */}
//       <div className="sticky top-0 w-full h-[80vh]">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-full h-full max-w-7xl mx-auto px-8">

//             {/* Dynamic Background */}
//             <div className="absolute inset-0">
//               {/* Animated gradient orbs */}
//               <div
//                 className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]"
//                 style={{
//                   transform: `translate(${
//                     Math.sin(scrollProgress * Math.PI * 2) * 100
//                   }px, ${
//                     Math.cos(scrollProgress * Math.PI * 2) * 50
//                   }px) scale(${1 + scrollProgress * 0.5})`,
//                   opacity: 0.3 + scrollProgress * 0.4
//                 }}
//               />
//               <div
//                 className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent-gold/20 to-orange-500/20 rounded-full blur-[120px]"
//                 style={{
//                   transform: `translate(${
//                     -Math.cos(scrollProgress * Math.PI * 2) * 100
//                   }px, ${
//                     Math.sin(scrollProgress * Math.PI * 2) * 50
//                   }px) scale(${1 + scrollProgress * 0.3})`,
//                   opacity: 0.3 + scrollProgress * 0.4
//                 }}
//               />

//               {/* Rotating gradient mesh */}
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background: `
//                     radial-gradient(
//                       circle at ${50 + Math.cos(scrollProgress * Math.PI * 2) * 20}% ${
//                         50 + Math.sin(scrollProgress * Math.PI * 2) * 20
//                       }%,
//                       rgba(212, 175, 55, 0.1) 0%,
//                       transparent 50%
//                     ),
//                     radial-gradient(
//                       circle at ${50 - Math.sin(scrollProgress * Math.PI * 2) * 30}% ${
//                         50 - Math.cos(scrollProgress * Math.PI * 2) * 30
//                       }%,
//                       rgba(255, 255, 255, 0.05) 0%,
//                       transparent 50%
//                     )
//                   `,
//                   transform: `rotate(${scrollProgress * 360}deg) scale(${
//                     1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1
//                   })`
//                 }}
//               />
//             </div>

//             {/* 3D Grid Floor */}
//             <div className="absolute bottom-0 left-0 right-0 h-2/3">
//               <div
//                 className="absolute inset-0 origin-bottom"
//                 style={{
//                   transform: `
//                     perspective(1000px)
//                     rotateX(${70 + Math.sin(gridAnimation) * 5}deg)
//                     translateZ(${50 + Math.sin(gridAnimation * 2) * 30}px)
//                     scale(${1 + Math.sin(gridAnimation * 1.5) * 0.05})
//                   `,
//                   transition: 'none'
//                 }}
//               >
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `
//                       linear-gradient(rgba(212,175,55,${
//                         0.15 + Math.sin(gridAnimation) * 0.1
//                       }) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(212,175,55,${
//                         0.15 + Math.sin(gridAnimation) * 0.1
//                       }) 1px, transparent 1px)
//                     `,
//                     backgroundSize: `${
//                       50 + Math.sin(gridAnimation * 3) * 5
//                     }px ${50 + Math.sin(gridAnimation * 3) * 5}px`,
//                     backgroundPosition: `
//                       ${Math.sin(gridAnimation * 2) * 20}px
//                       ${Math.cos(gridAnimation * 2) * 20}px
//                     `,
//                     opacity: 0.4 + Math.sin(gridAnimation * 2) * 0.2
//                   }}
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `
//                       radial-gradient(
//                         circle at ${
//                           50 + Math.sin(gridAnimation) * 30
//                         }% ${
//                           80 + Math.cos(gridAnimation * 1.5) * 10
//                         }%,
//                         rgba(212,175,55,${
//                           0.1 + Math.sin(gridAnimation * 2) * 0.05
//                         }) 0%,
//                         transparent 50%
//                       )
//                     `,
//                     transform: `scale(${
//                       1 + Math.sin(gridAnimation * 0.5) * 0.3
//                     })`,
//                     opacity: 0.5
//                   }}
//                 />
//               </div>
//             </div>

//             {/* 3D Property Carousel */}
//             <div
//               ref={carouselRef}
//               className="absolute inset-x-0 inset-y-0 flex items-center justify-center transition-all duration-300"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => {
//                 setIsHovering(false)
//                 setScrollLocked(false)
//               }}
//               style={{
//                 perspective: '1200px',
//                 perspectiveOrigin: '0% 50%',
//                 cursor: isInView ? (isHovering ? 'grabbing' : 'grab') : 'default',
//                 boxShadow:
//                   isInView && isHovering
//                     ? 'inset 0 0 100px rgba(212, 175, 55, 0.1)'
//                     : 'none'
//               }}
//             >
//               <div
//                 className="relative w-full h-full"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 {properties.map((property, index) => {
//                   const transform = getPropertyTransform(index)
//                   const isFront = Math.abs(index - currentSlide) < 0.5

//                   return (
//                     <div
//                       key={property.id}
//                       className="absolute left-1/2 top-[0%] -translate-x-1/2 -translate-y-1/2"
//                       style={{
//                         ...transform,
//                         transition: scrollLocked
//                           ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
//                           : 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
//                         transformStyle: 'preserve-3d',
//                         willChange: 'transform'
//                       }}
//                     >
//                       <div className="relative">
//                         {/* Glow effect for the front card */}
//                         {isFront && (
//                           <div
//                             className="absolute -inset-12 bg-gradient-to-r from-accent-gold/30 via-white/20 to-accent-gold/30 rounded-3xl blur-3xl"
//                             style={{
//                               animation: 'pulse 3s ease-in-out infinite'
//                             }}
//                           />
//                         )}

//                         {/* Property card */}
//                         <div
//                           className="relative w-[380px] h-[520px] lg:w-[420px] lg:h-[580px] rounded-2xl overflow-hidden"
//                           style={{
//                             boxShadow: isFront
//                               ? '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(212, 175, 55, 0.4)'
//                               : '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
//                             background:
//                               'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))'
//                           }}
//                         >
//                           <Image
//                             src={property.image}
//                             alt={property.type}
//                             fill
//                             className="object-cover"
//                             sizes="(max-width: 768px) 380px, 420px"
//                             priority={index < 3}
//                             quality={85}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

//                           <div className="absolute bottom-0 left-0 right-0 p-6">
//                             <div
//                               className="transform transition-all duration-500"
//                               style={{
//                                 opacity: isFront ? 1 : 0.7,
//                                 transform: isFront
//                                   ? 'translateY(0)'
//                                   : 'translateY(20px)'
//                               }}
//                             >
//                               <h3 className="text-3xl lg:text-4xl font-light text-white mb-1">
//                                 {property.price}
//                               </h3>
//                               <p className="text-base lg:text-lg text-accent-gold font-medium">
//                                 {property.type}
//                               </p>
//                               <p className="text-sm lg:text-base text-white/80">
//                                 {property.location}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* Floating gold dust */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               {[...Array(40)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-1 h-1 bg-accent-gold/50 rounded-full"
//                   style={{
//                     left: `${(i * 33) % 100}%`,
//                     top: `${(i * 47) % 100}%`,
//                     transform: `
//                       translateY(${
//                         Math.sin(scrollProgress * Math.PI * 2 + i) * 100
//                       }px)
//                       translateX(${
//                         Math.cos(scrollProgress * Math.PI * 2 + i) * 50
//                       }px)
//                     `,
//                     opacity:
//                       0.3 + Math.sin(scrollProgress * Math.PI * 2 + i * 0.5) * 0.4
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Lens Flares with parallax */}
//             <div className="absolute inset-0 pointer-events-none">
//               {lensFlares.map((flare, i) => (
//                 <div
//                   key={i}
//                   className="absolute rounded-full blur-[180px]"
//                   style={{
//                     width: '300px',
//                     height: '300px',
//                     left: `${flare.x}%`,
//                     top: `${flare.y}%`,
//                     background:
//                       'radial-gradient(rgba(255,255,255,0.2), transparent 60%)',
//                     transform: `
//                       translate(-50%, -50%)
//                       translate(${parallaxX * parallaxStrength}px, ${parallaxY * parallaxStrength}px)
//                       scale(${flare.scale})
//                       rotate(${flare.rotation}deg)
//                     `,
//                     opacity: 0.15
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Interaction Zone Indicator when not hovering */}
//             {isInView && !isHovering && (
//               <div className="absolute inset-x-0 inset-y-0 pointer-events-none">
//                 <div className="w-full h-full border border-white/5 rounded-3xl animate-pulse" />
//               </div>
//             )}

//             {/* Progress Indicator */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
//               <div className="flex items-center gap-4">
//                 {/* Slide dots */}
//                 <div className="flex gap-2">
//                   {properties.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         setCurrentSlide(index)
//                         setViewedSlides(prev => {
//                           const newSet = new Set(prev)
//                           newSet.add(index)
//                           if (newSet.size === properties.length) {
//                             setHasCompletedCycle(true)
//                           }
//                           return newSet
//                         })
//                       }}
//                       className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
//                       style={{
//                         backgroundColor:
//                           index === currentSlide
//                             ? '#d4af37'
//                             : viewedSlides.has(index)
//                             ? 'rgba(212, 175, 55, 0.5)'
//                             : 'rgba(255, 255, 255, 0.3)',
//                         transform: `scale(${index === currentSlide ? 1.5 : 1})`,
//                         boxShadow:
//                           index === currentSlide
//                             ? '0 0 10px rgba(212, 175, 55, 0.5)'
//                             : 'none'
//                       }}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>

//                 {/* Scroll hint */}
//                 {isInView && (
//                   <div className="ml-8 text-white/60 text-sm">
//                     <span className={isHovering ? '' : 'animate-pulse'}>
//                       {isHovering
//                         ? `Scroll to explore (${viewedSlides.size}/${properties.length} viewed)`
//                         : 'Hover & scroll to explore properties'}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Pulse keyframe */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ImmersiveSection
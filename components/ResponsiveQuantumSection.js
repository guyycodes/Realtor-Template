'use client'

import { useState, useEffect } from 'react'
import QuantumImmersiveSection from './QuantumImmersiveSection'

export default function ResponsiveQuantumSection() {
  const [showSection, setShowSection] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [frontScale, setFrontScale] = useState(1.5)
  const [frontXOffset, setFrontXOffset] = useState(0)
  const [frontYOffset, setFrontYOffset] = useState(0)

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      const width = window.innerWidth
      setShowSection(width >= 390)
      
      // Calculate scale and X offset based on screen size
      if (width < 390) {
        setFrontScale(0.0)  // Won't be shown anyway
        setFrontXOffset(0)
        setFrontYOffset(0)
      } else if (width < 500) {
        setFrontScale(0.7)
        setFrontXOffset(-60)  // Shift left by 60px
        setFrontYOffset(-120)
      } else if (width < 600) {
        setFrontScale(.9)
        setFrontXOffset(-30)  // Shift left by 30px
        setFrontYOffset(-120)
      } else {
        setFrontScale(1.5)  // Default full scale
        setFrontXOffset(0)   // No offset on larger screens
        setFrontYOffset(0)
      }
    }

    // Initial check
    checkScreenSize()
    setIsLoaded(true)

    // Listen for resize
    window.addEventListener('resize', checkScreenSize)
    
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // Don't render anything until we've checked the screen size
  if (!isLoaded) {
    return null
  }

  // Only render the section if screen is 390px or wider
  if (!showSection) {
    return null
  }

  return <QuantumImmersiveSection frontScale={frontScale} frontXOffset={frontXOffset} frontYOffset={frontYOffset} />
}

'use client'

import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const elementRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined' || !window.IntersectionObserver) {
      return
    }

    const element = elementRef.current
    if (!element) return

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(element)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
        ...options
      }
    )

    observerRef.current = observer

    const timeoutId = setTimeout(() => {
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    }, 10)

    return () => {
      clearTimeout(timeoutId)
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [mounted, options.threshold, options.rootMargin, options.once])

  return { ref: elementRef, isVisible, mounted }
}

export function useStaggeredIntersection(count, options = {}) {
  const [visibleItems, setVisibleItems] = useState({})
  const [mounted, setMounted] = useState(false)
  const itemRefs = useRef({})
  const observerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined' || !window.IntersectionObserver) {
      return
    }

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = entry.target.getAttribute('data-item-id')
          if (entry.isIntersecting && itemId) {
            setVisibleItems((prev) => ({ ...prev, [itemId]: true }))
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          } else if (options.once === false && itemId) {
            setVisibleItems((prev) => ({ ...prev, [itemId]: false }))
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
        ...options
      }
    )

    observerRef.current = observer

    const timeoutId = setTimeout(() => {
      Object.values(itemRefs.current).forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref)
        }
      })
    }, 10)

    return () => {
      clearTimeout(timeoutId)
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [mounted, count, options.threshold, options.rootMargin, options.once])

  return { itemRefs, visibleItems, setItemRef: (id, el) => { itemRefs.current[id] = el }, mounted }
}

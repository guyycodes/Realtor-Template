'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

/**
 * Wrap any content to animate it on scroll.
 *
 * @param {'fade-up'|'fade-down'|'fade-in'|'fade-left'|'fade-right'|'scale'} animation
 * @param {number} delay - transition delay in ms
 * @param {number} threshold - intersection observer threshold (0-1)
 * @param {string} as - HTML element to render (default: 'div')
 */
export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold })

  return (
    <Tag
      ref={ref}
      className={`animate-${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

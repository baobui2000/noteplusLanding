'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'scaleUp'
}

export function ScrollAnimation({ children, animation = 'fadeIn' }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play none none reverse',
      },
    })

    switch (animation) {
      case 'fadeIn':
        tl.from(element, { opacity: 0, duration: 1 })
        break
      case 'slideUp':
        tl.from(element, { y: 50, opacity: 0, duration: 1 })
        break
      case 'scaleUp':
        tl.from(element, { scale: 0.8, opacity: 0, duration: 1 })
        break
    }

    return () => {
      tl.kill()
    }
  }, [animation])

  return <div ref={ref}>{children}</div>
}


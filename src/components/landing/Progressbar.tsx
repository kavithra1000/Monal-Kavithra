'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ProgressBar = () => {
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
  }, [])

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 w-full bg-violet-600/75 origin-left scale-x-0 z-50"
    />
  )
}

export default ProgressBar

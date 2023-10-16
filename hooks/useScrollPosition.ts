'use client'
import { useEffect, useState } from 'react'

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return Math.round(scrollPosition)
}

export default useScrollPosition

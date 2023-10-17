'use client'
import { useEffect } from 'react'

import { useMediaQuery } from 'react-responsive'

import useScrollPosition from '@/hooks/useScrollPosition'
import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'

import Navbar from './Navbar/Navbar'

const Header = () => {
  const scrollPosition = useScrollPosition()
  const { onActive, onDeactive } = useSearch()

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })

  useEffect(() => {
    if (scrollPosition > 675) {
      onActive()
    } else {
      onDeactive()
    }
  }, [scrollPosition])

  return (
    <header
      className={cn(
        'fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300',
        scrollPosition > 40
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent shadow-none py-6'
      )}
    >
      <Navbar desktopMode={desktopMode} />
    </header>
  )
}

export default Header

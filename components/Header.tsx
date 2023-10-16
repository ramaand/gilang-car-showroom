'use client'
import { useMediaQuery } from 'react-responsive'

import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

import Navbar from './Navbar/Navbar'

const Header = () => {
  const scrollPosition = useScrollPosition()

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })

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

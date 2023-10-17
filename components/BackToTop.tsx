'use client'

import { BsChevronUp } from 'react-icons/bs'
import { Link } from 'react-scroll'

import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

const BackToTop = () => {
  const scrollPosition = useScrollPosition()

  return (
    <Link
      to="home"
      smooth
      className={cn(
        'fixed bg-blue-600 hover:bg-blue-700 w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white rounded-xl',
        scrollPosition < 400 && 'hidden'
      )}
    >
      <BsChevronUp className="text-xl" />
    </Link>
  )
}

export default BackToTop

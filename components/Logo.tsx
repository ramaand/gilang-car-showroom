'use client'
import { Montserrat } from 'next/font/google'

import { Link } from 'react-scroll'

import { cn } from '@/lib/utils'

const monserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

interface LogoProps {
  desktopMode: boolean
}

const Logo: React.FC<LogoProps> = ({ desktopMode }) => {
  return (
    <Link to="home" smooth={desktopMode}>
      {/* <Image src={'/logo.png'} width={194} height={64} alt='Image Logo' /> */}
      <div
        className={cn('text-2xl font-bold select-none', monserrat.className)}
      >
        Gilang Showroom
      </div>
    </Link>
  )
}

export default Logo

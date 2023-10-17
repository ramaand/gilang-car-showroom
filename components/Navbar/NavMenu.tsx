'use client'

import { menuItems } from '@/mocks/menu'
import { Link } from 'react-scroll'

import { Button } from '@/components/ui/button'

import useNavMobile from '@/hooks/useNavMobile'
import { cn } from '@/lib/utils'

import SearchMobile from '@/components/SearchMobile'

import MenuItem from './MenuItem'

interface NavMenuProps {
  desktopMode: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({ desktopMode }) => {
  const { isOpen } = useNavMobile()
  return (
    <nav
      className={cn(
        'flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold md:font-medium md:flex-row md:w-max md:gap-x-8 md:h-max md:bg-transparent md:pb-0 transition-all duration-150 text-center md:text-left uppercase text-sm md:text-[15px] md:normal-case',
        isOpen ? 'max-h-max py-8 px-4 md:py-0' : 'max-h-0 md:max-h-max'
      )}
    >
      {menuItems.map((menu) => (
        <MenuItem
          key={menu.label}
          label={menu.label}
          to={menu.to}
          desktopMode={desktopMode}
        />
      ))}
      <Link
        className="md:hidden"
        to="/"
        activeClass="text-accent"
        smooth={desktopMode}
        spy
      >
        <Button className="font-light uppercase">See all cars</Button>
      </Link>
      <SearchMobile />
    </nav>
  )
}

export default NavMenu

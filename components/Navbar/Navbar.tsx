'use client'
import Logo from '@/components/Logo'

import NavMenu from './NavMenu'
import ToggleMenu from './ToggleMenu'

interface NavbarProps {
  desktopMode: boolean
}

const Navbar: React.FC<NavbarProps> = ({ desktopMode }) => {
  return (
    <div className="md:container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex justify-between items-center px-4">
        <Logo desktopMode={desktopMode} />

        <ToggleMenu />
      </div>

      <NavMenu desktopMode={desktopMode} />
    </div>
  )
}

export default Navbar

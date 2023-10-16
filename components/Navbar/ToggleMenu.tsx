'use client'
import { BiX } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'

import useNavMobile from '@/hooks/useNavMobile'

const ToggleMenu = () => {
  const { isOpen, onToggle } = useNavMobile()
  return (
    <div onClick={onToggle} className="cursor-pointer md:hidden">
      {isOpen ? (
        <BiX className="text-4xl" />
      ) : (
        <RxHamburgerMenu className="text-4xl" />
      )}
    </div>
  )
}

export default ToggleMenu

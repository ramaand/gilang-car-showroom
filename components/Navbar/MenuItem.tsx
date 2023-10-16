import { Link } from 'react-scroll'

interface MenuItemProps {
  children?: React.ReactNode
  to: string
  label?: string
  desktopMode: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  to,
  label,
  desktopMode,
}) => {
  return (
    <Link
      className="cursor-pointer"
      to={to}
      activeClass="text-accent"
      smooth={desktopMode}
      spy
    >
      {children ? children : label}
    </Link>
  )
}

export default MenuItem

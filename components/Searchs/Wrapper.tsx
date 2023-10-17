'use client'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex-1 max-sm:w-full flex justify-center md:justify-start items-center relative">
      {children}
    </div>
  )
}

export default Wrapper

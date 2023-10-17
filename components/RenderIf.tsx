'use client'

interface RenderIfProps {
  isTrue: boolean | any
  children: React.ReactNode
}

const RenderIf: React.FC<RenderIfProps> = ({ isTrue, children }) => {
  return isTrue ? children : null
}

export default RenderIf

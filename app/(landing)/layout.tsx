'use client'

import { domAnimation, LazyMotion } from 'framer-motion'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export default LandingLayout

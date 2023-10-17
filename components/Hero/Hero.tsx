'use client'

import { fadeIn } from '@/variants'
import { m } from 'framer-motion'
import { easeInOut } from 'framer-motion/dom'

import useSearch from '@/hooks/useSearch'

import Search from '@/components/Search'

import Content from './Content'

const Hero = () => {
  const { isActive } = useSearch()

  return (
    <section className="h-screen md:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <Content />
      {isActive ? (
        <m.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[64px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </m.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <m.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Search />
          </m.div>
        </div>
      )}
    </section>
  )
}

export default Hero

'use client'

import useSearch from '@/hooks/useSearch'

import Search from '@/components/Search'

import Content from './Content'

const Hero = () => {
  const { isActive } = useSearch()

  return (
    <section className="h-screen md:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <Content />
      {isActive ? (
        <div className="fixed top-[64px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  )
}

export default Hero

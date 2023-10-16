'use client'

const Hero = () => {
  return (
    <section className="h-screen md:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">Hero container</div>
      {true ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">Search</div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          Search
        </div>
      )}
    </section>
  )
}

export default Hero
'use client'

import Image from 'next/image'

const CarEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/assets/images/hero-image.png"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <h2 className="h2">Oops, no car found!</h2>
      <p className='text-neutral-600'>Find your dream cars here</p>
    </div>
  )
}

export default CarEmpty

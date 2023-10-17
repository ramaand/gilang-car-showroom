'use client'

import Image from 'next/image'

import { fadeIn } from '@/variants'
import { m } from 'framer-motion'

import { Button } from '@/components/ui/button'

const Content = () => {
  return (
    <div className="container mx-auto h-full md:pt-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-start h-full">
        <div className="text-center md:max-w-xl md:text-left mt-16 md:mt-0 select-none">
          <m.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="h1"
          >
            Unleash Your Drive: Explore Our{' '}
            <span className="text-rose-700">Exquisite Cars</span>{' '}
          </m.h1>
          <m.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="description max-w-[550px] mx-auto md:mx-0 mb-6 md:mb-10"
          >
            Discover Automotive Excellence: Your Dream Ride Awaits at Gilang
            Showroom
          </m.p>
          <m.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="flex gap-x-3 justify-center md:justify-start"
          >
            <Button className="h-14">
              <Image
                src="/assets/icons/app-store.svg"
                width={132}
                height={32}
                alt="App Store"
              />
            </Button>
            <Button className="h-14">
              <Image
                src="/assets/icons/google-play.svg"
                width={132}
                height={32}
                alt="Google Play"
              />
            </Button>
          </m.div>
        </div>

        <m.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[50px] min-[1680px]:right-[120px] xl:top-48"
        >
          <Image
            src="/assets/images/hero-image.png"
            alt="Hero Image"
            fill
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </m.div>
      </div>
    </div>
  )
}

export default Content

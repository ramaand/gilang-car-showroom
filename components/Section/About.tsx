'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { fadeIn } from '@/variants'
import { m, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { AiFillCar } from 'react-icons/ai'
import { MdHomeRepairService, MdLocationCity } from 'react-icons/md'

import RenderIf from '@/components/RenderIf'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60% 0px' })

  return (
    <section className="h-screen flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <m.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex-1 mb-8 md:mb-0"
          >
            <Image
              src="/assets/images/hero-image.png"
              className="rounded-xl"
              alt="About"
              width={600}
              height={448}
            />
          </m.div>

          <div className="flex flex-1 items-center md:justify-center ">
            <div className="md:max-w-[512px]">
              <m.h2
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                className="h2"
              >
                Car Services Simplified.
              </m.h2>
              <m.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                className="mb-8"
              >
                We are passionate about bringing the finest automobiles to our
                valued customers. With a rich history spanning over 5+ years,
                our commitment to quality and excellence is unwavering.
              </m.p>

              <m.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px]">
                  <AiFillCar className="text-5xl text-blue-600" />
                  <div className="text-3xl font-black mb-2">
                    <RenderIf isTrue={isInView}>
                      <CountUp start={0} end={35} duration={3} delay={1} /> +
                    </RenderIf>
                  </div>

                  <div className="uppercase text-sm font-semibold text-neutral-600">
                    Car <br /> types
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  <MdLocationCity className="text-5xl text-blue-600" />
                  <div className="text-3xl font-black mb-2">
                    <RenderIf isTrue={isInView}>
                      <CountUp start={0} end={75} duration={3} delay={1} />
                    </RenderIf>
                  </div>

                  <div className="uppercase text-sm font-semibold text-neutral-600">
                    Showroom <br /> Outlets
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  <MdHomeRepairService className="text-5xl text-blue-600" />
                  <div className="text-3xl font-black mb-2">
                    <RenderIf isTrue={isInView}>
                      <CountUp start={0} end={30} duration={3} delay={1} />
                    </RenderIf>
                  </div>

                  <div className="uppercase text-sm font-semibold text-neutral-600">
                    Repair <br /> points
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

'use client'

import { fadeIn } from '@/variants'
import { m } from 'framer-motion'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import CopyRight from '@/components/CopyRight'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <m.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col md:flex-row md:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Logo desktopMode={true} />
            <div className="text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-4">
                <AiFillPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              <div className="flex items-center gap-x-4">
                <MdEmail />
                <div className="font-medium">sales@showroom.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col md:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Indonesia</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-neutral-600">Mon - Fri</div>
                <div className="font-semibold">08:00AM - 06:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-neutral-600">Sat</div>
                <div className="font-semibold">10:00AM - 04:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-neutral-600">Sun</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer

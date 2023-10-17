'use client'

import Image from 'next/image'

import { CarProps } from '@/types'
import { BsArrowRightCircle, BsFillFuelPumpFill } from 'react-icons/bs'
import { GiCarWheel, GiSteeringWheel } from 'react-icons/gi'

import { Button } from '@/components/ui/button'

interface CarCardProps {
  car: CarProps
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h3 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h3>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/assets/images/hero-image.png"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-600">
          <div className="flex flex-col justify-center items-center gap-2">
            <GiSteeringWheel size={24} />
            <p className="text-sm">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiCarWheel size={24} />
            <p className="text-sm uppercase">{drive}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillFuelPumpFill size={24} />
            <p className="text-sm">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700">
            <div className='flex flex-row items-center justify-center w-full'>
              <div className='w-full text-center'>View More</div>
              <BsArrowRightCircle size={24} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CarCard

'use client'

import { AiFillCar } from 'react-icons/ai'

import Wrapper from './Wrapper'

interface ModelProps {
  onValueChange: (value: string) => void
  value: any
}

const Model: React.FC<ModelProps> = ({ onValueChange, value }) => {
  return (
    <Wrapper>
      <AiFillCar size={24} />
      <input
        type="text"
        name="model"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Model"
        className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
      />
    </Wrapper>
  )
}

export default Model

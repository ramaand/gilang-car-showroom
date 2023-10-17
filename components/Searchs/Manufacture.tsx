'use client'

import { GiSteeringWheel } from 'react-icons/gi'

import { manufacturers } from '@/constant'

import CustomSelect from '@/components/Inputs/CustomSelect'

import Wrapper from './Wrapper'

interface ManufactureProps {
  onValueChange: (value: string) => void
}

const Manufacture: React.FC<ManufactureProps> = ({ onValueChange }) => {
  return (
    <Wrapper>
      <GiSteeringWheel size={24} />
      <CustomSelect
        options={manufacturers}
        placeholder="Manufacture"
        onValueChange={(e) => onValueChange(e)}
      />
    </Wrapper>
  )
}

export default Manufacture

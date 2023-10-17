'use client'

import { BsFillFuelPumpFill } from 'react-icons/bs'

import { fuels } from '@/constant'

import CustomSelect from '@/components/Inputs/CustomSelect'

import Wrapper from './Wrapper'

interface FuelProps {
  onValueChange: (value: string) => void
}

const Fuel: React.FC<FuelProps> = ({ onValueChange }) => {
  return (
    <Wrapper>
      <BsFillFuelPumpFill size={24} />
      <CustomSelect
        options={fuels}
        placeholder="Fuel"
        onValueChange={(e) => onValueChange(e)}
      />
    </Wrapper>
  )
}

export default Fuel

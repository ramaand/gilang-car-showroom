'use client'

import { BsCalendarFill } from 'react-icons/bs'

import { yearsOfProduction } from '@/constant'

import CustomSelect from '@/components/Inputs/CustomSelect'

import Wrapper from './Wrapper'

interface YearProps {
  onValueChange: (value: string) => void
}

const Year: React.FC<YearProps> = ({ onValueChange }) => {
  return (
    <Wrapper>
      <BsCalendarFill size={20} />
      <CustomSelect
        options={yearsOfProduction}
        placeholder="Year"
        onValueChange={(e) => onValueChange(e)}
      />
    </Wrapper>
  )
}

export default Year

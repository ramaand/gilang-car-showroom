'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface OptionProps {
  title: string
  value: string
}

interface CustomSelectProps {
  onValueChange: (value: string) => void
  options: string[] | OptionProps[]
  placeholder?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onValueChange,
  options,
  placeholder = 'Please pick',
}) => {
  return (
    <Select onValueChange={(e) => onValueChange(e)}>
      <SelectTrigger className="pl-2 xl:pl-12 w-auto lg:w-[180px] outline-none border-none focus:outline-none focus:ring-0 ring-0 ring-offset-0 focus:ring-offset-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="outline-none border-none focus:outline-none focus:ring-0 ring-0  ring-offset-0 focus:ring-offset-0">
        <ScrollArea className="h-[200px] rounded-md p-4">
          {options.map((item) => {
            if (typeof item === 'string') {
              return (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              )
            } else {
              return (
                <SelectItem value={item.value} key={item.value}>
                  {item.title}
                </SelectItem>
              )
            }
          })}
        </ScrollArea>
      </SelectContent>
    </Select>
  )
}

export default CustomSelect

'use client'

import { Button } from '@/components/ui/button'

import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'

const Search = () => {
  const { isActive } = useSearch()

  return (
    <div
      className={cn(
        'hidden md:block w-full relative shadow-lg',
        isActive
          ? 'bg-white rounded-none md:h-[80px]'
          : 'bg-white rounded-xl py-6 md:px-4 md:h-[98px]'
      )}
    >
      <div className="md:h-full flex items-center px-6 md:px-0">
        <div className="md:h-full flex items-center px-6 md:px-0">
          <Button variant="destructive">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Search

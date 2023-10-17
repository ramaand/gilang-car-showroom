'use client'

import { Button } from '@/components/ui/button'

const SearchMobile = () => {
  return (
    <div className="md:hidden font-medium">
      <div className="container mx-auto">
        <div>
          <div className="flex items-center px-6">
            <Button variant='destructive'>Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMobile

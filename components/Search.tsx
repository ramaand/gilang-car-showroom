'use client'

import { useMemo, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import queryString from 'query-string'

import { Button } from '@/components/ui/button'

import { LIMIT } from '@/constant'
import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'

import RenderIf from './RenderIf'
import Fuel from './Searchs/Fuel'
import Manufacture from './Searchs/Manufacture'
import Model from './Searchs/Model'
import Year from './Searchs/Year'

const Search = () => {
  const { isActive } = useSearch()
  const router = useRouter()
  const params = useSearchParams()

  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [fuel, setFuel] = useState('')

  const isParamsExist = useMemo(
    () => Object.entries(queryString.parse(params.toString())).length,
    [params]
  )

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    updateSearchParams(
      model.toLocaleLowerCase(),
      make.toLocaleLowerCase(),
      year,
      fuel
    )
  }

  const updateSearchParams = (
    model: string,
    make: string,
    year: string,
    fuel: string
  ) => {
    let currentQuery = {}

    if (params) {
      currentQuery = queryString.parse(params.toString())
    }

    let updatedQuery: any = {
      ...currentQuery,
      limit: LIMIT,
    }

    if (model) updatedQuery.model = model
    if (make) updatedQuery.make = make
    if (year) updatedQuery.year = year
    if (fuel) updatedQuery.fuel = fuel

    const newPathname = queryString.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )
    router.push(newPathname)
  }

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
        <form
          className="md:h-full w-full flex items-center px-6 gap-2 xl:gap-4"
          onSubmit={handleSearch}
        >
          <Manufacture onValueChange={(e) => setMake(e)} />
          <Year onValueChange={(e) => setYear(e)} />
          <Fuel onValueChange={(e) => setFuel(e)} />
          <Model onValueChange={(e) => setModel(e)} value={model} />

          <Button type="submit">Search</Button>
          <RenderIf isTrue={isParamsExist}>
            <Button
              variant="destructive"
              onClick={(e) => {
                e.preventDefault()
                router.push('/')
              }}
            >
              Clear Filter
            </Button>
          </RenderIf>
        </form>
      </div>
    </div>
  )
}

export default Search

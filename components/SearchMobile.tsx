'use client'

import { useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import queryString from 'query-string'

import { Button } from '@/components/ui/button'

import { LIMIT } from '@/constant'
import useNavMobile from '@/hooks/useNavMobile'
import useSearch from '@/hooks/useSearch'

import Fuel from './Searchs/Fuel'
import Manufacture from './Searchs/Manufacture'
import Model from './Searchs/Model'
import Year from './Searchs/Year'

const SearchMobile = () => {
  const { onClose } = useNavMobile()
  const { isActive } = useSearch()
  const router = useRouter()
  const params = useSearchParams()

  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [fuel, setFuel] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose()

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
    <div className="md:hidden font-medium">
      <div className="container mx-auto">
        <form className="flex flex-col gap-y-4" onSubmit={handleSearch}>
          <Manufacture onValueChange={(e) => setMake(e)} />
          <Year onValueChange={(e) => setYear(e)} />
          <Fuel onValueChange={(e) => setFuel(e)} />
          <Model onValueChange={(e) => setModel(e)} value={model} />

          <Button type="submit">Search</Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault()
              onClose()
              router.push('/')
            }}
          >
            Clear Filter
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SearchMobile

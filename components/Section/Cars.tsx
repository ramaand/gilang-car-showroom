'use client'
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useSearchParams } from 'next/navigation'

import { CarProps } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import queryString from 'query-string'

import {
  HEADERS,
  LIMIT,
  RAPID_API_URL,
} from '@/constant'

import CarCard from '@/components/Car/CarCard'
import CarEmpty from '@/components/Car/CarEmpty'
import CarModal from '@/components/Modals/CarModal'
import RenderIf from '@/components/RenderIf'
import CarSkeleton from '@/components/Skeletons/CarSkeleton'

const defaultFilter = { model: '', year: '2022', limit: LIMIT, fuel_type: '' }

const Cars = () => {
  const params = useSearchParams()

  const isParamsExist = useMemo(
    () => Object.entries(queryString.parse(params.toString())).length,
    [params]
  )

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      const newParams = isParamsExist
        ? queryString.parse(params.toString())
        : defaultFilter

      const { data } = await axios.get(RAPID_API_URL, {
        headers: HEADERS,
        params: newParams,
      })
      return data
    },
  })

  const emptyDataArray = Array.from({ length: 8 }, () => '')

  const isDataEmpty = useMemo(
    () => Array.isArray(data) && !data.length && !isLoading && !isError,
    [data, isLoading, isError]
  )

  useEffect(() => {
    if (isParamsExist) refetch()
  }, [isParamsExist])

  return (
    <section
      className="min-h-screen py-20 flex items-center bg-gray-100"
      id="cars"
    >
      <div className="container mx-auto">
        <RenderIf isTrue={isLoading}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {emptyDataArray.map((item, i) => (
              <CarSkeleton key={'skeleton-car-' + i} />
            ))}
          </div>
        </RenderIf>
        {isDataEmpty ? (
          <CarEmpty />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.map((car: CarProps, i: number) => (
              <CarCard key={car.city_mpg + car.model + i} car={car} />
            ))}
          </div>
        )}
      </div>
      <CarModal />
    </section>
  )
}

export default Cars

'use client'

import Image from 'next/image'

import { Dialog, DialogContent } from '@/components/ui/dialog'

import useCarModal from '@/hooks/useCarModal'

const CarModal = () => {
  const { isOpen, data, onToggle } = useCarModal()
  const { make, model } = data || {}

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="w-full md:min-w-[752px] lg:min-w-[1008px] xl:min-w-[1264px]">
        <div className="flex flex-1 flex-col gap-3">
          <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
            <Image
              src="/assets/images/hero-image.png"
              alt="Car Model"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
              <Image
                src="/assets/images/hero-image.png"
                alt="Car Model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
              <Image
                src="/assets/images/hero-image.png"
                alt="Car Model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
              <Image
                src="/assets/images/hero-image.png"
                alt="Car Model"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h2 className="font-semibold text-xl capitalize">
              {make} {model}
            </h2>

            <div className="mt-3 flex flex-wrap gap-4">
              {Object.entries(data || {}).map(([key, value]) => (
                <div
                  className="flex justify-between gap-5 w-full text-right"
                  key={key}
                >
                  <h4 className="capitalize">{key.split('_').join(' ')}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CarModal

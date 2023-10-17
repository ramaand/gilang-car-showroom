import { create } from 'zustand'

import { CarProps } from '@/types'

interface CarModalStore {
  isOpen: boolean
  data: CarProps | null
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

const useCarModal = create<CarModalStore>((set) => ({
  isOpen: false,
  data: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useCarModal

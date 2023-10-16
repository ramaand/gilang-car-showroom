import { create } from 'zustand'

interface NavMobileStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

const useNavMobile = create<NavMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useNavMobile

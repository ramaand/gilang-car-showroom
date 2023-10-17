import { create } from 'zustand'

interface SearchStore {
  isActive: boolean
  onActive: () => void
  onDeactive: () => void
  onToggle: () => void
}

const useSearch = create<SearchStore>((set) => ({
  isActive: false,
  onActive: () => set({ isActive: true }),
  onDeactive: () => set({ isActive: false }),
  onToggle: () => set((state) => ({ isActive: !state.isActive })),
}))

export default useSearch

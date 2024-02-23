import { create } from 'zustand'

export const useHandleModal = create((set) => ({
  isShown: false,
  showModal: () => set((state) => ({isShown: !state.isShown})) 
}))
import { create } from 'zustand'

export const useHandleMenu = create((set) => ({
  isClosed: true,
  openMenu: () => set((state) => ({isClosed: !state.isClosed})) 
}))
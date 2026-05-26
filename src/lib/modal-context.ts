import { createContext, useContext } from "react"

interface ModalContextType {
  openModal: () => void
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export const useModal = () => useContext(ModalContext)

import type { ReactNode } from 'react'
import PrototypeFonts from './PrototypeFonts'

export default function PrototypeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PrototypeFonts />
      {children}
    </>
  )
}

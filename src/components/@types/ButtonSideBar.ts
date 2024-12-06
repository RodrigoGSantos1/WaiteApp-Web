import { ReactNode } from 'react'

export interface IButtonSideBar {
  icon: ReactNode
  title: string
  path: string
  onClick?: () => void
}

import { IOrder } from '@/@types/getOrder'
import { ReactNode } from 'react'
export interface IStatusCard {
  icon: ReactNode
  title: string
  data: IOrder[]
}

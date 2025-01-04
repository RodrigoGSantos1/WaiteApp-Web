import { ReactNode } from 'react'

export interface Iitems {
  quanty: number
  product_id: number
  name: string
  price: number
  image: ''
  category: string
}
export interface IOrder {
  id: number
  date: string
  table: number
  status: string
  items: Iitems[]
  category?: string[]
  total_value: number
}

export interface IStatusCard {
  icon: ReactNode
  title: string
  data: IOrder[]
}

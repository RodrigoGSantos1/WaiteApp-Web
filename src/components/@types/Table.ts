import { FilterFn } from '@tanstack/react-table'

export type ColumnDefinition<T> = {
  id: string
  header: () => React.ReactNode
  accessor?: keyof T | ((row: T) => any)
  cell?: (info: { getValue: () => any }) => React.ReactNode
  filterFn?: FilterFn<T>
}

export type TableProps<T> = {
  data: T[]
  columns: ColumnDefinition<T>[]
}

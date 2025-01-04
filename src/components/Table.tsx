import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { TableProps } from './@types/Table'

const columnHelper = createColumnHelper<any>()

export function Table<T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) {
  const tableColumns = columns.map((col) =>
    columnHelper.accessor(
      typeof col.accessor === 'string' ? col.accessor : String(col.accessor),
      {
        id: col.id,
        header: col.header,
        cell: col.cell || ((info) => info.getValue()),
      },
    ),
  )

  const tableInstance = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden border border-gray-300 rounded-md">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-300/10">
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" text-left p-3 border-none font-semibold text-small"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="bg-gray-50 py-5 border-b-[1px] last:border-none"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-5 text-gray-900 text-small">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

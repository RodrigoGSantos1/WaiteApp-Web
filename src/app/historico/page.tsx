'use client'
import { Modal, Table } from '@/components'
import { useState } from 'react'
import EyeIcon from '@/assets/icons/interface/eye.svg'
import TrashIcon from '@/assets/icons/action/trash.svg'
import OrderIcon from '@/assets/icons/interface/order.svg'
import Image from 'next/image'
import pizzaImage from '@/assets/images/pizza.jpg'
import { Button } from '@/components/UI'
import { ColumnDefinition } from '@/components/@types/Table'
import { Iitems, IOrder } from '@/@types/getOrder'

export default function History() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<IOrder | null>(null)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const data: IOrder[] = [
    {
      id: 1,
      table: 1,
      status: 'waiting',
      date: '07/12/2022',
      items: [
        {
          quanty: 1,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
        {
          quanty: 2,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
      ],
      total_value: 120.0,
    },
    {
      id: 2,
      table: 8,
      status: 'waiting',
      date: '07/12/2022',
      items: [
        {
          quanty: 1,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
        {
          quanty: 2,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
      ],
      total_value: 120.0,
    },
    {
      id: 2,
      table: 2,
      status: 'production',
      date: '08/12/2022',
      items: [
        {
          quanty: 1,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
        {
          quanty: 2,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
      ],
      total_value: 120.0,
    },
    {
      id: 3,
      table: 5,
      status: 'ready',
      date: '09/12/2022',
      items: [
        {
          quanty: 1,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
        {
          quanty: 2,
          product_id: 1,
          name: 'Pizza Frango com Catupiry',
          price: 40.0,
          image: '',
          category: 'pizza',
        },
      ],
      total_value: 120.0,
    },
  ]

  const columns: ColumnDefinition<IOrder>[] = [
    {
      id: 'table',
      header: () => 'Mesa',
      accessor: 'table',
    },
    {
      id: 'date',
      header: () => 'Data',
      accessor: 'date',
    },
    {
      id: 'name',
      header: () => 'Nome',
      accessor: 'items',
      cell: (info) => {
        const items = info.getValue() as Iitems[]
        return items.map((item) => item.name).join(', ')
      },
    },
    {
      id: 'category',
      header: () => 'Categoria',
      accessor: 'items',
      cell: (info) => {
        const items = info.getValue() as Iitems[]
        const uniqueCategories = Array.from(
          new Set(items.map((item) => item.category)),
        )
        return (
          <div className="flex items-center gap-2">
            <span role="img" aria-label="pizza">
              🍕
            </span>
            {uniqueCategories.join(', ')}
          </div>
        )
      },
    },
    {
      id: 'price',
      header: () => 'Total',
      accessor: 'total_value',
    },
    {
      id: 'actions',
      header: () => 'Ações',
      cell: (info) => {
        const rowData = (info as any).row.original
        return (
          <div>
            <button
              className="mr-5"
              onClick={() => {
                setModalData(rowData)
                openModal()
              }}
            >
              <EyeIcon />
            </button>
            <button
              onClick={() => {
                setModalData(rowData)
                openModal()
              }}
            >
              <TrashIcon />
            </button>
          </div>
        )
      },
    },
  ]

  const modalContent = () => {
    return (
      <div className="flex flex-col items-start text-gray-900">
        <div className=" w-[70%] flex flex-col text-medium mb-5">
          <p className="text-small text-gray-900 opacity-80 mb-2">
            Status do Pedido
          </p>
          <div className="flex items-center">
            <p className="text-center text-gray-900 font-bold ml-1">
              07/12/2024
            </p>
          </div>
        </div>
        <div className="mb-10 w-full">
          <p className="text-small text-gray-900 opacity-80 mb-2">items</p>
          {modalData?.items.map((obj, key) => (
            <div key={key} className="mb-7 flex">
              <Image src={pizzaImage} alt="relogio" width={50} />
              <span className="text-small text-gray-500 ml-3">
                {obj.quanty}x
              </span>
              <div className="ml-3">
                <span className="text-gray-900 font-bold">{obj.name}</span>
                <p className="text-small text-gray-500">
                  R$ {obj.price * obj.quanty}
                </p>
              </div>
            </div>
          ))}
          <div className="flex w-full justify-between">
            <p className="text-small text-gray-900 opacity-80 mb-2">Total</p>
            <span className="text-gray-900 font-bold mb-2">
              R$ {modalData?.total_value}
            </span>
          </div>
        </div>
        <div className="flex justify-start items-start w-fit">
          {modalData?.status !== 'ready' && (
            <>
              <Button title="Exluir Registro" type="text" />
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Mesa ${modalData?.table}`}
      >
        {modalContent()}
      </Modal>
      <div className="w-full h-16 flex flex-col justify-between">
        <div className="flex">
          <OrderIcon className="stroke-gray-900 scale-150 mr-5" />
          <h4 className="text-h4 text-gray-900">Histórico</h4>
        </div>
        <p className="text-medium text-gray-700 mt-2">
          Visualize pedidos anteriores
        </p>
      </div>
      <div className="flex justify-start items-center mt-12 mb-5">
        <h1 className="font-bold text-large mr-3">Pedidos</h1>
        <p className="bg-gray-300/20 p-1 rounded-md">{data.length}</p>
      </div>
      <Table data={data} columns={columns} />
    </div>
  )
}

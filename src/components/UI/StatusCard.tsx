import { useState } from 'react'
import { IStatusCard } from '../@types/StatusCard'
import { Modal } from '../Modal'
import { Button } from './Button'
import Image from 'next/image'
import pizzaImage from '@/assets/images/pizza.jpg'
import { toast } from 'react-toastify'
import { Iitems, IOrder } from '@/@types/getOrder'

export function StatusCard({ icon, title, data }: IStatusCard) {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<IOrder | null>(null)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const buttonTitle =
    modalData?.status === 'waiting'
      ? 'Iniciar Preparo'
      : modalData?.status === 'production'
        ? 'Concluir Pedido'
        : ''

  function handlesubmit() {
    if (modalData && modalData.status === 'waiting') {
      toast.success(`O preparo do pedido da ${modalData?.table} iniciou.`)
      closeModal()
    } else {
      toast.success(`O pedido da ${modalData?.table} foi finalizado.`)
      closeModal()
    }
  }

  const modalContent = () => {
    return (
      <div className="flex flex-col items-start text-gray-900">
        <div className=" w-[70%] flex flex-col text-medium mb-5">
          <p className="text-small text-gray-900 opacity-80 mb-2">
            Status do Pedido
          </p>
          <div className="flex items-center">
            {icon}
            <p className="text-center text-gray-900 font-bold ml-1">{title}</p>
          </div>
        </div>
        <div className="mb-10 w-full">
          <p className="text-small text-gray-900 opacity-80 mb-2">items</p>
          {modalData?.items.map((obj: Iitems, key: number) => (
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
        <div className="flex justify-between items-center w-full">
          {modalData?.status !== 'ready' && (
            <>
              <Button title="Cancelar Pedido" type="text" />
              <Button
                title={buttonTitle}
                type="primary"
                onClick={handlesubmit}
              />
            </>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="rounded-md border border-gray-300/40 bg-white-200 flex flex-col items-center justify-center p-4 cursor-pointer h-fit">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalData?.table ? `Mesa ${modalData?.table}` : ''}
      >
        {modalContent()}
      </Modal>
      <div className="flex items-center">
        {icon}
        <h5 className="text-h5 mx-5">{title}</h5>
        <p className="bg-gray-300/20 py-1 px-2 rounded">{data.length}</p>
      </div>
      {data.map((obj, key) => (
        <div
          key={key}
          onClick={() => {
            openModal(), setModalData(obj)
          }}
          className="bg-white-100 w-full h-[128px] rounded-md border border-gray-300/40 flex flex-col items-center justify-center mt-5"
        >
          <span className="text-medium">Mesa {obj.table}</span>
          <p className="text-small text-gray-700">{obj.items.length} itens</p>
        </div>
      ))}
    </div>
  )
}

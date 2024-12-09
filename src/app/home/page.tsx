'use client'
import { Button, StatusCard } from '@/components/UI'
import HomeIcon from '@/assets/icons/interface/home.svg'
import RefreshIcon from '@/assets/icons/interface/refresh.svg'
import Image from 'next/image'

import ClockImage from '@/assets/icons/category/clock.png'
import ChefImage from '@/assets/icons/category/cozinhando.png'
import CheckImange from '@/assets/icons/category/check.png'
import { Modal } from '@/components'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const Clock = () => <Image src={ClockImage} alt="relogio" width={30} />
  const Chef = () => <Image src={ChefImage} alt="chef" width={30} />
  const Check = () => <Image src={CheckImange} alt="check" width={30} />

  const modalContent = () => {
    return (
      <div className="flex flex-col justify-center items-center text-gray-900">
        <div className=" w-[70%] flex flex-col text-medium mb-10">
          <p className="text-center">
            Ao reiniciar o dia, todos os pedidos serão arquivados no status
            atual.
          </p>
          <br />
          <p className="text-center">Deseja reiniciar o dia?</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <Button title="Não, continuar pedidos" type="text" />
          <Button title="Sim, reiniciar o dia" type="primary" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Reiniciar o Dia"
        icon={<RefreshIcon className="stroke-gray-700 mr-3 cursor-pointer" />}
      >
        {modalContent()}
      </Modal>
      <div className="w-full h-20 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <HomeIcon className="stroke-gray-900 scale-150 mr-5" />
            <h4 className="text-h4 text-gray-900">Home</h4>
          </div>
          <p className="text-medium text-gray-700 mt">
            Acompanhe os pedidos dos clientes
          </p>
        </div>
        <button
          className="flex text-primary font-bold cursor-pointer p-3 max-h-fit"
          onClick={openModal}
        >
          <RefreshIcon className="stroke-primary mr-3" />
          Reiniciar o dia
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full mt-20">
        <StatusCard icon={<Clock />} title="Fila de espera" />
        <StatusCard icon={<Chef />} title="Em Produção" />
        <StatusCard icon={<Check />} title="Pronto" />
      </div>
    </div>
  )
}

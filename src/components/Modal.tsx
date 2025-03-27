import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '@/assets/icons/interface/close.svg'

export interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  icon?: ReactNode
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  icon,
  className,
}: IModal) {
  if (typeof window === 'undefined' || !isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div
        className={`relative z-10 min-w-[480px] p-6 bg-white rounded-lg shadow-lg ${className}`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            {icon && icon}
            <h4 className="text-h4 text-gray-900">{title}</h4>
          </div>
          <CloseIcon
            className="text-gray-700 cursor-pointer"
            onClick={onClose}
            width={24}
          />
        </div>
        <div className="max-h-[90%] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

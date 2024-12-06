'use client'
import { IButtonCategory } from '../@types/ButtonCategory'

export function ButtonCategory({
  active = true,
  icon,
  title,
  onClick,
}: IButtonCategory) {
  return (
    <div
      className={`flex flex-col items-center justify-between w-[74px] h-[81px] ${active ? 'opacity-100' : 'opacity-50'}`}
    >
      <button
        className="rounded-[75px] w-[52px] h-[52px] bg-white flex items-center justify-center shadow-[0px_2px_1px_0px_#0000001A]"
        onClick={onClick}
      >
        {icon}
      </button>
      <span className="text-smal font-bold">{title}</span>
    </div>
  )
}

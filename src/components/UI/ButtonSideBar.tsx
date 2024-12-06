'use client'

import { usePathname, useRouter } from 'next/navigation'
import { IButtonSideBar } from '../@types/ButtonSideBar'

export function ButtonSideBar({ icon, title, path, onClick }: IButtonSideBar) {
  const router = useRouter()
  const pathname = usePathname()

  const active: boolean = pathname === path

  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer ${active ? 'text-primary stroke-primary' : 'text-gray-700 stroke-gray-700'}`}
      onClick={() => router.push(path)}
    >
      {icon}
      <p className="text-small mt-2">{title}</p>
      <div
        className={`w-3 h-[2px] mt-2 ${active ? 'bg-primary' : 'bg-transparent'}`}
      />
    </div>
  )
}

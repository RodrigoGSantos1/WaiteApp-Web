'use client'
import { ReactNode } from 'react'
import { SideBar } from '@/components/SideBar'

type SideBarLayoutProps = {
  children: ReactNode
}

export function SideBarLayout({ children }: SideBarLayoutProps) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto p-10">{children}</main>
    </div>
  )
}

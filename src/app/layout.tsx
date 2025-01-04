'use client'
import { SideBarLayout } from '@/components/SideBarLayout'
import { usePathname } from 'next/navigation'

import '../globals.css'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const noSideBarRoutes = ['/']
  const shouldShowSideBar = !noSideBarRoutes.includes(pathname)

  return (
    <html lang="en">
      <body className="antialiased">
        {shouldShowSideBar && <SideBarLayout>{children}</SideBarLayout>}
        {!shouldShowSideBar && children}
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  )
}

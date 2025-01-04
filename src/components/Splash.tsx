'use client'
import Waiters from '@/assets/svg/waiters.svg'
import { motion } from 'motion/react'

export function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="h-screen w-screen bg-primary flex flex-col items-center justify-center relative top-0"
    >
      <Waiters />
      <p className="text-white w-full text-center text-[32px] font-light">
        <span className="text-white font-bold">WAITER</span>APP
      </p>
      <p className="text-medium text-white">O App do Garçom</p>
    </motion.div>
  )
}

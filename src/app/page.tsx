'use client'
import { useEffect, useState } from 'react'
import { Splash } from '@/components'
import { Button, Input } from '@/components/UI'
import { motion } from 'motion/react'

type ICredentials = {
  email: string
  password: string
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [credentials, setCredentials] = useState<ICredentials>({
    email: '',
    password: '',
  })

  const isButtonDisabled = !credentials.email || !credentials.password

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 900)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {showSplash ? (
        <Splash />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <p className="text-medium text-gray-900">Bem-vindo(a) ao</p>
          <p className="text-gray-900 w-full text-center text-[32px] font-light">
            <span className="text-gray-900 font-bold">WAITER</span>APP
          </p>
          <div className="w-[80%] max-w-[385px] mt-8">
            <Input
              label="E-mail"
              name="email"
              placeholder="Seu e-mail de acesso"
              value={credentials.email}
              onChange={handleChange}
            />
            <Input
              label="Senha"
              name="password"
              placeholder="Informe sua senha"
              className="mt-8"
              type="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button
              type="primary"
              title="Entrar"
              className="mt-8"
              disabled={isButtonDisabled}
              onClick={() => console.log('Formulário enviado:', credentials)}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

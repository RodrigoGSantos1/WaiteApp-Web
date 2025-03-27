'use client'
import { useState } from 'react'
import EyeHidden from '@/assets/icons/interface/eye-hidden.svg'
import Eye from '@/assets/icons/interface/eye.svg'
import Error from '@/assets/icons/interface/info.svg'
import { IInput } from '../@types/Input'

export function Input({
  placeholder,
  label,
  error,
  disabled,
  name,
  type,
  className,
  icon,
  ...rest
}: IInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <div className={`w-full mx-auto space-y-1 ${className || ''}`}>
      <label className="relative block">
        <span
          className={`text-gray-900 text-sm font-small ${disabled && 'text-gray-300'}`}
        >
          {label}
        </span>
        <div className="relative mt-1">
          <input
            name={name}
            type={
              isPasswordVisible || type !== 'password' ? 'text' : 'password'
            }
            placeholder={placeholder}
            disabled={disabled}
            className={`font-sans h-[56px] block text-sm leading-5 w-full py-2 px-3 border-[1px] border-gray-300 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-700 bg-white pr-10 ${disabled && 'bg-white-200'}`}
            {...rest}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {icon}
            {type === 'password' &&
              (isPasswordVisible ? (
                <EyeHidden className={`${disabled && 'opacity-50'}`} />
              ) : (
                <Eye className={`${disabled && 'opacity-50'}`} />
              ))}
          </button>
        </div>
      </label>
      {error && (
        <div className="flex items-center">
          <Error className="stroke-red-600 mr-2" />
          <span className="text-red-600 text-sm">{error}</span>
        </div>
      )}
    </div>
  )
}

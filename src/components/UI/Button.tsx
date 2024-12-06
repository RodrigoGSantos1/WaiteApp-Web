import { IButton } from '../@types/Button'
import { Loading } from './Loading/Loading'

export function Button({
  title,
  type,
  disabled = false,
  loading,
  className,
  onClick,
}: IButton) {
  const strokeColor = type === 'primary' ? '#FFFFFF' : '#D73035'

  return (
    <button
      className={`h-[46px] text-center w-full font-bold flex items-center justify-center min-w-[98px] ${className}
      ${type === 'primary' && !disabled && 'text-white bg-primary rounded-[44px]'}
      ${type === 'border' && !disabled && 'text-primary rounded-[44px] border-2 border-primary'}
      ${type === 'text' && !disabled && 'text-primary'}

      ${type === 'primary' && disabled && 'text-white bg-gray-300 rounded-[44px]'}
      ${type === 'border' && disabled && 'text-gray-300 rounded-[44px] border-2 border-gray-300 '}
      ${type === 'text' && disabled && 'text-gray-300'}
    `}
      onClick={onClick}
    >
      {loading ? <Loading strokeColor={strokeColor} /> : title}
    </button>
  )
}

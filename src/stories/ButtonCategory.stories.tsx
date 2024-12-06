import { Meta, StoryObj } from '@storybook/react'
import { ButtonCategory } from '@/components/UI'
import { fn } from '@storybook/test'
import PizzaImage from '@/assets/icons/category/pizza.png'
import BatataImage from '@/assets/icons/category/batata.png'
import { IButtonCategory } from '@/components/@types/ButtonCategory'
import Image from 'next/image'

// Definindo os componentes de ícones
const PizzaIcon = () => (
  <Image src={PizzaImage} alt="Pizza" className="w-[60%]" />
)
const BatataIcon = () => (
  <Image src={BatataImage} alt="Batata" className="w-[60%]" />
)

export default {
  title: 'UI/ButtonCategory',
  component: ButtonCategory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['Pizza', 'Batata'],
      mapping: {
        Pizza: <PizzaIcon />,
        Batata: <BatataIcon />,
      },
      control: { type: 'inline-radio' },
    },
  },
  args: {
    icon: <PizzaIcon />,
    onClick: fn(),
  },
} as Meta<IButtonCategory>

export const Default: StoryObj<IButtonCategory> = {
  args: {
    icon: <PizzaIcon />,
    active: true,
    title: 'Pizza',
  },
}

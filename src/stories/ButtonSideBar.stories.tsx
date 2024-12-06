import { Meta, StoryObj } from '@storybook/react'
import { ButtonSideBar } from '@/components/UI'
import { fn } from '@storybook/test'
import HomeIcon from '@/assets/icons/interface/home.svg'
import OrderIcon from '@/assets/icons/interface/order.svg'
import { IButtonSideBar } from '@/components/@types/ButtonSideBar'

export default {
  title: 'UI/ButtonSideBar',
  component: ButtonSideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['Home', 'Histórico'],
      mapping: {
        Home: <HomeIcon />,
        Histórico: <OrderIcon />,
      },
      control: { type: 'inline-radio' },
    },
  },
  args: {
    onClick: fn(),
  },
} as Meta<IButtonSideBar>

export const Default: StoryObj<IButtonSideBar> = {
  args: {
    title: 'home',
    icon: <HomeIcon />,
    path: '/home',
  },
}

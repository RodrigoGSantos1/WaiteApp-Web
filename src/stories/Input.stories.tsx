import { Meta, StoryObj } from '@storybook/react'
import { ButtonCategory, Input } from '@/components/UI'
import { fn } from '@storybook/test'
import PizzaImage from '@/assets/icons/category/pizza.png'
import BatataImage from '@/assets/icons/category/batata.png'
import { IButtonCategory } from '@/components/@types/ButtonCategory'
import Image from 'next/image'
import { IInput } from '@/components/@types/Input'

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {},
} as Meta<IInput>

export const Default: StoryObj<IInput> = {
  args: {
    name: 'input1',
    label: 'Input 1',
  },
}

export const Placeholder: StoryObj<IInput> = {
  args: {
    name: 'input1',
    label: 'Input 1',
    placeholder: 'Placeholder',
  },
}

export const Error: StoryObj<IInput> = {
  args: {
    name: 'input1',
    label: 'Input 1',
    error: 'input Error',
  },
}

export const Password: StoryObj<IInput> = {
  args: {
    name: 'input1',
    label: 'Input 1',
    type: 'password',
  },
}

export const Disabled: StoryObj<IInput> = {
  args: {
    name: 'input1',
    label: 'Input 1',
    type: 'password',
    disabled: true,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/UI'
import { fn } from '@storybook/test'
import { IButton } from '@/components/@types/Button'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} as Meta<IButton>

export const Default: StoryObj<IButton> = {
  args: {
    title: 'label',
    type: 'text',
    disabled: false,
    loading: false,
  },
}

export const Primary: StoryObj<IButton> = {
  args: {
    title: 'label',
    type: 'primary',
    disabled: false,
    loading: false,
  },
}

export const Border: StoryObj<IButton> = {
  args: {
    title: 'label',
    type: 'border',
    disabled: false,
    loading: false,
  },
}

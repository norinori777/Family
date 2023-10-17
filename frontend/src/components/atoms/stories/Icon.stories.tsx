import { Icon } from '../Icon'
import { Pencil } from '../../Icons/Pencil'
import { XCircle } from '../../Icons/XCircle'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Icon>

export const pencil: Story = {
  args: {
    icon: Pencil,
  },
}

export const xCircle: Story = {
  args: {
    icon: XCircle,
  },
}

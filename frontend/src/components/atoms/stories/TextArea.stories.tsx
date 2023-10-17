import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { TextArea } from '../TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'atoms/TextArea',
  component: TextArea,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    label: 'primary',
    theme: 'primary',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}

export const Secondary: Story = {
  args: {
    label: 'secondary',
    theme: 'secondary',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}

export const Success: Story = {
  args: {
    label: 'success',
    theme: 'success',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}
export const Danger: Story = {
  args: {
    label: 'danger',
    theme: 'danger',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}
export const Warning: Story = {
  args: {
    label: 'warning',
    theme: 'warning',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}
export const Normal: Story = {
  args: {
    label: 'normal',
    theme: 'normal',
    placeholder: 'button',
    description: 'description',
    rowLength: 5,
  },
}

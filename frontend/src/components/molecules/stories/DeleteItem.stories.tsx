import type { Meta, StoryObj } from '@storybook/react'
import { DeleteItem } from '../DeleteItem'

const meta: Meta<typeof DeleteItem> = {
  title: 'molecules/DeleteItem',
  component: DeleteItem,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DeleteItem>

export const Primary: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'primary',
    action: () => {},
  },
}
export const Secondary: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'secondary',
    action: () => {},
  },
}
export const Success: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'success',
    action: () => {},
  },
}
export const Warning: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'warning',
    action: () => {},
  },
}
export const Danger: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'danger',
    action: () => {},
  },
}
export const Normal: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'normal',
    action: () => {},
  },
}
export const White: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'white',
    action: () => {},
  },
}
export const Black: Story = {
  args: {
    item: { label: 'test', name: 'test', value: 'test' },
    theme: 'black',
    action: () => {},
  },
}

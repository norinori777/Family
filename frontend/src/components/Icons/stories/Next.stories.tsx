import type { Meta, StoryObj } from '@storybook/react'

import { Next } from '../Next'

const meta: Meta<typeof Next> = {
  title: 'Icons/Next',
  component: Next,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Next>

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
}
export const Success: Story = {
  args: {
    theme: 'success',
  },
}
export const Danger: Story = {
  args: {
    theme: 'danger',
  },
}
export const Warning: Story = {
  args: {
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    theme: 'normal',
  },
}

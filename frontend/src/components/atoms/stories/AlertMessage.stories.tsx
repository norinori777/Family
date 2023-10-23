import type { Meta, StoryObj } from '@storybook/react'
import { AlertMessage } from '../AlertMessage'

const meta: Meta<typeof AlertMessage> = {
  title: 'atoms/AlertMessage',
  component: AlertMessage,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AlertMessage>

export const Primary: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'primary',
    showAlert: true,
  },
}

export const Secondary: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'secondary',
    showAlert: true,
  },
}

export const Success: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'success',
    showAlert: true,
  },
}

export const Danger: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'danger',
    showAlert: true,
  },
}

export const Warning: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'warning',
    showAlert: true,
  },
}

export const Normal: Story = {
  args: {
    message: 'ネットワークの障害が発生しました。',
    theme: 'normal',
    showAlert: true,
  },
}

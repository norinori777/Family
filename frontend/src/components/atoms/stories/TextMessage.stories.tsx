import type { Meta, StoryObj } from '@storybook/react'
import { TextMessage } from '../TextMessage'

const meta: Meta<typeof TextMessage> = {
  title: 'atoms/TextMessage',
  component: TextMessage,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextMessage>

export const Primary: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'primary',
    size: 'base',
  },
}

export const Secondary: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'secondary',
    size: 'base',
  },
}

export const Success: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'success',
    size: 'base',
  },
}

export const Danger: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'danger',
    size: 'base',
  },
}

export const Warning: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'warning',
    size: 'base',
  },
}

export const Normal: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'normal',
    size: 'base',
  },
}

export const Xs: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'primary',
    size: 'xs',
  },
}

export const Sm: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'primary',
    size: 'sm',
  },
}

export const Base: Story = {
  args: {
    text: 'ネットワークの接続が完了しました。',
    theme: 'primary',
    size: 'base',
  },
}

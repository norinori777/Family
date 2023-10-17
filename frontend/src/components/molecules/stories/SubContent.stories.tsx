import type { Meta, StoryObj } from '@storybook/react'
import { SubContent } from '../SubContent'

const meta: Meta<typeof SubContent> = {
  title: 'molecules/SubContent',
  component: SubContent,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SubContent>

export const Primary: Story = {
  args: {
    theme: 'primary',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}

export const Success: Story = {
  args: {
    theme: 'success',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}

export const Danger: Story = {
  args: {
    theme: 'danger',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}
export const Warning: Story = {
  args: {
    theme: 'warning',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}
export const Normal: Story = {
  args: {
    theme: 'normal',
    title: 'タイトルです。',
    description: '説明内容です。記載しております。',
  },
}

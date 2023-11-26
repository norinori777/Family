import React from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'

import { LinkItem } from '../LinkItem'

const meta: Meta<typeof LinkItem> = {
  title: 'atoms/LinkItem',
  component: LinkItem,
}

export default meta
type Story = StoryObj<typeof LinkItem>

export const Primary: Story = {
  args: {
    text: 'リンクタイトル',
    theme: 'primary',
    size: 'base',
  },
}
export const Secondary: Story = {
  args: {
    text: 'リンクタイトル',
    underline: true,
    theme: 'secondary',
    size: 'base',
  },
}

export const Success: Story = {
  args: {
    text: 'リンクタイトル',
    theme: 'success',
    size: 'base',
  },
}
export const Warning: Story = {
  args: {
    text: 'リンクタイトル',
    underline: true,
    theme: 'warning',
    size: 'base',
  },
}

export const Danger: Story = {
  args: {
    text: 'リンクタイトル',
    theme: 'danger',
    size: 'base',
  },
}
export const Normal: Story = {
  args: {
    text: 'リンクタイトル',
    underline: true,
    theme: 'normal',
    size: 'base',
  },
}

export const Small: Story = {
  args: {
    text: 'リンクタイトル',
    theme: 'primary',
    size: 'sm',
  },
}
export const Large: Story = {
  args: {
    text: 'リンクタイトル',
    underline: true,
    theme: 'primary',
    size: 'lg',
  },
}

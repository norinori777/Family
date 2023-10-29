import React from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'

import { RouterLinkItem } from '../RouterLinkItem'

const meta: Meta<typeof RouterLinkItem> = {
  title: 'atoms/RouterLinkItem',
  component: RouterLinkItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof RouterLinkItem>

export const Primary: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    theme: 'primary',
    size: 'base',
  },
}
export const Secondary: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    underline: true,
    theme: 'secondary',
    size: 'base',
  },
}

export const Success: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    theme: 'success',
    size: 'base',
  },
}
export const Warning: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    underline: true,
    theme: 'warning',
    size: 'base',
  },
}

export const Danger: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    theme: 'danger',
    size: 'base',
  },
}
export const Normal: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    underline: true,
    theme: 'normal',
    size: 'base',
  },
}

export const Small: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    theme: 'primary',
    size: 'sm',
  },
}
export const Large: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    underline: true,
    theme: 'primary',
    size: 'lg',
  },
}

import React from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { SidebarMenuItem } from '../SidebarMenuItem'
import { Pencil } from '../../Icons/Pencil'

const meta: Meta<typeof SidebarMenuItem> = {
  title: 'molecules/SidebarMenuItem',
  component: SidebarMenuItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SidebarMenuItem>

export const Primary: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'secondary',
  },
}
export const Success: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'success',
  },
}
export const Warning: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'warning',
  },
}
export const Danger: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'danger',
  },
}
export const Normal: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'normal',
  },
}
export const White: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'white',
  },
}
export const Black: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
    theme: 'black',
  },
}

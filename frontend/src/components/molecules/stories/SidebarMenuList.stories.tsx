import React from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { SidebarMenuList } from '../SidebarMenuList'
import { Pencil } from '../../Icons/Pencil'

const meta: Meta<typeof SidebarMenuList> = {
  title: 'molecules/SidebarMenuList',
  component: SidebarMenuList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SidebarMenuList>

export const Normal: Story = {
  args: {
    items: [
      {
        icon: Pencil,
        text: 'テストリンク１',
        link: '/test1',
        theme: 'primary',
      },
      {
        icon: Pencil,
        text: 'テストリンク２',
        link: '/test2',
        theme: 'secondary',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
        theme: 'danger',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
        theme: 'warning',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
        theme: 'normal',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
        theme: 'white',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
        theme: 'black',
      },
    ],
  },
}

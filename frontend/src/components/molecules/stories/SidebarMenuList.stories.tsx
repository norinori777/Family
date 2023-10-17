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
      },
      {
        icon: Pencil,
        text: 'テストリンク２',
        link: '/test2',
      },
      {
        icon: Pencil,
        text: 'テストリンク３',
        link: '/test3',
      },
    ],
  },
}

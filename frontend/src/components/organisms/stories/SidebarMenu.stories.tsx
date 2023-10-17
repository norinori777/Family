import React from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { SideMenu } from '../SideMenu'
import { Pencil } from '../../Icons/Pencil'

const meta: Meta<typeof SideMenu> = {
  title: 'organisms/SideMenu',
  component: SideMenu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SideMenu>

export const Normal: Story = {
  args: {
    menuItems: [
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

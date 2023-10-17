import React from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';
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
};

export default meta;
type Story = StoryObj<typeof SidebarMenuItem>;

export const Normal: Story = {
  args: {
    icon: Pencil,
    text: 'テストリンク',
    link: '/test',
  },
}


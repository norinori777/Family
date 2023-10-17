import type { Meta, StoryObj } from '@storybook/react';

import { SidebarTitle } from '../SidebarTitle'

const meta: Meta<typeof SidebarTitle> = {
  title: 'atoms/SidebarTitle',
  component: SidebarTitle,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SidebarTitle>;

export const Normal: Story = {
  args: {
    title: 'テストタイトル',
  },
}


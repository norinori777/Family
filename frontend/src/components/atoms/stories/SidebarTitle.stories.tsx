import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '../Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'atoms/Sidebar',
  component: Sidebar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Normal: Story = {
  args: {},
}

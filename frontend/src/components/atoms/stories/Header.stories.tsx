import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../Header'

const meta: Meta<typeof Header> = {
  title: 'atoms/Header',
  component: Header,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Normal: Story = {
  args: {
  },
};
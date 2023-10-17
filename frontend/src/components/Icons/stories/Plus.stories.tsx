import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from '../Plus'

const meta: Meta<typeof Plus> = {
  title: 'Icons/Plus',
  component: Plus,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Plus>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
}
export const Success: Story = {
  args: {
    theme: 'success',
  },
}
export const Danger: Story = {
  args: {
    theme: 'danger',
  },
}
export const Warning: Story = {
  args: {
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    theme: 'normal',
  },
}

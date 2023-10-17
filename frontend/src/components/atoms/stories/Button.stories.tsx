import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button'

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'primary',
    theme: 'primary',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'secondary',
    theme: 'secondary',
    type: 'button',
  },
};

export const Success: Story = {
  args: {
    label: 'success',
    theme: 'success',
    type: 'button',
  },
};

export const Danger: Story = {
  args: {
    label: 'danger',
    theme: 'danger',
    type: 'button',
  },
};

export const Warning: Story = {
  args: {
    label: 'warning',
    theme: 'warning',
    type: 'button',
  },
};

export const Normal: Story = {
  args: {
    label: 'normal',
    theme: 'normal',
    type: 'button',
  },
};


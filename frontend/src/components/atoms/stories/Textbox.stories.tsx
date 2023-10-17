import type { Meta, StoryObj } from '@storybook/react';

import { Textbox } from '../Textbox'

const meta: Meta<typeof Textbox> = {
  title: 'atoms/Textbox',
  component: Textbox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Textbox>;

export const Primary: Story = {
  args: {
    label: 'primary',
    theme: 'primary',
    placeholder: 'button',
    description: 'description',
  },
}

export const Secondary: Story = {
  args: {
    label: 'secondary',
    theme: 'secondary',
    placeholder: 'button',
    description: 'description',
  },
}
export const Success: Story = {
  args: {
    label: 'success',
    theme: 'success',
    placeholder: 'button',
    description: 'description',
  },
}
export const Danger: Story = {
  args: {
    label: 'danger',
    theme: 'danger',
    placeholder: 'button',
    description: 'description',
  },
}
export const Warning: Story = {
  args: {
    label: 'warning',
    theme: 'warning',
    placeholder: 'button',
    description: 'description',
  },
}
export const Normal: Story = {
  args: {
    label: 'normal',
    theme: 'normal',
    placeholder: 'button',
    description: 'description',
  },
}

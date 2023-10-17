import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from '../../Icons/Plus'
import { ContainIconButton } from '../ContainIconButton'

const meta: Meta<typeof ContainIconButton> = {
  title: 'molecules/ContainIconButton',
  component: ContainIconButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContainIconButton>;

export const Primary: Story = {
  args: {
    label: 'primary',
    theme: 'primary',
    type: 'button',
    icon: Plus,
  },
}
export const Secondary: Story = {
  args: {
    label: 'secondary',
    theme: 'secondary',
    type: 'button',
    icon: Plus,
  },
}
export const Success: Story = {
  args: {
    label: 'success',
    theme: 'success',
    type: 'button',
    icon: Plus,
  },
}
export const Danger: Story = {
  args: {
    label: 'danger',
    theme: 'danger',
    type: 'button',
    icon: Plus,
  },
}
export const Warning: Story = {
  args: {
    label: 'warning',
    theme: 'warning',
    type: 'button',
    icon: Plus,
  },
}
export const Normal: Story = {
  args: {
    label: 'normal',
    theme: 'normal',
    type: 'button',
    icon: Plus,
  },
}

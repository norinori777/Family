import React from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from '../Paper'

const meta: Meta<typeof Paper> = {
  title: 'atoms/Paper',
  component: Paper,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Primary: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'secondary',
  },
}

export const Success: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'success',
  },
}
export const Danger: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'danger',
  },
}

export const Warning: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    children: <p className={'text-white'}>TEST</p>,
    theme: 'normal',
  },
}

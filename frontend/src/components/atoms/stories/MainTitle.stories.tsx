import React from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'

import { MainTitle } from '../MainTitle'

const meta: Meta<typeof MainTitle> = {
  title: 'atoms/MainTitle',
  component: MainTitle,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof MainTitle>

export const Primary: Story = {
  args: {
    title: 'タイトル',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    title: 'タイトル',
    theme: 'secondary',
  },
}

export const Success: Story = {
  args: {
    title: 'タイトル',
    theme: 'success',
  },
}

export const Danger: Story = {
  args: {
    title: 'タイトル',
    theme: 'danger',
  },
}
export const Warning: Story = {
  args: {
    title: 'タイトル',
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    title: 'タイトル',
    theme: 'normal',
  },
}

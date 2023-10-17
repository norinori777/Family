import type { Meta, StoryObj } from '@storybook/react'

import { HeaderTitle } from '../HeaderTitle'
import { Puzzle } from '../../../components/Icons/Puzzle'

const meta: Meta<typeof HeaderTitle> = {
  title: 'atoms/HeaderTitle',
  component: HeaderTitle,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof HeaderTitle>

export const Primary: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'secondary',
  },
}

export const Success: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'success',
  },
}

export const Danger: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'danger',
  },
}
export const Warning: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    icon: Puzzle,
    title: 'タイトル',
    theme: 'normal',
  },
}

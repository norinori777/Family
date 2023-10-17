import type { Meta, StoryObj } from '@storybook/react'

import { SelectBox } from '../SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'atoms/SelectBox',
  component: SelectBox,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SelectBox>

export const Primary: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'secondary',
  },
}
export const Success: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'success',
  },
}
export const Danger: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'danger',
  },
}
export const Warning: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'warning',
  },
}
export const Normal: Story = {
  args: {
    label: 'テストラベル',
    name: 'テストネーム',
    options: [
      { value: '1', label: 'テストオプション1' },
      { value: '2', label: 'テストオプション2' },
      { value: '3', label: 'テストオプション3' },
    ],
    error: 'テストエラー',
    theme: 'normal',
  },
}

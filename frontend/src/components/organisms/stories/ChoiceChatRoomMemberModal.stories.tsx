import type { Meta, StoryObj } from '@storybook/react'
import { ChoiceChatRoomMemeberModal } from '../ChoiceChatRoomMemeberModal'
import React from 'react'

const meta: Meta<typeof ChoiceChatRoomMemeberModal> = {
  title: 'organisms/ChoiceChatRoomMemeberModal',
  component: ChoiceChatRoomMemeberModal,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ChoiceChatRoomMemeberModal>

export const Primary: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'secondary',
  },
}

export const Success: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'success',
  },
}

export const Danger: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'danger',
  },
}

export const Warning: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'warning',
  },
}

export const Normal: Story = {
  args: {
    isDisplayed: true,
    items: [
      { label: 'test1', name: 'test1', value: 'test1', checked: false },
      { label: 'test2', name: 'test2', value: 'test2', checked: false },
      { label: 'test3', name: 'test3', value: 'test3', checked: false },
    ],
    theme: 'normal',
  },
}

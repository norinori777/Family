import type { Meta, StoryObj } from '@storybook/react'
import { TwoChoiceModal } from '../../organisms/TwoChoiceModal'
import React from 'react'

const meta: Meta<typeof TwoChoiceModal> = {
  title: 'organisms/TwoChoiceModal',
  component: TwoChoiceModal,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TwoChoiceModal>

export const Primary: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'primary',
    descriptionTheme: 'normal',
  },
}

export const Secondary: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'secondary',
    descriptionTheme: 'normal',
  },
}

export const Success: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'success',
    descriptionTheme: 'normal',
  },
}

export const Danger: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'danger',
    descriptionTheme: 'normal',
  },
}

export const Warning: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'warning',
    descriptionTheme: 'normal',
  },
}

export const Normal: Story = {
  args: {
    isDisplayed: true,
    title: 'ユーザー登録',
    description: 'ユーザー情報を入力して、登録ボタンをクリックしてください。',
    content: <p>TEST CONTENT</p>,
    leftButton: 'キャンセル',
    rightButton: '登録',
    leftButtonCallback: () => {},
    rightButtonCallback: () => {},
    theme: 'normal',
    descriptionTheme: 'normal',
  },
}

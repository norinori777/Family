import React from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'

import { LinkItem } from '../LinkItem'

const meta: Meta<typeof LinkItem> = {
  title: 'atoms/LinkItem',
  component: LinkItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LinkItem>

export const Normal: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
  },
}
export const UnderLine: Story = {
  args: {
    text: 'リンクタイトル',
    link: '/linkTitle',
    underline: true,
  },
}

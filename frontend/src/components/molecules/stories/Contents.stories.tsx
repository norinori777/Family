import React from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Contents } from '../Contents'
import { test } from '../../pages/test'

const meta: Meta<typeof Contents> = {
  title: 'molecules/Contents',
  component: Contents,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Contents>

export const Normal: Story = {
  args: {
    contents: [
      {
        link: '/test1',
        key: 'test1',
        component: test,
      },
      {
        key: 'test2',
        link: '/test2',
        component: test,
      },
      {
        link: '/test3',
        key: 'test3',
        component: test,
      },
    ],
  },
}

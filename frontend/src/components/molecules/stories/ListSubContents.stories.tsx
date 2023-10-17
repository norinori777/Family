import React from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react';
import { ListSubContents } from '../ListSubContents'

const meta: Meta<typeof ListSubContents> = {
  title: 'molecules/ListSubContents',
  component: ListSubContents,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListSubContents>;

export const Col: Story = {
  args: {
    direction: 'col',
    items: [
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'primary',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'secondary',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'success',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'warning',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'danger',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'normal',
      },
    ],
  },
}

export const Row: Story = {
  args: {
    direction: 'row',
    items: [
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'primary',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'secondary',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'success',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'warning',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'danger',
      },
      {
        title: 'タイトルです。',
        description: '内容を記載します。内容です。',
        theme: 'normal',
      },
    ],

  }
}

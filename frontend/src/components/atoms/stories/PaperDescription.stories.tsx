import type { Meta, StoryObj } from '@storybook/react'

import { PaperDescription } from '../PaperDescription'

const meta: Meta<typeof PaperDescription> = {
  title: 'atoms/PaperDescription',
  component: PaperDescription,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PaperDescription>

export const Default: Story = {
  args: {
    description: '説明文を記載しています。',
  },
}

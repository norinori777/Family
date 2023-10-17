import React from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '../Modal'

const meta: Meta<typeof Modal> = {
  title: 'atoms/Modal',
  component: Modal,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Modal>

export const Normal: Story = {
  args: {
    children: <p>hoge</p>,
  },
}

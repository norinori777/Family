import type { Meta, StoryObj } from '@storybook/react';

import { PaperHeader } from '../PaperHeader'

const meta: Meta<typeof PaperHeader> = {
  title: 'atoms/PaperHeader',
  component: PaperHeader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PaperHeader>;

export const Default: Story = {
  args: {
    title: 'タイトル',
  },
}

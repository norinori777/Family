import type { Meta, StoryObj } from '@storybook/react';

import { SpeechBubbleAside } from '../SpeechBubbleAside'

const meta: Meta<typeof SpeechBubbleAside> = {
  title: 'atoms/SpeechBubbleAside',
  component: SpeechBubbleAside,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SpeechBubbleAside>;
export const Normal: Story = {
  args: {
    name: '山田太郎',
    date: '2021/10/10 10:10:10',
  },
}

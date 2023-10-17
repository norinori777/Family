import type { Meta, StoryObj } from '@storybook/react';

import { SpeechBubble } from '../SpeechBubble'

const meta: Meta<typeof SpeechBubble> = {
  title: 'atoms/SpeechBubble',
  component: SpeechBubble,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SpeechBubble>;

export const Normal: Story = {
  args: {
    message: 'コメントを記載します。了解。',
  },
}

import type { Meta, StoryObj } from '@storybook/react';
import { Talk } from '../Talk'

const meta: Meta<typeof Talk> = {
  title: 'molecules/Talk',
  component: Talk,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Talk>;

export const Normal: Story = {
  args: {
    talkMessage: {
      userId: 1,
      roomId: 1,
      message: 'メッセージを空きました。やっぱり。。。',
      name: '山田太郎',
      createAt: '2021/10/10 10:10:10',
      updateAt: '2021/10/10 10:10:10',
    },
  },
}


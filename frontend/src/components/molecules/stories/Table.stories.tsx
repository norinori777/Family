import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../Table'

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Three: Story = {
  args: {
    
  titleHeader: ['No.', 'TEST1', 'TEST2'],
  items: [
    { 'No.': 1, TEST1: 'AAAA', TEST2: 'BBBBB' },
    { 'No.': 2, TEST1: 'AAAA', TEST2: 'BBBBB' },
    { 'No.': 3, TEST1: 'AAAA', TEST2: 'BBBBB' },
    { 'No.': 4, TEST1: 'AAAA', TEST2: 'BBBBB' },
    { 'No.': 5, TEST1: 'AAAA', TEST2: 'BBBBB' },
  ],
  }
}

export const Five: Story = {
  args: {
    titleHeader: ['No.', 'TEST1', 'TEST2', 'TEST3', 'TEST4'],
  items: [
    {
      'No.': 1,
      TEST1: 'AAAA',
      TEST2: 'BBBBB',
      TEST3: 'CCCCC',
      TEST4: 'DDDDDD',
    },
    {
      'No.': 2,
      TEST1: 'AAAA',
      TEST2: 'BBBBB',
      TEST3: 'CCCCC',
      TEST4: 'DDDDDD',
    },
    {
      'No.': 3,
      TEST1: 'AAAA',
      TEST2: 'BBBBB',
      TEST3: 'CCCCC',
      TEST4: 'DDDDDD',
    },
    {
      'No.': 4,
      TEST1: 'AAAA',
      TEST2: 'BBBBB',
      TEST3: 'CCCCC',
      TEST4: 'DDDDDD',
    },
    {
      'No.': 5,
      TEST1: 'AAAA',
      TEST2: 'BBBBB',
      TEST3: 'CCCCC',
      TEST4: 'DDDDDD',
    },
  ],

  }
}

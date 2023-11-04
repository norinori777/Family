import type { Meta, StoryObj } from '@storybook/react'
import { ListForOnAction } from '../ListForOnAction'
import { CheckBox } from '../../atoms/CheckBox'
import { ChangeEvent } from 'react'

const meta: Meta<
  typeof ListForOnAction<{ name: string; value: string }, ChangeEvent<HTMLInputElement>, number>
> = {
  title: 'molecules/ListForOnChange',
  component: ListForOnAction,
  argTypes: {},
}

export default meta
type Story = StoryObj<
  typeof ListForOnAction<
    { label: string; name: string; value: string },
    ChangeEvent<HTMLInputElement>,
    number
  >
>

export const RowThree: Story = {
  args: {
    direction: 'row',
    items: [
      { label: 'test1', name: 'test1', value: 'test1' },
      { label: 'test2', name: 'test2', value: 'test2' },
      { label: 'test3', name: 'test3', value: 'test3' },
    ],
    children: CheckBox,
    action: () => {},
  },
}

export const RowFive: Story = {
  args: {
    direction: 'row',
    items: [
      { label: 'test1', name: 'test1', value: 'test1' },
      { label: 'test2', name: 'test2', value: 'test2' },
      { label: 'test3', name: 'test3', value: 'test3' },
      { label: 'test4', name: 'test4', value: 'test4' },
      { label: 'test5', name: 'test5', value: 'test5' },
    ],
    children: CheckBox,
    action: () => {},
  },
}

export const ColumnThree: Story = {
  args: {
    direction: 'column',
    items: [
      { label: 'test1', name: 'test1', value: 'test1' },
      { label: 'test2', name: 'test2', value: 'test2' },
      { label: 'test3', name: 'test3', value: 'test3' },
    ],
    children: CheckBox,
    action: () => {},
  },
}

export const ColumnFive: Story = {
  args: {
    direction: 'column',
    items: [
      { label: 'test1', name: 'test1', value: 'test1' },
      { label: 'test2', name: 'test2', value: 'test2' },
      { label: 'test3', name: 'test3', value: 'test3' },
      { label: 'test4', name: 'test4', value: 'test4' },
      { label: 'test5', name: 'test5', value: 'test5' },
    ],
    children: CheckBox,
    action: () => {},
  },
}

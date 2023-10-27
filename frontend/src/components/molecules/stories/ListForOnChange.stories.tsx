import type { Meta, StoryObj } from '@storybook/react'
import { ListForOnChange } from '../ListForOnChange'
import { CheckBox } from '../../../components/atoms/CheckBox'

const meta: Meta<typeof ListForOnChange<{ name: string; value: string }>> = {
  title: 'molecules/ListForOnChange',
  component: ListForOnChange,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ListForOnChange<{ label: string; name: string; value: string }>>

export const RowThree: Story = {
  args: {
    direction: 'row',
    items: [
      { label: 'test1', name: 'test1', value: 'test1' },
      { label: 'test2', name: 'test2', value: 'test2' },
      { label: 'test3', name: 'test3', value: 'test3' },
    ],
    children: CheckBox,
    onChange: () => {},
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
    onChange: () => {},
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
    onChange: () => {},
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
    onChange: () => {},
  },
}

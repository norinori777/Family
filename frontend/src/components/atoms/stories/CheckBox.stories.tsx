import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../CheckBox'

const meta: Meta<typeof CheckBox> = {
  title: 'atoms/CheckBox',
  component: CheckBox,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Normal: Story = {
  args: {
    label: 'Label',
    name: 'name',
    checked: false,
    onChange: () => {},
  },
}

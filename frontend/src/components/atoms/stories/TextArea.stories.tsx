import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { TextArea } from '../TextArea'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextArea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'primary',
  theme: 'primary',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

Primary.play = async ({ canvasElement }) => {
  const textArea = within(canvasElement)
  await user.type(textArea.getByRole('textbox'), 'Hello, World!')
  await waitFor(() => expect(textArea.getByRole('textbox')).toHaveValue('Hello, World!'))
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'secondary',
  theme: 'secondary',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

export const Success = Template.bind({})
Success.args = {
  label: 'success',
  theme: 'success',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'danger',
  theme: 'danger',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'warning',
  theme: 'warning',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

export const Normal = Template.bind({})
Normal.args = {
  label: 'normal',
  theme: 'normal',
  placeholder: 'button',
  description: 'description',
  rowLength: 5,
}

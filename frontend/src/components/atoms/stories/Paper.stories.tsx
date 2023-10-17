import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Paper } from '../Paper'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Paper',
  component: Paper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Paper>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'primary',
}

export const Secondary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'secondary',
}

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'success',
}

export const Danger = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'danger',
}

export const Warning = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'warning',
}

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  children: <p className={'text-white'}>TEST</p>,
  theme: 'normal',
}

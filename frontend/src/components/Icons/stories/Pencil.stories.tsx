import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pencil } from '../Pencil'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'icons/Pencil',
  component: Pencil,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Pencil>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pencil> = (args) => <Pencil />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: 'primary',
}

export const secondary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
secondary.args = {
  theme: 'secondary',
}

export const success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
success.args = {
  theme: 'success',
}

export const danger = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
danger.args = {
  theme: 'danger',
}

export const warning = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
warning.args = {
  theme: 'warning',
}

export const normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  theme: 'normal',
}

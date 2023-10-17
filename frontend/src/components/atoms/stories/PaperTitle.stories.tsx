import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PaperHeader } from '../PaperHeader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/PaperHeader',
  component: PaperHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PaperHeader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaperHeader> = (args) => <PaperHeader {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { title: 'タイトル' }

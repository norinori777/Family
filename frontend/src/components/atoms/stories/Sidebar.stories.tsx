import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SidebarTitle } from '../SidebarTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/SidebarTitle',
  component: SidebarTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarTitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarTitle> = (args) => <SidebarTitle {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  title: 'テストタイトル',
}

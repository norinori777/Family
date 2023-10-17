import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidebarMenuItem } from '../SidebarMenuItem'
import { Pencil } from '../../Icons/Pencil'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/SidebarMenuItem',
  component: SidebarMenuItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarMenuItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarMenuItem> = (args) => <SidebarMenuItem {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  icon: Pencil,
  text: 'テストリンク',
  link: '/test',
}

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidebarMenuList } from '../SidebarMenuList'
import { Pencil } from '../../Icons/Pencil'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/SidebarMenuList',
  component: SidebarMenuList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarMenuList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarMenuList> = (args) => <SidebarMenuList {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  items: [
    {
      icon: Pencil,
      text: 'テストリンク１',
      link: '/test1',
    },
    {
      icon: Pencil,
      text: 'テストリンク２',
      link: '/test2',
    },
    {
      icon: Pencil,
      text: 'テストリンク３',
      link: '/test3',
    },
  ],
}

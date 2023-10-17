import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Contents } from '../Contents'
import { test } from '../../pages/test'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/Contents',
  component: Contents,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Contents>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Contents> = (args) => <Contents {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  contents: [
    {
      link: '/test1',
      key: 'test1',
      component: test,
    },
    {
      key: 'test2',
      link: '/test2',
      component: test,
    },
    {
      link: '/test3',
      key: 'test3',
      component: test,
    },
  ],
}

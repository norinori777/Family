import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from '../Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  children: <p>hoge</p>,
}

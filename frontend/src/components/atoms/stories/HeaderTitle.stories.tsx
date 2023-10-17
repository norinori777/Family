import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeaderTitle } from '../HeaderTitle'
import { Puzzle } from '../../../components/Icons/Puzzle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/HeaderTitle',
  component: HeaderTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderTitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderTitle> = (args) => <HeaderTitle {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = { icon: Puzzle, title: 'タイトル', theme: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { icon: Puzzle, title: 'タイトル', theme: 'secondary' }

export const Success = Template.bind({})
Success.args = { icon: Puzzle, title: 'タイトル', theme: 'success' }

export const Danger = Template.bind({})
Danger.args = { icon: Puzzle, title: 'タイトル', theme: 'danger' }

export const Warning = Template.bind({})
Warning.args = { icon: Puzzle, title: 'タイトル', theme: 'warning' }

export const Normal = Template.bind({})
Normal.args = { icon: Puzzle, title: 'タイトル', theme: 'normal' }

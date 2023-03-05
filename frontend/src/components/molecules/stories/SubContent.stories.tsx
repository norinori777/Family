import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubContent } from "../SubContent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/SubContent",
  component: SubContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubContent> = (args) => (
  <SubContent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "primary",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  theme: "secondary",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  theme: "success",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  theme: "warning",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  theme: "danger",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  theme: "normal",
  title: "タイトルです。",
  description: "説明内容です。記載しております。",
};

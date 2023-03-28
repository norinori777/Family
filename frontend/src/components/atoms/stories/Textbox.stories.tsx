import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textbox } from "../Textbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Textbox",
  component: Textbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Textbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textbox> = (args) => (
  <Textbox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "primary",
  theme: "primary",
  placeholder: "button",
  description: "description",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  theme: "secondary",
  placeholder: "button",
  description: "description",
};

export const Success = Template.bind({});
Success.args = {
  label: "success",
  theme: "success",
  placeholder: "button",
  description: "description",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "danger",
  theme: "danger",
  placeholder: "button",
  description: "description",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "warning",
  theme: "warning",
  placeholder: "button",
  description: "description",
};

export const Normal = Template.bind({});
Normal.args = {
  label: "normal",
  theme: "normal",
  placeholder: "button",
  description: "description",
};

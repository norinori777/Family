import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "primary",
  theme: "primary",
  type: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  theme: "secondary",
  type: "button",
};

export const Success = Template.bind({});
Success.args = {
  label: "success",
  theme: "success",
  type: "button",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "danger",
  theme: "danger",
  type: "button",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "warning",
  theme: "warning",
  type: "button",
};

export const Normal = Template.bind({});
Normal.args = {
  label: "normal",
  theme: "normal",
  type: "button",
};

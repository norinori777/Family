import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Plus } from "../../Icons/Plus";
import { ContainIconButton } from "../ContainIconButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ContainIconButton",
  component: ContainIconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ContainIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContainIconButton> = (args) => (
  <ContainIconButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "テスト追加",
  theme: "primary",
  type: "button",
  icon: Plus,
};

export const secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
secondary.args = {
  label: "テスト追加",
  theme: "secondary",
  type: "button",
  icon: Plus,
};

export const success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
success.args = {
  label: "テスト追加",
  theme: "success",
  type: "button",
  icon: Plus,
};

export const danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
danger.args = {
  label: "テスト追加",
  theme: "danger",
  type: "button",
  icon: Plus,
};

export const warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
warning.args = {
  label: "テスト追加",
  theme: "warning",
  type: "button",
  icon: Plus,
};

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  label: "テスト追加",
  theme: "normal",
  type: "button",
  icon: Plus,
};

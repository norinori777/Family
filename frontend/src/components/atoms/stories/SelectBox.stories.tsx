import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectBox } from "../SelectBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SelectBox",
  component: SelectBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "warning",
};

export const Normal = Template.bind({});
Normal.args = {
  label: "テストラベル",
  name: "テストネーム",
  options: [
    { value: "1", label: "テストオプション1" },
    { value: "2", label: "テストオプション2" },
    { value: "3", label: "テストオプション3" },
  ],
  error: "テストエラー",
  theme: "normal",
};
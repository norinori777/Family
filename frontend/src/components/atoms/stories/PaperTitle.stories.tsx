import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaperHeader } from "../PaperHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/PaperHeader",
  component: PaperHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PaperHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaperHeader> = (args) => (
  <PaperHeader {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = { title: "タイトル", theme: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { title: "タイトル", theme: "secondary" };

export const Success = Template.bind({});
Success.args = { title: "タイトル", theme: "success" };

export const Danger = Template.bind({});
Danger.args = { title: "タイトル", theme: "danger" };

export const Warning = Template.bind({});
Warning.args = { title: "タイトル", theme: "warning" };

export const Normal = Template.bind({});
Normal.args = { title: "タイトル", theme: "normal" };

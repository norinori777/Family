import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Plus } from "../Plus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "icons/Plus",
  component: Plus,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Plus>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Plus> = (args) => <Plus {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "primary",
};

export const secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
secondary.args = {
  theme: "secondary",
};

export const success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
success.args = {
  theme: "success",
};

export const danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
danger.args = {
  theme: "danger",
};

export const warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
warning.args = {
  theme: "warning",
};

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  theme: "normal",
};

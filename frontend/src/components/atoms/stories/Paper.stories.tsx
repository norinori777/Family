import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paper } from "../Paper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Paper",
  component: Paper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Paper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};

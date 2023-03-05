import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaperDescription } from "../PaperDescription";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/PaperDescription",
  component: PaperDescription,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PaperDescription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaperDescription> = (args) => (
  <PaperDescription {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { description: "説明文を記載しています。" };

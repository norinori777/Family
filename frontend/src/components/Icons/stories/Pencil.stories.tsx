import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pencil } from "../Pencil";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "icons/Pencil",
  component: Pencil,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Pencil>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pencil> = (args) => <Pencil />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};

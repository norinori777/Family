import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LinkItem } from "../LinkItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/LinkItem",
  component: LinkItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinkItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkItem> = (args) => (
  <LinkItem {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  text: "リンクタイトル",
  link: "/linkTitle",
};

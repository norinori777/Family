import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListSubContents } from "../ListSubContents";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ListSubContents",
  component: ListSubContents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ListSubContents>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListSubContents> = (args) => (
  <ListSubContents {...args} />
);

export const Col = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Col.args = {
  direction: "col",
  items: [
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "primary",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "secondary",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "success",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "warning",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "danger",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "normal",
    },
  ],
};

export const Row = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Row.args = {
  direction: "row",
  items: [
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "primary",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "secondary",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "success",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "warning",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "danger",
    },
    {
      title: "タイトルです。",
      description: "内容を記載します。内容です。",
      theme: "normal",
    },
  ],
};

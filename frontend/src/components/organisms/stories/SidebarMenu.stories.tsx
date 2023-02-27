import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideMenu } from "../SideMenu";
import { Pencil } from "../../Icons/Pencil";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/SideMenu",
  component: SideMenu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  menuItems: [
    {
      icon: Pencil,
      text: "テストリンク１",
      link: "/test1",
    },
    {
      icon: Pencil,
      text: "テストリンク２",
      link: "/test2",
    },
    {
      icon: Pencil,
      text: "テストリンク３",
      link: "/test3",
    },
  ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Talk } from "../Talk";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/Talk",
  component: Talk,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Talk>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Talk> = (args) => <Talk {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  talkMessage: {
    userId: 1,
    roomId: 1,
    message: "メッセージを空きました。やっぱり。。。",
    speaker: "山田太郎",
    date: "2021/10/10 10:10:10",
  }
};

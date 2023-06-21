import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpeechBubbleAside } from "../SpeechBubbleAside";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SpeechBubbleAside",
  component: SpeechBubbleAside,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SpeechBubbleAside>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpeechBubbleAside> = (args) => (
  <SpeechBubbleAside {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  name: "山田太郎",
  date: "2021/10/10 10:10:10",
};


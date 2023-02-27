import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpeechBubble } from "../SpeechBubble";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SpeechBubble",
  component: SpeechBubble,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SpeechBubble>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpeechBubble> = (args) => (
  <SpeechBubble {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  message: "コメントを記載します。了解。",
};

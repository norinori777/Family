import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "../Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Table",
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Three = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Three.args = {
  titleHeader: ["No.", "TEST1", "TEST2"],
  items: [
    { "No.": 1, TEST1: "AAAA", TEST2: "BBBBB" },
    { "No.": 2, TEST1: "AAAA", TEST2: "BBBBB" },
    { "No.": 3, TEST1: "AAAA", TEST2: "BBBBB" },
    { "No.": 4, TEST1: "AAAA", TEST2: "BBBBB" },
    { "No.": 5, TEST1: "AAAA", TEST2: "BBBBB" },
  ],
};

export const Five = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Five.args = {
  titleHeader: ["No.", "TEST1", "TEST2", "TEST3", "TEST4"],
  items: [
    {
      "No.": 1,
      TEST1: "AAAA",
      TEST2: "BBBBB",
      TEST3: "CCCCC",
      TEST4: "DDDDDD",
    },
    {
      "No.": 2,
      TEST1: "AAAA",
      TEST2: "BBBBB",
      TEST3: "CCCCC",
      TEST4: "DDDDDD",
    },
    {
      "No.": 3,
      TEST1: "AAAA",
      TEST2: "BBBBB",
      TEST3: "CCCCC",
      TEST4: "DDDDDD",
    },
    {
      "No.": 4,
      TEST1: "AAAA",
      TEST2: "BBBBB",
      TEST3: "CCCCC",
      TEST4: "DDDDDD",
    },
    {
      "No.": 5,
      TEST1: "AAAA",
      TEST2: "BBBBB",
      TEST3: "CCCCC",
      TEST4: "DDDDDD",
    },
  ],
};

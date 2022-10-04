import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percentage: 23,
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FimbIcons from "./FimbIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FimbIcons",
  component: FimbIcons,
} as ComponentMeta<typeof FimbIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FimbIcons> = (args) => (
  <FimbIcons {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { color: "purple", icon: "squares" };

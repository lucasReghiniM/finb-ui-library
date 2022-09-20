import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import FimbIcons from "../FimbIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tabs: [
    {
      text: "Red",
      svg: <FimbIcons color="mediumGray70" icon="squares" />,
      activeSvg: <FimbIcons color="purple" icon="squares" />,
    },
    {
      text: "Blue",
      svg: <FimbIcons color="mediumGray70" icon="squares" />,
      activeSvg: <FimbIcons color="purple" icon="squares" />,
    },
  ],
  content: [
    <div style={{ width: "100%", height: "30vh", backgroundColor: "red" }}>
      1
    </div>,
    <div style={{ width: "100%", height: "30vh", backgroundColor: "blue" }}>
      2
    </div>,
  ],
};

export const ClickMe = Template.bind({});
ClickMe.args = {};

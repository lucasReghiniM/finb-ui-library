import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import FimbIcons from "../FimbIcons";

export default {
  title: "ReactComponentLibrary/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabs: [
    {
      text: "Red",
      svg: <FimbIcons color="mediumGray70" icon="squares" />,
      activeSvg: <FimbIcons color="purple" icon="squares" />,
      hasSearch: true,
      hasFilter: true,
      onSearch: () => alert("Is Searching"),
    },
    {
      text: "Blue",
      svg: <FimbIcons color="mediumGray70" icon="squares" />,
      activeSvg: <FimbIcons color="purple" icon="squares" />,
      hasSearch: false,
      hasFilter: false,
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

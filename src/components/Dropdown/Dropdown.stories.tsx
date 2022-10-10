import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import FimbIcons from "../FimbIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  svg: <FimbIcons color="purple" icon="squares" />,
  activeSvg: <FimbIcons color="orange" icon="instagram" />,
  content: [
    <div style={{ width: "353px", height: "68px", backgroundColor: "red", marginBottom: '10px' }}>
      Seu perfil
    </div>,
    <div style={{ width: "353px", height: "68px", backgroundColor: "blue" }}>
      Configurações
    </div>,
  ],
  text: "Click me!",
};

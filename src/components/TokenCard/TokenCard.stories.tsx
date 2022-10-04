import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TokenCard from "./TokenCard";
import FimbIcons from "../FimbIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/TokenCard",
  component: TokenCard,
} as ComponentMeta<typeof TokenCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenCard> = (args) => (
  <TokenCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  token: {
    name: "Token Dexa Base 01",
    image:
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    initials: "DB01",
    value: 25000,
    unitPrice: 25,
    totalTokens: 10000,
    totalSoldTokens: 2375,
    buyers: 35,
    monthlyReturn: 1.3,
    link: () => alert("add link to token page here"),
    id: "d2390dh230dh203hd92",
    status: "closed",
    ownerName: "Dexa Base",
    ownerLogo:
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  onLike: (id) => alert(`This is token id ${id}`),
};

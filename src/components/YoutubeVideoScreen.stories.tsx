import React from "react";
import YoutubeVideoScreen from "./YoutubeVideoScreen";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/YoutubeVideoScreen",
  component: YoutubeVideoScreen,
} as ComponentMeta<typeof YoutubeVideoScreen>;

const Template: ComponentStory<typeof YoutubeVideoScreen> = (args) => (
  <YoutubeVideoScreen {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  videoCode: "r1LlOBPhC_c",
  autoPlay: true,
};

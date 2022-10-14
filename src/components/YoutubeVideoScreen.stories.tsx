import React from "react";
import YoutubeVideoScreen from "./YoutubeVideoScreen";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/YoutubeVideoScreen",
  component: YoutubeVideoScreen,
} as ComponentMeta<typeof YoutubeVideoScreen>;

const Template: ComponentStory<typeof YoutubeVideoScreen> = () => (
  <YoutubeVideoScreen />
);

export const Primary = Template.bind({});

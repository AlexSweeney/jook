import React from "react";
import VideoScreen from "./VideoScreen";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "VideoScreen",
  component: VideoScreen,
} as ComponentMeta<typeof VideoScreen>;

export const Primary: ComponentStory<typeof VideoScreen> = () => (
  <VideoScreen />
);

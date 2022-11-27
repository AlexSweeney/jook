import VideoControls from "./VideoControls";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/VideoControls",
  component: VideoControls,
} as ComponentMeta<typeof VideoControls>;

const Template: ComponentStory<typeof VideoControls> = (args) => (
  <VideoControls />
);

export const Primary = Template.bind({});

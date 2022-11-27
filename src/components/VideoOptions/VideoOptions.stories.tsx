import VideoOptions from "./VideoOptions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/VideoOptions",
  component: VideoOptions,
} as ComponentMeta<typeof VideoOptions>;

const Template: ComponentStory<typeof VideoOptions> = (args) => (
  <VideoOptions />
);

export const Primary = Template.bind({});

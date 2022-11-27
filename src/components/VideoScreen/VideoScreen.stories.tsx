import VideoScreen from "./VideoScreen";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/VideoScreen",
  component: VideoScreen,
} as ComponentMeta<typeof VideoScreen>;

const Template: ComponentStory<typeof VideoScreen> = (args) => (
  <VideoScreen {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  videoId: "r1LlOBPhC_c",
  autoPlay: true,
};

import Home from "./Home";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Primary = Template.bind({});

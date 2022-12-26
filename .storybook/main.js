module.exports = {
  stories: [
    "../src/components/VideoOptions/VideoOptions.stories.tsx",
    // "../src/components/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/*/*.stories.@(js|jsx|ts|tsx)",
    // "../src/pages/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

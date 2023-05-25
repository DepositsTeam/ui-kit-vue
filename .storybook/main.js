module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.base = "./"; //  './' also works, but i like "assets/.." urls better than "./assets/..." urls.
    return config;
  },
  docs: {
    autodocs: true,
  },
};

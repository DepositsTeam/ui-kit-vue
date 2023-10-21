import DConsoleCard2 from "./DConsoleCard2.vue";

export default {
  title: "Console Card 2",
  component: DConsoleCard2,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subTitle: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DConsoleCard2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-console-card2 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Money",
  subTitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
};

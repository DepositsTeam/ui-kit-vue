import DCard3 from "./DCard3.vue";

export default {
  title: "Card 3",
  component: DCard3,
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
    DCard3,
  },
  setup() {
    return { args };
  },
  template: `
      <d-card3 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Money",
  subTitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
};

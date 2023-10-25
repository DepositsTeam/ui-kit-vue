import DCard2 from "./DCard2.vue";

export default {
  title: "Card 2",
  component: DCard2,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    docLink: {
      control: { type: "text" },
    },
    demoLink: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: {
    DCard2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-card2 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "API Reference",
  description:
    "The Deposits API is built around a standard REST architecture, uses predictable, resource-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",
  docLink: "https://docs.deposits.dev/",
  demoLink: "https://launch.new/programs",
  icon: "https://docs.deposits.dev/assets/svgs/home/services_dark.svg",
  checked: false,
};

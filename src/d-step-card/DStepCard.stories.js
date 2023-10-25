import DStepCard from "./DStepCard.vue";

export default {
  title: "Step Card",
  component: DStepCard,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
    lists: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DStepCard,
  },
  setup() {
    return { args };
  },
  template: `
      <d-step-card v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "QuickBooks",
  description:
    "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
  image: "https://launch.new/assets/onboarding_illus.5386a148.svg",
  lists: [
    {
      text: "Complete account creation",
      active: false,
      done: true,
    },
    {
      text: "Complete basic KYB",
      active: false,
      done: true,
    },
    {
      text: "Select your program use case",
      active: true,
      done: false,
    },
    {
      text: "Configure your fintech program",
      active: false,
      done: false,
    },
    {
      text: "Launch your program",
      active: false,
      done: false,
    },
  ],
};

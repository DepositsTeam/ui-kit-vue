import DOverviewCard from "./DOverviewCard.vue";

export default {
  title: "Overview Card",
  component: DOverviewCard,
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
    DOverviewCard,
  },
  setup() {
    return { args };
  },
  template: `
      <d-overview-card v-bind="args"/>`,
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
      to: () => {
        alert("Complete account creation");
      },
    },
    {
      text: "Complete basic KYB",
      active: false,
      done: true,
      to: () => {
        alert("Complete basic KYB");
      },
    },
    {
      text: "Select your program use case",
      active: true,
      done: false,
      to: () => {
        alert("Select your program use case");
      },
    },
    {
      text: "Configure your fintech program",
      active: false,
      done: false,
      to: () => {
        location.href = "https://google.com";
      },
    },
    {
      text: "Launch your program",
      active: false,
      done: false,
      to: () => {
        alert("Launch your program");
      },
    },
  ],
};

import DApplicationIntegrationAction2 from "./DApplicationIntegrationAction2.vue";

export default {
  title: "Application Integration Action 2",
  component: DApplicationIntegrationAction2,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    logo: {
      control: { type: "text" },
    },
    hasLearnMore: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: {
    DApplicationIntegrationAction2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-application-integration-action2 v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "QuickBooks",
  description: "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
  logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
  hasLearnMore: true,
  isDisabled: true,
};

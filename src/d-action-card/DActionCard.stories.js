import DActionCard from "./DActionCard.vue";

export default {
  title: "Action Card",
  component: DActionCard,
  tags: ["autodocs"],
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
    DActionCard,
  },
  setup() {
    return { args };
  },
  template: `
      <d-action-card v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "QuickBooks",
  description:
    "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
  logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
};

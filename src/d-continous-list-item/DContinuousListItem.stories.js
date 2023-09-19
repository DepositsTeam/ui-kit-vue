import DContinuousListItem from "./DContinuousListItem.vue";
import {
  Send2OutlineIcon,
  ArrowUpIcon,
  ReceiveSquareOutlineIcon,
  GlobeIcon,
} from "@/main";

export default {
  title: "Continuous List Item",
  component: DContinuousListItem,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    lists: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DContinuousListItem,
  },
  setup() {
    return { args };
  },
  template: `
      <d-continuous-list-item v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Send & Request Money",
  lists: [
    {
      id: 1,
      title: "Send",
      description:
        "Send money to friends, pay to bank accounts or saved beneficiaries",
      icon: Send2OutlineIcon,
    },
    {
      id: 2,
      title: "Request",
      description:
        "Request to get paid, send an invoice or ask your payer to scan a QR",
      icon: ArrowUpIcon,
    },
    {
      id: 3,
      title: "Withdraw",
      description: "Withdraw funds to your linked bank accounts",
      icon: ReceiveSquareOutlineIcon,
    },
    {
      id: 4,
      title: "Send Internationally",
      description:
        "Send money to people in other countries in different currencies",
      icon: GlobeIcon,
    },
  ],
};

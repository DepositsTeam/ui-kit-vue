import DDebitCardBalance from "./DDebitCardBalance.vue";
import { CardBrands } from "../utils/debitCardUtils";

export default {
  title: "Debit Card Balance",
  component: DDebitCardBalance,
  argTypes: {
    logo: {
      control: { type: "text" },
    },
    cardNo: {
      control: { type: "text" },
    },
    exp: {
      control: { type: "text" },
    },
    cvv: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    brand: {
      control: { type: "select" },
      options: CardBrands,
    },
    width: {
      control: { type: "text" },
    },
    balance: {
      control: { type: "text" },
    },
    theme: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

const Template = (args) => ({
  components: { DDebitCardBalance },
  setup() {
    return { args };
  },
  template: `<d-debit-card-balance v-bind="args" />`,
});

export const Default = Template.bind({});

import DDebitCard from "./DDebitCard.vue";
import { CardBrands } from "../utils/debitCardUtils";

export default {
  component: DDebitCard,
  title: "Debit Card",
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
      control: { type: "select", options: CardBrands },
    },
  },
};

const Template = (args) => ({
  components: { DDebitCard },
  setup() {
    return { args };
  },
  template: `<d-debit-card v-bind="args" />`,
});

export const Default = Template.bind({});

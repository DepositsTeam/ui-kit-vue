import DDebitCard from "./DDebitCard.vue";
import { CardBrands } from "../utils/debitCardUtils";

export default {
  component: DDebitCard,
  title: "Debit Card",
  tags: ["autodocs"],
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

export const ExpYYYMMMM1 = Template.bind({});
ExpYYYMMMM1.args = {
  exp: "2032-12",
};
ExpYYYMMMM1.storyName = "Exp (YYYY-MM)";

export const ExpYYYMMMM2 = Template.bind({});
ExpYYYMMMM2.args = {
  exp: "12-2032",
};
ExpYYYMMMM2.storyName = "Exp (MM-YYYY)";

export const ExpYYYMMMM3 = Template.bind({});
ExpYYYMMMM3.args = {
  exp: "2032/12",
};
ExpYYYMMMM3.storyName = "Exp (YYYY/MM)";

export const ExpYYYMMMM4 = Template.bind({});
ExpYYYMMMM4.args = {
  exp: "12/2032",
};
ExpYYYMMMM4.storyName = "Exp (MM/YYYY)";

export const ExpMMYY1 = Template.bind({});
ExpMMYY1.args = {
  exp: "12-32",
};

ExpMMYY1.storyName = "Exp (MM-YY)";
export const ExpMMYY4 = Template.bind({});
ExpMMYY4.args = {
  exp: "12/32",
};
ExpMMYY4.storyName = "Exp (MM/YY)";

export const LastFourDigits = Template.bind({});
LastFourDigits.args = {
  lastFourCardNo: "1234",
  exp: "12/2032",
};

export const FirstAndLastFourDigits = Template.bind({});
FirstAndLastFourDigits.args = {
  firstFourCardNo: "5399",
  lastFourCardNo: "1234",
  exp: "12/2032",
};

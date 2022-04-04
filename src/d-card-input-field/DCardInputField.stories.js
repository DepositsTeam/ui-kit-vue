import DCreditCardInput from "./DCardInputField.vue";

export default {
  title: "Card Input Field",
  component: DCreditCardInput,
  argTypes: {
    label: {
      control: { type: "text" },
      table: {
        defaultValue: "Credit or Debit Card",
      },
    },
    cardNo: {
      control: { type: "text" },
    },
    cardCvv: {
      control: { type: "text" },
    },
    cardExp: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
      table: {
        defaultValue: "huge",
      },
    },
  },
};

const Template = (args) => ({
  components: { DCreditCardInput },
  setup() {
    return { args };
  },
  data: () => ({
    cardNo: "",
    cardCVC: "",
    cardExp: "",
  }),
  template: `<d-credit-card-input v-model:card-exp="cardExp" v-model:card-no="args.cardNo" v-model:card-cvv="cardCVC" v-bind="args" />`,
});

export const Default = Template.bind({});

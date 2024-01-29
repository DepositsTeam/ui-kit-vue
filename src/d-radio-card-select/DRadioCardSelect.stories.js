import DRadioCardSelect from "./DRadioCardSelect.vue";
import { DAutoLayout } from "../main";
import { inputArgTypes } from "@/utils/props/inputProps";
import { selectArgTypes } from "@/utils/props/selectProps";

export default {
  component: DRadioCardSelect,
  title: "Forms/Radio Card Select",
  argTypes: {
    ...inputArgTypes,
    ...selectArgTypes,
  },
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: { DRadioCardSelect },
  setup() {
    return { args };
  },
  data: () => ({
    selected: null,
  }),
  template: `
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  `,
});

export const Default = Template.bind({});

const InitialValueTemplate = (args) => ({
  components: { DRadioCardSelect },
  setup() {
    return { args };
  },
  data: () => ({
    selected: {
      title: "Citibank",
      description: "Checking **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady3.png",
    },
  }),
  template: `
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  `,
});
export const PredefinedValue = InitialValueTemplate.bind({});

const OneOptionTemplate = (args) => ({
  components: { DRadioCardSelect },
  setup() {
    return { args };
  },
  data: () => ({
    selected: null,
    options: [
      {
        title: "Visa",
        description: "Ending **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png",
      },
    ],
  }),
  template: `
  <d-radio-card-select v-model="selected" :options="options" v-bind="args" />
  `,
});

export const OneOption = OneOptionTemplate.bind({});

const MultipleCardsTemplate = (args) => ({
  components: { DRadioCardSelect, DAutoLayout },
  setup() {
    return { args };
  },
  data: () => ({
    selected: null,
    bankOptions: [
      {
        title: "Wells Fargo",
        description: "Checking **7698",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png",
      },
      {
        title: "Bank of America",
        description: "Checking **1243",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png",
      },
      {
        title: "Citibank",
        description: "Checking **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png",
      },
    ],
    cardOptions: [
      {
        title: "Visa",
        description: "Ending **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png",
      },
    ],
    bankValue: null,
    cardValue: null,
    radioValue: "",
  }),
  template: `
    <d-auto-layout direction="vertical">
  <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
  <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  `,
});

export const MultipleCards = MultipleCardsTemplate.bind({});

const MultipleCardsPreselectedTemplate = (args) => ({
  components: { DRadioCardSelect, DAutoLayout },
  setup() {
    return { args };
  },
  data: () => ({
    selected: null,
    bankOptions: [
      {
        title: "Wells Fargo",
        description: "Checking **7698",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png",
      },
      {
        title: "Bank of America",
        description: "Checking **1243",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png",
      },
      {
        title: "Citibank",
        description: "Checking **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png",
      },
    ],
    cardOptions: [
      {
        title: "Visa",
        description: "Ending **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png",
      },
    ],
    bankValue: null,
    cardValue: null,
    radioValue: "card",
  }),
  template: `
    <d-auto-layout direction="vertical">
    <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
    <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  `,
});

export const MultipleCardsPreselected = MultipleCardsPreselectedTemplate.bind(
  {}
);

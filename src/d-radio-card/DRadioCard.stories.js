import DRadioCard from "./DRadioCard.vue";
import {
  CardIcon,
  DFilePicker,
  DHeading,
  DText,
  DBox,
  DAutoLayout,
  BankIcon,
} from "../main";
import { inputArgTypes } from "@/utils/props/inputProps";

export default {
  title: "Forms/Radio Card",
  component: DRadioCard,
  tags: ["autodocs"],
  argTypes: {
    ...inputArgTypes,
    value: {
      control: { type: "text" },
    },
    ringed: {
      control: { type: "boolean" },
    },
    ringSize: {
      control: { type: "text" },
    },
    ringThickness: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DRadioCard, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
  label: "Select card option",
};

const NoIconTemplate = (args) => ({
  components: { DRadioCard },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-radio-card v-model="value" value="value" v-bind="args">
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `,
});

export const NoIcon = NoIconTemplate.bind({});
NoIcon.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
};

const ExpandModeTemplate = (args) => ({
  components: { DRadioCard, DFilePicker, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-radio-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `,
});

export const ExpandMode = ExpandModeTemplate.bind({});
ExpandMode.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
  expandable: true,
};

const ExpandModeWithoutIconTemplate = (args) => ({
  components: { DRadioCard, DFilePicker, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-radio-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `,
});

export const ExpandModeWithoutIcon = ExpandModeWithoutIconTemplate.bind({});
ExpandModeWithoutIcon.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
  expandable: true,
};

const CustomHeadingAndDescriptionTemplate = (args) => ({
  components: { DRadioCard, CardIcon, DHeading, DText, DAutoLayout, DBox },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  <template #heading>
    <d-auto-layout>
      <d-box is="img" alt="" src="https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"  />
      <d-heading my0 color="purple">Jane Doe</d-heading>
    </d-auto-layout>
  </template>
  <template #description>
    <d-text margin-top="8px" margin-bottom="0">Unidentifiable person</d-text>
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `,
});

export const CustomHeadingAndDescription =
  CustomHeadingAndDescriptionTemplate.bind({});
CustomHeadingAndDescription.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
};

const MultipleCardsTemplate = (args) => ({
  components: { DRadioCard, CardIcon, BankIcon },
  setup() {
    return { args };
  },
  data: () => ({
    value: "",
  }),
  template: `
    <d-radio-card heading="Card" description="Pay with a credit card"  v-model="value" value="card" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
    </d-radio-card>
    <d-radio-card heading="Bank account" description="Pay with your bank account"  v-model="value" value="bank" v-bind="args">
    <template #icon>
      <bank-icon />
    </template>
    </d-radio-card>
    <p>The selected value is {{value}}</p>
  `,
});

export const MultipleCards = MultipleCardsTemplate.bind({});

import DSwitchCard from "./DSwitchCard.vue";
import {
  CardIcon,
  BankIcon,
  DFilePicker,
  DHeading,
  DText,
  DAlert,
  DBox,
  DAutoLayout,
} from "../main";

export default {
  title: "Forms/Cards/Switch Card",
  component: DSwitchCard,
  argTypes: {},
};

const Template = (args) => ({
  components: { DSwitchCard, CardIcon },
  data: () => ({
    value: false,
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
  label: "Select card option",
};

const TrueOrFalseTemplate = (args) => ({
  components: { DSwitchCard, CardIcon },
  data: () => ({
    value: false,
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const TrueOrFalseCheckbox = TrueOrFalseTemplate.bind({});
TrueOrFalseCheckbox.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
};

export const CheckboxWithValue = Template.bind({});
CheckboxWithValue.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
};

const ChecboxArrayTemplate = (args) => ({
  components: { DSwitchCard, CardIcon, BankIcon, DAutoLayout },
  data: () => ({
    values: [],
  }),
  setup() {
    return { args };
  },
  template: `
    <d-auto-layout direction="vertical">
      <d-switch-card v-model="values" value="card" heading="Card" description="Add the option to pay with a credit card" v-bind="args">
        <template #icon>
          <card-icon />
        </template>    
      </d-switch-card>
      <d-switch-card v-model="values" value="bank" heading="Bank Account" description="Add the option to pay with a bank account" v-bind="args">
        <template #icon>
          <bank-icon />
        </template>
      </d-switch-card>
    </d-auto-layout>
    <p>Checkbox value is: {{values}}</p>
  `,
});

export const CheckboxArray = ChecboxArrayTemplate.bind({});

const NoIconTemplate = (args) => ({
  components: { DSwitchCard },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" value="value" v-bind="args">
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const NoIcon = NoIconTemplate.bind({});
NoIcon.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
};

const ExpandModeTemplate = (args) => ({
  components: { DSwitchCard, DFilePicker, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const ExpandMode = ExpandModeTemplate.bind({});
ExpandMode.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
  expandable: true,
};

const ExpandModeWithoutIconTemplate = (args) => ({
  components: { DSwitchCard, DFilePicker, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const ExpandModeWithoutIcon = ExpandModeWithoutIconTemplate.bind({});
ExpandModeWithoutIcon.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
  expandable: true,
};

const CustomHeadingAndDescriptionTemplate = (args) => ({
  components: { DSwitchCard, CardIcon, DHeading, DText, DAutoLayout, DBox },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-switch-card v-model="value" value="value" v-bind="args">
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
  </d-switch-card>
  <p>Checkbox value is: {{value}}</p>
  `,
});

export const CustomHeadingAndDescription =
  CustomHeadingAndDescriptionTemplate.bind({});
CustomHeadingAndDescription.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
};

const FooterSlotTemplate = (args) => ({
  components: { DSwitchCard, CardIcon, DAlert },
  data: () => ({
    value: false,
  }),
  setup() {
    return { args };
  },
  template: `
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #footer>
        <d-alert margin-top="16px" color-scheme="info" description="I am an alert" />
      </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `,
});

export const FooterSlot = FooterSlotTemplate.bind({});
FooterSlot.args = {
  heading: "One time payment",
  description: "Use this option to collect a one off payment",
};

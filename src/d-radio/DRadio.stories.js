import DRadio from "./DRadio.vue";
import { DAutoLayout, DarkModeProvider } from "../main";

export default {
  title: "Forms/Radio",
  component: DRadio,
  tags: ["autodocs"],
  argTypes: {
    ringed: {
      control: { type: "boolean" },
    },
    alignToTop: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    alignRight: {
      control: { type: "boolean" },
    },
    ringSize: {
      control: { type: "text" },
      default: "16px",
    },
    ringThickness: {
      control: { type: "text" },
      default: "5px",
    },
  },
};

const Template = (args) => ({
  components: {
    DRadio,
  },
  setup: function () {
    return { args };
  },
  template: `<d-radio v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DRadio, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-radio v-bind="args" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});
Default.args = {
  label: "Checking",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "Checking",
};

export const Ringed = Template.bind({});
Ringed.args = {
  label: "Checking",
  ringed: true,
};

export const DarkRinged = DarkModeTemplateFactory();
DarkRinged.args = {
  label: "Checking",
  ringed: true,
};

const MultipleRadiosTemplate = (args) => ({
  components: { DRadio, DAutoLayout },
  data: () => ({
    checkValue: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-auto-layout align-items="center">
    <d-radio label="Yes" value="yes" v-model="checkValue" />
    <d-radio label="No" v-model="checkValue" value="no"  />
    </d-auto-layout>
    `,
});

export const Multiple = MultipleRadiosTemplate.bind({});

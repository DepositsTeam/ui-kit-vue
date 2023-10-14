import DPinInput from "./DPinInput.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Pin Input",
  component: DPinInput,
  argTypes: {
    spacing: {
      control: { type: "text" },
    },
    password: {
      control: { type: "boolean" },
    },
    noOfCharacters: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => ({
  components: { DPinInput },
  data: () => ({
    pin: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-pin-input v-model="pin" v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DPinInput, DarkModeProvider },
  data: () => ({
    pin: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-pin-input v-model="pin" v-bind="args" />
    </dark-mode-provider>
  `,
});

const DarkModeTemplateFactory = (CustomTemplate = undefined) => {
  const Bound = CustomTemplate
    ? CustomTemplate.bind({})
    : DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

const Default = (args) => ({
  components: { DPinInput },
  data: () => ({
    pin: "123456",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-pin-input v-model="pin" v-bind="args" />`,
});

const DarkDefaultTemplate = (args) => ({
  components: { DPinInput, DarkModeProvider },
  data: () => ({
    pin: "123456",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-pin-input v-model="pin" v-bind="args" />
    </dark-mode-provider>
  `,
});

export const DefaultVal = Default.bind({});

export const DarkDefaultVal = DarkModeTemplateFactory(DarkDefaultTemplate);

export const Password = Template.bind({});
Password.args = {
  password: true,
};

export const DarkPassword = DarkModeTemplateFactory();
DarkPassword.args = {
  password: true,
};

export const Text = Template.bind({});
Text.args = {
  password: false,
};

export const DarkText = DarkModeTemplateFactory();
DarkText.args = {
  password: false,
};

export const OnlyNumbers = Template.bind({});
OnlyNumbers.args = {
  onlyNumbers: true,
};

export const DarkOnlyNumbers = DarkModeTemplateFactory();
DarkOnlyNumbers.args = {
  onlyNumbers: true,
};

export const HasError = Template.bind({});
HasError.args = {
  errorMessage: "I'll always show an error",
};

export const DarkHasError = DarkModeTemplateFactory();
DarkHasError.args = {
  errorMessage: "I'll always show an error",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

const TemplateSize = args => ({
  components: {DPinInput},
  setup() {
    return {args}
  },
  template: `
  
  `
})
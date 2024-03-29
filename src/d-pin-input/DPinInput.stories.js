import DPinInput from "./DPinInput.vue";
import { DarkModeProvider, ThemeProvider } from "../main";
import { inputArgTypes } from "@/utils/props/inputProps";

export default {
  title: "Forms/Pin Input",
  component: DPinInput,
  tags: ["autodocs"],
  argTypes: {
    ...inputArgTypes,
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

const TwoWayBindingTemplate = (args) => ({
  components: { DPinInput },
  data: () => ({
    pin: "",
  }),
  setup() {
    return { args };
  },
  mounted: function () {
    setTimeout(() => {
      this.pin = "234";
    }, 2000);
  },
  watch: {
    pin: function () {
      console.log("New Pin", this.pin);
    },
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

export const Label = Default.bind({});
Label.args = {
  label: "Pin Input",
};

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

const DefaultSizeTemplate = (args) => ({
  components: { DPinInput, ThemeProvider },
  setup() {
    return { args };
  },
  template: `
    <theme-provider :initial-theme="{defaultInputSize: 'small'}">
      <d-pin-input v-bind="args" />
    </theme-provider>
  `,
});

export const CustomDefaultSize = DefaultSizeTemplate.bind({});

const CompletedEventTemplate = (args) => ({
  components: {
    DPinInput,
  },
  setup() {
    return { args };
  },
  data: () => ({
    pin: "",
  }),
  methods: {
    completed() {
      alert("Finished entering pin, submitting: " + this.pin);
    },
  },
  watch: {
    pin: function () {
      console.log("New pin", this.pin);
    },
  },
  template: `
    <d-pin-input @completed="completed" v-model="pin" v-bind="args" />
  `,
});

export const TwoWayBinding = TwoWayBindingTemplate.bind({});

export const CompletedEvent = CompletedEventTemplate.bind({});

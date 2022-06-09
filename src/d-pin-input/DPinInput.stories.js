import DPinInput from "./DPinInput.vue";

export default {
  title: "Pin Input",
  component: DPinInput,
};

const Template = (args) => ({
  components: { DPinInput },
  data: () => ({
    pin: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-pin-input v-model="pin" v-bind="args" />`,
});

export const Password = Template.bind({});
Password.args = {
  password: true,
};

export const Text = Template.bind({});
Text.args = {
  password: false,
};

export const OnlyNumbers = Template.bind({});
OnlyNumbers.args = {
  onlyNumbers: true,
};

const Default = (args) => ({
  components: { DPinInput },
  data: () => ({
    pin: "123456",
  }),
  setup() {
    return { args };
  },
  template: `<d-pin-input v-model="pin" v-bind="args" />`,
});
export const DefaultVal = Default.bind({});

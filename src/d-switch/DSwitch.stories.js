import DSwitch from "./DSwitch.vue";

export default {
  title: "Switch",
  component: DSwitch,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DSwitch },
  setup() {
    return { args };
  },
  template: `<d-switch v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: "I agree to the terms and conditions",
};

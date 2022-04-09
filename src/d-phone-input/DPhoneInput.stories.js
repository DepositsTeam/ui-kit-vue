import DPhoneInput from "./DPhoneInput.vue";

export default {
  title: "Phone Field",
  component: DPhoneInput,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    code: {
      control: { type: "text" },
    },
    phoneNumber: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DPhoneInput },
  data: () => ({
    code: "",
    number: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-phone-input v-bind="args" v-model:code.lazy="code" v-model:phone-number="number"  />`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
};
Default.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  errorMessage: "Error Message",
};

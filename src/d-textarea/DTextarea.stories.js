import DTextarea from "./DTextarea.vue";

export default {
  title: "Textarea",
  component: DTextarea,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    textAreaClassName: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DTextarea,
  },
  setup: function () {
    return { args };
  },
  template: `<d-textarea v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};

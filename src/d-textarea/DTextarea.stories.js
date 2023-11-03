import DTextarea from "./DTextarea.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Text Area",
  component: DTextarea,
  tags: ["autodocs"],
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
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    rows: {
      control: { type: "text" },
    },
    minHeight: {
      control: { type: "text" },
    },
    maxHeight: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DTextarea,
  },
  data: () => ({
    text: "dd",
  }),
  setup: function () {
    return { args };
  },
  template: `<d-textarea v-bind="args" v-model="text" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DTextarea, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-textarea v-bind="args" v-model="value" />
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
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const DisabledDark = DarkModeTemplateFactory();
DisabledDark.args = {
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

export const ErrorDark = DarkModeTemplateFactory();
ErrorDark.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Form label",
  placeholder: "Input placeholder",
  width: "100%",
};

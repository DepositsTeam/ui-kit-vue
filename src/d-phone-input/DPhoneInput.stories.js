import DPhoneInput from "./DPhoneInput.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Phone Field",
  component: DPhoneInput,
  tags: ["autodocs"],
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

const InitialNumberWithoutHyphenTemplate = (args) => ({
  components: { DPhoneInput },
  data: () => ({
    code: "",
    number: "+13332392383",
  }),
  setup() {
    return { args };
  },
  template: `<d-phone-input v-bind="args" v-model:code.lazy="code" v-model:phone-number="number"  />`,
});

export const InitialNumberWithoutHyphen =
  InitialNumberWithoutHyphenTemplate.bind({});
InitialNumberWithoutHyphen.args = {
  isUs: true,
};

const DarkModeTemplate = (args) => ({
  components: { DPhoneInput, DarkModeProvider },
  data: () => ({
    code: "",
    number: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-phone-input v-bind="args" v-model:code.lazy="code" v-model:phone-number="number"  />
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
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const OnlyUS = Template.bind({});
OnlyUS.args = {
  placeholder: "US Number",
  label: "Form Label",
  isUs: true,
};

export const DarkOnlyUS = DarkModeTemplateFactory();
DarkOnlyUS.args = {
  placeholder: "US Number",
  label: "Form Label",
  isUs: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  disabled: true,
};

export const DarkDisabled = DarkModeTemplateFactory();
DarkDisabled.args = {
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

export const DarkError = DarkModeTemplateFactory();
DarkError.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  errorMessage: "Error Message",
};

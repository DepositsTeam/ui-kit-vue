import DDatePicker from "./DDatePicker.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Date Picker",
  component: DDatePicker,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    dropDown: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    errorMessage: {
      control: { type: "text" },
    },
    rightIcon: {
      control: { type: "object" },
    },
    leftIcon: {
      control: { type: "object" },
    },
    onlyNumbers: {
      control: { type: "boolean" },
    },
    wrapperClass: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    format: {
      control: { type: "string" },
    },
    formatDate: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DDatePicker },
  setup() {
    return { args };
  },
  template: `<d-date-picker v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DDatePicker, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-date-picker v-bind="args" />
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

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const DarkSizeMassive = DarkModeTemplateFactory();
DarkSizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const DarkSizeHuge = DarkModeTemplateFactory();
DarkSizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const DarkSizeXLarge = DarkModeTemplateFactory();
DarkSizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const DarkSizeLarge = DarkModeTemplateFactory();
DarkSizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const DarkSizeMedium = DarkModeTemplateFactory();
DarkSizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  size: "small",
};

export const DarkSizeSmall = DarkModeTemplateFactory();
DarkSizeSmall.args = {
  label: "Form Label",
  size: "small",
};

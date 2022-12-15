import DTextfield from "./DTextfield.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import Search from "../icons/SearchIcon.vue";

export default {
  title: "Forms/Text Field",
  component: DTextfield,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
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
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    currency: {
      control: { type: "boolean" },
    },
    percentage: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DTextfield },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-textfield v-bind="args" v-model="value" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DTextfield, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-textfield v-bind="args" v-model="value" />
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

export const OnlyNumbers = Template.bind({});
OnlyNumbers.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  onlyNumbers: true,
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const Color = Template.bind({});
Color.args = {
  placeholder: "Input Placeholder",
  label: "Form Label",
  type: "color",
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

export const CurrencyMode = Template.bind({});
CurrencyMode.args = {
  placeholder: "$0.00",
  label: "Currency Mode",
  currency: true,
};

export const DarkCurrencyMode = DarkModeTemplateFactory();
DarkCurrencyMode.args = {
  placeholder: "$0.00",
  label: "Currency Mode",
  currency: true,
};

export const SSNMode = Template.bind({});
SSNMode.args = {
  label: "SSN Mode",
  ssn: true,
};

export const DarkSSNMode = Template.bind({});
DarkSSNMode.args = {
  label: "SSN Mode",
  ssn: true,
};

export const PasswordMode = Template.bind({});
PasswordMode.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  isPassword: true,
};

export const DarkPasswordMode = DarkModeTemplateFactory();
DarkPasswordMode.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  isPassword: true,
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

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  leftIcon: Search,
};

export const DarkLeftIcon = DarkModeTemplateFactory();
DarkLeftIcon.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
};

export const DarkDropDown = DarkModeTemplateFactory();
DarkDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const DarkLeftIconAndDropDown = DarkModeTemplateFactory();
DarkLeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const DarkSizeMassive = DarkModeTemplateFactory();
DarkSizeMassive.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const DarkSizeHuge = DarkModeTemplateFactory();
DarkSizeHuge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const DarkSizeXLarge = DarkModeTemplateFactory();
DarkSizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const DarkSizeLarge = DarkModeTemplateFactory();
DarkSizeLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const DarkSizeMedium = DarkModeTemplateFactory();
DarkSizeMedium.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const DarkSizeSmall = DarkModeTemplateFactory();
DarkSizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

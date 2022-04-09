import DTextfield from "./DTextfield.vue";
import Search from "../icons/SearchIcon.vue";

export default {
  title: "Text Field",
  component: DTextfield,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    placeholder: {
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
  },
};

const Template = (args) => ({
  components: { DTextfield },
  setup() {
    return { args };
  },
  template: `<d-textfield v-bind="args" />`,
});

export const Default = Template.bind({});
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

export const LeftIcon = Template.bind({});
LeftIcon.args = {
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

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
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

export const SizeHuge = Template.bind({});
SizeHuge.args = {
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

export const SizeLarge = Template.bind({});
SizeLarge.args = {
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

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

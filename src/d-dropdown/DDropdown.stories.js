import DDropdown from "./DDropdown.vue";

export default {
  title: "Forms/Dropdown",
  component: DDropdown,
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
  },
};

const Template = (args) => ({
  components: { DDropdown },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-dropdown v-model="value" v-bind="args" />`,
});

const PredefinedTemplate = (args) => ({
  components: { DDropdown },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: `<d-dropdown v-model="value" v-bind="args" />`,
});

const options = [
  {
    text: "Banking kit",
    value: "banking",
  },
  {
    text: "Money kit",
    value: "money",
  },
  {
    text: "Identity kit",
    value: "identity",
  },
  {
    text: "UI kit",
    value: "ui",
  },
  {
    text: "Commerce kit",
    value: "commerce",
  },
];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const Predefined = PredefinedTemplate.bind({});
Predefined.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

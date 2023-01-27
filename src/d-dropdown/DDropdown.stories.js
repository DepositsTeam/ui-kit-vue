import DDropdown from "./DDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

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
    options: {
      control: { type: "object" },
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

const DarkModePredefinedTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplateFactory = (Template = null) => {
  const Bound = Template ? Template.bind({}) : DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

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

export const TextOptions = Template.bind({});
TextOptions.args = {
  options: [
    "Banking kit",
    "Money kit",
    "Identity kit",
    "UI kit",
    "Commerce kit",
  ],
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const LabelDark = DarkModeTemplateFactory();
LabelDark.args = {
  options: [...options],
  label: "Dropdown",
};

export const Predefined = PredefinedTemplate.bind({});
Predefined.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

export const PredefinedDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedDark.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

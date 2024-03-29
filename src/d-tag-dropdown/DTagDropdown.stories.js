import DTagDropdown from "./DTagDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import { inputArgTypes } from "../utils/props/inputProps";
import { ExternalLinkIcon } from "../main";
import { selectArgTypes } from "@/utils/props/selectProps";

export default {
  title: "Forms/Tag Dropdown",
  component: DTagDropdown,
  tags: ["autodocs"],
  argTypes: {
    ...inputArgTypes,
    showCheckboxes: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DTagDropdown },
  data: () => ({
    value: [],
  }),
  setup() {
    return { args };
  },
  template: `<d-tag-dropdown v-model="value" v-bind="args" />`,
});

const PredefinedTemplate = (args) => ({
  components: { DTagDropdown },
  data: () => ({
    value: ["banking", "money"],
  }),
  setup() {
    return { args };
  },
  template: `
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `,
});

const DarkModePredefinedTemplate = (args) => ({
  components: { DTagDropdown, DarkModeProvider },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplate = (args) => ({
  components: { DTagDropdown, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
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
  {
    text: "Benefits",
    value: "benefits",
  },
  {
    text: "API Docs",
    value: "api_docs",
  },
  {
    text: "Console",
    value: "console",
  },
  {
    text: "Statements",
    value: "statements",
  },
  {
    text: "Payouts",
    value: "payouts",
  },
];

const stringOptions = ["Commerce", "Identity", "UI", "Money", "Banking"];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
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

export const HasError = Template.bind({});
HasError.args = {
  options: [...options],
  label: "Error",
  errorMessage: "Error message",
};

export const LabelDark = DarkModeTemplateFactory();
LabelDark.args = {
  options: [...options],
  label: "Dropdown",
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const StringOptionsDark = DarkModeTemplateFactory();
StringOptionsDark.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const PredefinedOptions = PredefinedTemplate.bind({});
PredefinedOptions.args = {
  options: [...options],
  label: "Predefined Options",
};

export const PredefinedOptionsWithFullObject = PredefinedTemplate.bind({});
PredefinedOptionsWithFullObject.args = {
  options: [...options],
  label: "Predefined Options",
  returnFullObject: true,
};

export const PredefinedOptionsDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedOptionsDark.args = {
  options: [...options],
  label: "Predefined Options",
};

export const LeftIcon = PredefinedTemplate.bind({});
LeftIcon.args = {
  options: [...options],
  label: "Predefined Options",
  leftIcon: ExternalLinkIcon,
};

export const Loading = Template.bind({});
Loading.args = {
  options: [...options],
  label: "Loading",
  loading: true,
};

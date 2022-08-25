import DTagDropdown from "./DTagDropdown.vue";

export default {
  title: "Forms/Tag Dropdown",
  component: DTagDropdown,
  argTypes: {},
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
  template: `<d-tag-dropdown v-model="value" v-bind="args" />`,
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

const stringOptions = ["Commerce", "Identity", "UI", "Money", "Banking"];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const PredefinedOptions = PredefinedTemplate.bind({});
PredefinedOptions.args = {
  options: [...options],
  label: "Predefined Options",
};

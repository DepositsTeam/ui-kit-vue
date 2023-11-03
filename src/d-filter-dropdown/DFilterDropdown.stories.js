import DFilterDropdown from "./DFilterDropdown.vue";

export default {
  title: "Forms/Filter Dropdown",
  component: DFilterDropdown,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DFilterDropdown,
  },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-filter-dropdown v-model="value" v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      text: "All Time",
      value: "all_time",
    },
    {
      text: "Today",
      value: "today",
    },
    {
      text: "This month",
      value: "this_month",
    },
  ],
};

const ShowValueTemplate = (args) => ({
  components: { DFilterDropdown },
  setup() {
    return { args };
  },
  data: () => ({
    value: "",
  }),
  template: `
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `,
});

export const ReturnFullObject = ShowValueTemplate.bind({});
ReturnFullObject.args = {
  options: [
    {
      text: "All Time",
      value: "all_time",
    },
    {
      text: "Today",
      value: "today",
    },
    {
      text: "This month",
      value: "this_month",
    },
  ],
  returnFullObject: true,
};

export const ReturnOnlyValue = ShowValueTemplate.bind({});
ReturnOnlyValue.args = {
  options: [
    {
      text: "All Time",
      value: "all_time",
    },
    {
      text: "Today",
      value: "today",
    },
    {
      text: "This month",
      value: "this_month",
    },
  ],
  returnFullObject: false,
};

const PredefinedValueTemplateWithOnlyValue = (args) => ({
  components: { DFilterDropdown },
  setup() {
    return { args };
  },
  data: () => ({ value: "today" }),
  template: `
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `,
});

export const PredefinedValueWithOnlyValue =
  PredefinedValueTemplateWithOnlyValue.bind({});
PredefinedValueWithOnlyValue.args = {
  options: [
    {
      text: "All Time",
      value: "all_time",
    },
    {
      text: "Today",
      value: "today",
    },
    {
      text: "This month",
      value: "this_month",
    },
  ],
  returnFullObject: true,
};

const PredefinedValueTemplateWithFullObject = (args) => ({
  components: { DFilterDropdown },
  setup() {
    return { args };
  },
  data: () => ({
    value: {
      text: "Today",
      value: "today",
    },
  }),
  template: `
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `,
});

export const PredefinedValueWithOnlyFullObject =
  PredefinedValueTemplateWithFullObject.bind({});
PredefinedValueWithOnlyFullObject.args = {
  options: [
    {
      text: "All Time",
      value: "all_time",
    },
    {
      text: "Today",
      value: "today",
    },
    {
      text: "This month",
      value: "this_month",
    },
  ],
  returnFullObject: true,
};

export const CustomOptionTitleAndValue = ShowValueTemplate.bind({});
CustomOptionTitleAndValue.args = {
  options: [
    {
      display: "All Time",
      sigma: "all_time",
    },
    {
      display: "Today",
      sigma: "today",
    },
    {
      display: "This month",
      sigma: "this_month",
    },
  ],
  optionTitle: "display",
  optionValue: "sigma",
  returnFullObject: true,
};

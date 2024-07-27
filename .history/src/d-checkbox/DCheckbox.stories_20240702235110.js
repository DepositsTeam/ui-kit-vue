import DCheckbox from "./DCheckbox.vue";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Checkbox",
  component: DCheckbox,
  tags: ["autodocs"],
  argTypes: {
    wrapperClass: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    alignToTop: {
      control: { type: "boolean" },
    },
    dashed: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    labelClass: {
      control: { type: "text" },
    },
    top: {
      control: { type: "boolean" },
    },
    alignRight: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DCheckbox },
  data: () => ({
    value: false,
  }),
  setup: function () {
    return { args };
  },
  template: `<d-checkbox v-bind="args" v-model="value" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DCheckbox, DarkModeProvider },
  data: () => ({
    value: false,
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-checkbox v-bind="args" v-model="value" />
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
  label: "I agree to the terms and conditions",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "I agree to the terms and conditions",
};

export const Dashed = Template.bind({});
Dashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const DarkDashed = DarkModeTemplateFactory();
DarkDashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled checkbox",
  disabled: true,
};

export const DarkDisabled = DarkModeTemplateFactory();
DarkDisabled.args = {
  label: "I agree to the terms and conditions",
  disabled: true,
};

const ArrayTemplate = (args) => ({
  components: { DCheckbox, DAutoLayout },
  setup() {
    return { args };
  },
  data: () => ({
    items: [],
  }),
  template: `
    <d-auto-layout direction="column">
    <p>Selected items are: {{items}}</p>
      <d-checkbox v-model="items" value="Eggs"></d-checkbox>
      <d-checkbox v-model="items" value="Beans"></d-checkbox>
      <d-checkbox v-model="items" value="Potatoes"></d-checkbox>
      <d-checkbox v-model="items" value="Eggs"></d-checkbox>

    </d-auto-layout>
  `,
});

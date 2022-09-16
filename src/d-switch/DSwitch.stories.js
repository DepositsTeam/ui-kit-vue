import DSwitch from "./DSwitch.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Switch",
  component: DSwitch,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    thumbColor: {
      control: { type: "color" },
    },
    switchColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: { DSwitch },
  setup() {
    return { args };
  },
  template: `<d-switch v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DSwitch, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-switch v-bind="args" />
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

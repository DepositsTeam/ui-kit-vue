import DCounter from "./DCounter.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Counter",
  component: DCounter,
  argTypes: {},
};

const Template = (args) => ({
  components: { DCounter },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-counter v-model="value" v-bind="args"></d-counter>`,
});

const DarkModeTemplate = (args) => ({
  components: { DCounter, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `,
});

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  label: "Counter Input",
};

export const HasError = Template.bind({});
HasError.args = {
  errorMessage: "Error message",
};

export const DarkDefault = DarkModeTemplate.bind({});

export const MaxIs10AndMinIs0 = Template.bind({});
MaxIs10AndMinIs0.args = {
  max: 10,
  min: 0,
};

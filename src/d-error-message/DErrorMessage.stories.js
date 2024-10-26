import DErrorMessage from "@/d-error-message/DErrorMessage.vue";
import DarkModeProvider from "@/providers/DarkModeProvider.vue";

export default {
  component: DErrorMessage,
  title: "Error Message",
  tags: ["autodocs"],
  argTypes: {
    errorMessage: {
      control: { type: "text" },
    },
    showIcon: {
      control: { type: "text" },
    },
    redText: {
      control: { type: "boolean" },
    },
    alignToTop: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DErrorMessage },
  setup() {
    return { args };
  },
  template: `<d-error-message v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DErrorMessage, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-error-message v-bind="args" />
    </dark-mode-provider>
  `,
});

export const Default = Template.bind({});
Default.args = {
  errorMessage: "This is an error message",
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.decorators = [
  () => ({
    template: '<div style="background: #121A26; padding: 3em"><story /></div>',
  }),
];
DarkModeDefault.args = {
  errorMessage: "This is an error message",
};

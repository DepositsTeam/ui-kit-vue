import DCopyInput from "./DCopyInput.vue";

export default {
  title: "Forms/Copy Input",
  component: DCopyInput,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DCopyInput,
  },
  setup() {
    return { args };
  },
  template: `
      <d-copy-input v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Demo Key",
  text: "dk_17j48r8qnxq9984w9429uqcwur09quw0r",
  helperText: "**Use this key in public places such as our JS web sdk.",
};

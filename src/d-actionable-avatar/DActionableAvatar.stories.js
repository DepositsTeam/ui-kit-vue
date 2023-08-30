import DActionableAvatar from "./DActionableAvatar.vue";

export default {
  title: "Actionable Avatar",
  component: DActionableAvatar,
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
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DActionableAvatar,
  },
  setup() {
    return { args };
  },
  template: `
    <d-actionable-avatar v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Demo Key",
  text: "dk_17j48r8qnxq9984w9429uqcwur09quw0r",
  helperText: "**Use this key in public places such as our JS web sdk.",
};

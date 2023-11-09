import DEmptyState from "./DEmptyState.vue";

export default {
  title: "Empty State",
  component: DEmptyState,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    illustration: {
      control: { type: "text" },
    },
    buttonText: {
      control: { type: "text" },
    },
    buttonSmartColor: {
      control: { type: "text" },
    },
    buttonColorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    buttonSize: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DEmptyState,
  },
  setup() {
    return { args };
  },
  template: `<d-empty-state v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "No programs have been created yet?",
  description:
    "No programs have been created yet, your programs will show up here.",
  illustration: "https://launch.new/assets/group-7995.74c17caa.svg",
  buttonText: "Create a new program",
};

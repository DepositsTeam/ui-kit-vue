import DActionCard2 from "./DActionCard2.vue";

export default {
  title: "Action Card 2",
  component: DActionCard2,
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
    DActionCard2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-action-card2 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Setup your program",
  description:
    "Select a use case, configure your fintech programs and generate API keys.",
  illustration: "https://launch.new/assets/setup-program.7e364d0e.svg",
  buttonText: "Get Started",
};

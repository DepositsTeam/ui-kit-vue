import DActionListSingle from "./DActionListSingle.vue";

export default {
  title: "Action List Single",
  component: DActionListSingle,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    subtitle: {
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
    DActionListSingle,
  },
  setup() {
    return { args };
  },
  methods: {
    alertMessage() {
      alert("Hello");
    },
  },
  template: `
    <d-action-list-single v-bind="args" @clicked="alertMessage"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "example@gmail.com",
  description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
  buttonText: "Revoke Access",
  subtitle: "Granted, July 27, 2021 12:45 PM",
};

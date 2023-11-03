import DActionListItem from "./DActionListItem.vue";

export default {
  title: "Action List Item",
  component: DActionListItem,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    logo: {
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
    DActionListItem,
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
      <d-action-list-item v-bind="args" @clicked="alertMessage"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "example@gmail.com",
  description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
  logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  buttonText: "Revoke Access",
  subtitle: "Granted, July 27, 2021 12:45 PM",
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "example@gmail.com",
  logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  buttonText: "Revoke Access",
  subtitle: "Granted, July 27, 2021 12:45 PM",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "example@gmail.com",
  description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
  buttonText: "Revoke Access",
  subtitle: "Granted, July 27, 2021 12:45 PM",
};

export const WithDifferentButtons = Template.bind({});
WithDifferentButtons.args = {
  title: "example@gmail.com",
  description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
  logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  buttonText: "Revoke Access",
  subtitle: "Granted, July 27, 2021 12:45 PM",
  buttonSize: "large",
  buttonColorScheme: "primary",
  // buttonSmartColor: "#000000",
};

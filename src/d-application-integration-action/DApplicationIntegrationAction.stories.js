import DApplicationIntegrationAction from "./DApplicationIntegrationAction.vue";

export default {
  title: "Application Integration Action",
  component: DApplicationIntegrationAction,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    applications: {
      control: { type: "object" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DApplicationIntegrationAction,
  },
  setup() {
    return { args };
  },
  template: `
      <d-application-integration-action v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Application",
  applications: [
    {
      id: 1,
      applicationName: "Quickbooks",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      dateConnected: "Connected, July 27, 2021",
    },
    {
      id: 1,
      applicationName: "Xero",
      logo: "https://marketplace.canva.com/EAFasgWgUyE/6/0/1600w/canva-neon-blue-and-black-gamer-badge-logo-eKEXSFkIoq0.jpg",
      dateConnected: "Connected, July 27, 2021",
    },
    {
      id: 1,
      applicationName: "Zoho Books",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      dateConnected: "Connected, July 27, 2021",
    },
  ],
};

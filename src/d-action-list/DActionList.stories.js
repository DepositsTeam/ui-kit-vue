import DActionList from "./DActionList.vue";

export default {
  title: "Action List",
  component: DActionList,
  tags: ["autodocs"],
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
    DActionList,
  },
  setup() {
    return { args };
  },
  template: `
      <d-action-list v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Application",
  list: [
    {
      id: 1,
      title: "Quickbooks",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      subtitle: "Connected, July 27, 2021",
    },
    {
      id: 1,
      title: "Xero",
      logo: "https://marketplace.canva.com/EAFasgWgUyE/6/0/1600w/canva-neon-blue-and-black-gamer-badge-logo-eKEXSFkIoq0.jpg",
      subtitle: "Connected, July 27, 2021",
    },
    {
      id: 1,
      title: "Zoho Books",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      subtitle: "Connected, July 27, 2021",
    },
  ],
};

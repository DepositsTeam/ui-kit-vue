import DActionList from "./DActionList.vue";

export default {
  title: "Action List",
  component: DActionList,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    list: {
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
  methods: {
    alertMessage() {
      alert("Hello");
    },
  },
  template: `
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Application",
  list: [
    {
      id: 1,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "small",
      buttonColorScheme: "primary",
      buttonSmartColor: "#000000",
    },
    {
      id: 2,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "medium",
      buttonColorScheme: "primary",
    },
    {
      id: 3,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "danger",
    },
  ],
};

export const WithImage = Template.bind({});
WithImage.args = {
  label: "Application",
  list: [
    {
      id: 1,
      title: "example@gmail.com",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "small",
      buttonColorScheme: "primary",
      buttonSmartColor: "#000000",
    },
    {
      id: 1,
      title: "example@gmail.com",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "medium",
      buttonColorScheme: "primary",
    },
    {
      id: 1,
      title: "example@gmail.com",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "danger",
    },
  ],
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Application",
  list: [
    {
      id: 1,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "small",
      buttonColorScheme: "primary",
      buttonSmartColor: "#000000",
    },
    {
      id: 1,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "medium",
      buttonColorScheme: "primary",
    },
    {
      id: 1,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "danger",
    },
  ],
};

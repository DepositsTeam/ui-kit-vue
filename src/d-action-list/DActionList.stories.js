import DActionList from "./DActionList.vue";
import DActionListItem from "@/d-action-list-item/DActionListItem.vue";
import DButton from "@/d-button/DButton.vue";

export default {
  title: "Action List",
  component: DActionList,
  tags: ["autodocs"],
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
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    },
  },
  template: `
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>`,
});

const TemplateWithActionListItem = (args) => ({
  components: {
    DActionList,
    DActionListItem,
    DButton,
  },
  setup() {
    return { args };
  },
  template: `
    <d-action-list v-bind="args">
      <d-action-list-item title="Testing stuff" subtitle="Testing the random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing other stuff" subtitle="Testing the other random stuff out there" description="Other random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing much more stuff" subtitle="Testing the much more random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
    </d-action-list>
  `,
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
      buttonText: "Revoke access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
    },
    {
      id: 2,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
    },
    {
      id: 3,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
    },
  ],
};

export const ActionListWithoutListProps = TemplateWithActionListItem.bind({});
ActionListWithoutListProps.args = {
  label: "Application",
};

export const DifferentButtonColors = Template.bind({});
DifferentButtonColors.args = {
  label: "Application",
  list: [
    {
      id: 1,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
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
      buttonSize: "large",
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
      buttonSize: "large",
      buttonColorScheme: "primary",
      buttonSmartColor: "#000000",
    },
    {
      id: 2,
      title: "example@gmail.com",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "primary",
    },
    {
      id: 3,
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
      buttonSize: "large",
      buttonColorScheme: "primary",
      buttonSmartColor: "#000000",
    },
    {
      id: 2,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "primary",
    },
    {
      id: 3,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "danger",
    },
  ],
};

export const WithDifferentButtonSizes = Template.bind({});
WithDifferentButtonSizes.args = {
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
      id: 2,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "medium",
      buttonColorScheme: "primary",
    },
    {
      id: 3,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "large",
      buttonColorScheme: "danger",
    },
    {
      id: 4,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "xlarge",
      buttonColorScheme: "danger",
    },
    {
      id: 5,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "huge",
      buttonColorScheme: "danger",
    },
    {
      id: 6,
      title: "example@gmail.com",
      description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
      buttonText: "Revoke Access",
      subtitle: "Granted, July 27, 2021 12:45 PM",
      buttonSize: "massive",
      buttonColorScheme: "danger",
    },
  ],
};

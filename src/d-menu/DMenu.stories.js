import DMenu from "./DMenu.vue";
import DButton from "../d-button/DButton.vue";

export default {
  title: "Menu (Context or Dropdown menu)",
  component: DMenu,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DMenu,
    DButton,
  },
  data: () => ({}),
  setup() {
    return { args };
  },
  template: `<d-menu v-bind="args" >
  <d-button>...</d-button>
  </d-menu>`,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
    },
    {
      text: "Create",
    },
  ],
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: ["Edit", "Delete", "Create"],
};

export const CustomOptionColor = Template.bind({});
CustomOptionColor.args = {
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
    },
    {
      text: "Create",
    },
  ],
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  trigger: "hover",
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
    },
    {
      text: "Create",
    },
  ],
};

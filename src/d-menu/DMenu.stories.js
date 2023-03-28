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
  <d-button>Dropdown Menu</d-button>
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

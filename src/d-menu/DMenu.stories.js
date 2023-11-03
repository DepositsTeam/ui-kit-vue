import DMenu from "./DMenu.vue";
import DButton from "../d-button/DButton.vue";

export default {
  title: "Menu (Context or Dropdown menu)",
  component: DMenu,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DMenu,
    DButton,
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {},
  },
  setup() {
    return { args };
  },
  template: `<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
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

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  options: [
    {
      text: "Edit",
      onClick: (option) => alert("I clicked " + option.text),
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
      onHover: (option) =>
        alert("I hovered an option with color " + option.textColor),
      disabled: true,
    },
    {
      text: "Create",
      disabled: true,
    },
  ],
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  trigger: "hover",
  options: [
    {
      text: "Edit",
      onClick: (option) => alert("I clicked " + option.text),
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
      onHover: (option) =>
        alert("I hovered an option with color " + option.textColor),
    },
    {
      text: "Create",
    },
  ],
};

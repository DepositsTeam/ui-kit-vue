import DTab from "./DTab.vue";

export default {
  title: "Tabs",
  component: DTab,
  argTypes: {
    tabs: {
      control: { type: "object" },
    },
    horizontal: {
      control: { type: "boolean" },
    },
    spacing: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DTab,
  },
  setup() {
    return { args };
  },
  template: `<d-tab v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
  ],
};

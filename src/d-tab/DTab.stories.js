import DTab from "./DTab.vue";
import { DarkModeProvider } from "../main";

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

const DarkModeTemplate = (args) => ({
  components: {
    DTab,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-tab v-bind="args" />
    </dark-mode-provider>
  `,
});

const DarkModeTemplateFactory = (Template = null) => {
  const Bound = Template ? Template.bind({}) : DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

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

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
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

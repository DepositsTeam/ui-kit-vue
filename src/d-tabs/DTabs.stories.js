import DTabs from "./DTabs.vue";
import { DarkModeProvider, DBox, DText, DCard } from "../main";

export default {
  title: "Tabs",
  component: DTabs,
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
    initiallyActive: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DTabs,
  },
  setup() {
    return { args };
  },
  template: `<d-tabs v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: {
    DTabs,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
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
      text: "Tab 1",
      href: "#",
    },
    {
      text: "Tab 2",
      href: "#",
    },
    {
      text: "Tab 3",
      href: "#",
    },
    {
      text: "Tab 4",
      href: "#",
    },
    {
      text: "Tab 5 (Disabled)",
      disabled: true,
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

const TemplateWithContent = (args) => ({
  components: {
    DTabs,
    DBox,
    DText,
    DCard,
  },
  data: () => ({
    activeTabIndex: 0,
    tabs: [
      {
        text: "Tab 1",
        href: "#",
      },
      {
        text: "Tab 2",
        href: "#",
      },
      {
        text: "Tab 3",
        href: "#",
      },
      {
        text: "Tab 4",
        href: "#",
      },
      {
        text: "Tab 5 (Disabled)",
        href: "#",
        disabled: true,
      },
    ],
  }),
  setup() {
    return { args };
  },
  template: `
    <d-box>
    <d-tabs v-bind="args" v-model="activeTabIndex" :tabs="tabs" />
    <d-box v-if="activeTabIndex === 0">
      <d-card>
        <d-text>
          First set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 1">
      <d-card>
        <d-text>
          Second set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 2">
      <d-card>
        <d-text>
          Third set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 3">
      <d-card>
        <d-text>
          Fourth set of content
        </d-text>
      </d-card>
    </d-box>
    
    </d-box>
    <d-text>Active Tab Index: {{activeTabIndex}}</d-text>
  `,
});

export const SampleWithContent = TemplateWithContent.bind({});

const DarkModeTemplateWithContent = (args) => ({
  components: {
    DTabs,
    DarkModeProvider,
  },
  data: () => ({
    selectedTabIndex: 0,
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" v-model="selectedTabIndex"  />
    </dark-mode-provider>
  `,
});

import DTabs from "./DTabs.vue";
import { DarkModeProvider, DBox, DText, DCard, DFilterDropdown } from "../main";

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
    inline: {
      control: { type: "boolean" },
    },
    scheme: {
      control: { type: "select" },
      options: ["button", "underline", "inline", "underline_card"],
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

export const UnderlineSchemeTab = Template.bind({});
UnderlineSchemeTab.args = {
  scheme: "underline",
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

export const UnderlineCardSchemeTab = Template.bind({});
UnderlineCardSchemeTab.args = {
  scheme: "underline_card",
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

export const InlineSchemeTab = Template.bind({});
InlineSchemeTab.args = {
  scheme: "inline",
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

const UnderlineCardTemplateWithSecondaryItem = (args) => ({
  components: { DTabs, DFilterDropdown },
  setup() {
    return { args };
  },
  template: `
    <d-tabs v-bind="args">
      <d-filter-dropdown :options="['All Time', 'Today', 'This month']" />
    </d-tabs>
  `,
});

export const UnderlineCardWithSecondaryItem =
  UnderlineCardTemplateWithSecondaryItem.bind({});
UnderlineCardWithSecondaryItem.args = {
  scheme: "underline_card",
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

export const UnderlineSchemeWithoutBorder = Template.bind({});
UnderlineSchemeWithoutBorder.args = {
  scheme: "underline",
  hideBottomBorder: true,
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

export const UnderlineCardSchemeWithoutBorder = Template.bind({});
UnderlineCardSchemeWithoutBorder.args = {
  scheme: "underline_card",
  hideBottomBorder: true,
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

export const CustomTabActiveTextColor = Template.bind({});
CustomTabActiveTextColor.args = {
  scheme: "underline",
  activeTextColor: "#ff0000",
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

export const CustomTabActiveColor = Template.bind({});
CustomTabActiveColor.args = {
  scheme: "underline",
  activeIndicatorColor: "#ff0000",
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

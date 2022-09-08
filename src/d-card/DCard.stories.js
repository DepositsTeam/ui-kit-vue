import DCard from "./DCard.vue";
import { DBox, DHeading } from "../main";
import { FilterIcon } from "../main";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Card",
  component: DCard,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "object" },
    },
    selected: {
      control: { type: "boolean" },
    },
    radio: {
      control: { type: "boolean" },
    },
    checkbox: {
      control: { type: "boolean" },
    },
    desc: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DCard },
  data: () => ({
    selected: false,
  }),
  setup() {
    return { args };
  },
  template: `<d-card v-model="selected" value="something" v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DCard, DarkModeProvider },
  data: () => ({
    selected: false,
  }),
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-card value="something" v-model="selected" v-bind="args" /></dark-mode-provider>`,
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

const HeaderFooterTemplate = (args) => ({
  components: { DCard, DBox, DHeading },
  data: () => ({
    selected: false,
  }),
  setup() {
    return { args };
  },
  template: `<d-card v-model="selected"  value="selected" v-bind="args">
  <template #header>
    <d-box width="100%" padding="16px" background="#f1f1f1" border-radius="6px 6px 0 0" box-shadow="0px 2px 4px rgba(0, 0, 0, 0.05)" >
      <d-heading margin-y="0" scale="h5" font-weight="500">
        Custom Header
      </d-heading>
    </d-box>
  </template>
  <template #footer>
    <d-box width="100%" padding="16px" background="#f1f1f1" border-radius="0 0 6px 6px" box-shadow="0px 2px 4px rgba(0, 0, 0, 0.05)" >
      <d-heading margin-y="0" scale="h5" font-weight="500">
        Custom footer

      </d-heading>
    </d-box>
  </template>
  </d-card>`,
});

const DarkModeHeaderFooterTemplate = (args) => ({
  components: { DCard, DBox, DHeading, DarkModeProvider },
  data: () => ({
    selected: false,
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
    <d-card width="40%" v-model="selected" value="selected" v-bind="args">
  <template #header>
    <d-box width="100%" padding="16px" background="transparent" border-radius="6px 6px 0 0" border="1px solid #384860" >
      <d-heading margin-y="0" scale="h5" font-weight="500">
        Custom Header
      </d-heading>
    </d-box>
  </template>
  <template #footer>
    <d-box width="100%" padding="16px" background="transparent" border-radius="0 0 6px 6px" border="1px solid #384860">
      <d-heading margin-y="0" scale="h5" font-weight="500">
        Custom footer

      </d-heading>
    </d-box>
  </template>
  </d-card>
    </dark-mode-provider>
  `,
});

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac consectetur mauris in ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac tr yi ng sth consectetur mauris in ipsum.";

export const Default = Template.bind({});
Default.args = {
  children: text,
  title: "Test title",
  desc: "I have a test description",
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  children: text,
  title: "Test title",
  desc: "I have a test description",
};

export const Icon = Template.bind({});
Icon.args = {
  children: text,
  icon: FilterIcon,
  title: "Test title",
};

export const IconDark = DarkModeTemplateFactory();
IconDark.args = {
  children: text,
  icon: FilterIcon,
  title: "Test title",
};

export const Radio = Template.bind({});
Radio.args = {
  children: text,
  radio: true,
  title: "Test title",
};

export const RadioDark = DarkModeTemplateFactory();
RadioDark.args = {
  children: text,
  radio: true,
  title: "Test title",
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  children: text,
  checkbox: true,
  title: "Test title",
};

export const CheckBoxDark = DarkModeTemplateFactory();
CheckBoxDark.args = {
  children: text,
  checkbox: true,
  title: "Test title",
};

export const RadioIcon = Template.bind({});
RadioIcon.args = {
  children: text,
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
RadioIcon.storyName = "Radio & Icon";

export const RadioIconDark = DarkModeTemplateFactory();
RadioIconDark.args = {
  children: text,
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
RadioIconDark.storyName = "Dark Radio & Icon";

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  children: text,
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
CheckIcon.storyName = "Checkbox & Icon";

export const CheckIconDark = DarkModeTemplateFactory();
CheckIconDark.args = {
  children: text,
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
CheckIconDark.storyName = "Dark Checkbox & Icon";

export const NoDesc = Template.bind({});
NoDesc.storyName = "No Description";

export const NoDescDark = DarkModeTemplateFactory();
NoDescDark.storyName = "No Description Dark";

export const NoDescIcon = Template.bind({});
NoDescIcon.args = {
  icon: FilterIcon,
  title: "Test title",
};
NoDescIcon.storyName = "Icon - No description";

export const NoDescIconDark = DarkModeTemplateFactory();
NoDescIconDark.args = {
  icon: FilterIcon,
  title: "Test title",
};
NoDescIconDark.storyName = "Icon - No description Dark";

export const NoDescRadio = Template.bind({});
NoDescRadio.args = {
  radio: true,
  title: "Test title",
};
NoDescRadio.storyName = "Radio - No description";

export const NoDescRadioDark = DarkModeTemplateFactory();
NoDescRadioDark.args = {
  radio: true,
  title: "Test title",
};
NoDescRadioDark.storyName = "Radio - No description Dark";

export const NoDescCheckBox = Template.bind({});
NoDescCheckBox.args = {
  checkbox: true,
  title: "Test title",
};
NoDescCheckBox.storyName = "Checkbox - No description";

export const NoDescCheckBoxDark = DarkModeTemplateFactory();
NoDescCheckBoxDark.args = {
  checkbox: true,
  title: "Test title",
};
NoDescCheckBoxDark.storyName = "Checkbox - No description Dark";

export const NoDescRadioIcon = Template.bind({});
NoDescRadioIcon.args = {
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescRadioIcon.storyName = "Radio & Icon - No description";

export const NoDescRadioIconDark = DarkModeTemplateFactory();
NoDescRadioIconDark.args = {
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescRadioIconDark.storyName = "Radio & Icon - No description";

export const NoDescCheckIcon = Template.bind({});
NoDescCheckIcon.args = {
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescCheckIcon.storyName = "Checkbox & Icon - No description";

export const NoDescCheckIconDark = DarkModeTemplateFactory();
NoDescCheckIconDark.args = {
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescCheckIconDark.storyName = "Checkbox & Icon - No description Dark";

export const CustomHeaderAndFooter = HeaderFooterTemplate.bind({});
CustomHeaderAndFooter.args = {
  desc: "I am some awesome content",
  title: "Test title",
};

export const CustomHeaderAndFooterDark = DarkModeTemplateFactory(
  DarkModeHeaderFooterTemplate
);
CustomHeaderAndFooterDark.args = {
  desc: "I am some awesome content",
  title: "Test title",
};

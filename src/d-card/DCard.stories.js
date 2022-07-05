import DCard from "./DCard.vue";
import { FilterIcon } from "../main";

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
  setup() {
    return { args };
  },
  template: `<d-card v-bind="args" />`,
});

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac consectetur mauris in ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac tr yi ng sth consectetur mauris in ipsum.";

export const Default = Template.bind({});
Default.args = {
  children: text,
  title: "Test title",
};

export const Icon = Template.bind({});
Icon.args = {
  children: text,
  icon: FilterIcon,
  title: "Test title",
};
Icon.storyName = "Icon";

export const Radio = Template.bind({});
Radio.args = {
  children: text,
  radio: true,
  title: "Test title",
};
Radio.storyName = "Radio";

export const CheckBox = Template.bind({});
CheckBox.args = {
  children: text,
  checkbox: true,
  title: "Test title",
};
CheckBox.storyName = "Checkbox";

export const RadioIcon = Template.bind({});
RadioIcon.args = {
  children: text,
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
RadioIcon.storyName = "Radio & Icon";

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  children: text,
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
CheckIcon.storyName = "Checkbox & Icon";

export const NoDesc = Template.bind({});
NoDesc.storyName = "No Description";

export const NoDescIcon = Template.bind({});
NoDescIcon.args = {
  icon: FilterIcon,
  title: "Test title",
};
NoDescIcon.storyName = "Icon - No description";

export const NoDescRadio = Template.bind({});
NoDescRadio.args = {
  radio: true,
  title: "Test title",
};
NoDescRadio.storyName = "Radio - No description";

export const NoDescCheckBox = Template.bind({});
NoDescCheckBox.args = {
  checkbox: true,
  title: "Test title",
};
NoDescCheckBox.storyName = "Checkbox - No description";

export const NoDescRadioIcon = Template.bind({});
NoDescRadioIcon.args = {
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescRadioIcon.storyName = "Radio & Icon - No description";

export const NoDescCheckIcon = Template.bind({});
NoDescCheckIcon.args = {
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescCheckIcon.storyName = "Checkbox & Icon - No description";

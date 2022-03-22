import DCard from "./DCard.vue";

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

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac consectetur mauris in ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac tr yi ng sth consectetur mauris in ipsum.'

export const Default = Template.bind({})
Default.args = {
  children: text
}

export const Icon = Template.bind({})
Icon.args = {
  children: text,
  icon: true,
}
Icon.storyName = "Icon"

export const Radio = Template.bind({})
Radio.args = {
  children: text,
  radio: true,
}
Radio.storyName = "Radio"

export const CheckBox = Template.bind({})
CheckBox.args = {
  children: text,
  checkbox: true,
}
CheckBox.storyName = "Checkbox"

export const RadioIcon = Template.bind({})
RadioIcon.args = {
  children: text,
  radio: true,
  icon: true
}
RadioIcon.storyName = "Radio & Icon"

export const CheckIcon = Template.bind({})
CheckIcon.args = {
  children: text,
  checkbox: true,
  icon: true
}
CheckIcon.storyName = "Checkbox & Icon"



export const NoDesc = Template.bind({})
NoDesc.storyName = "No Description"



export const NoDescIcon = Template.bind({})
NoDescIcon.args = {
  icon: true,
}
NoDescIcon.storyName = "Icon - No description"

export const NoDescRadio = Template.bind({})
NoDescRadio.args = {
  radio: true,
}
NoDescRadio.storyName = "Radio - No description"

export const NoDescCheckBox = Template.bind({})
NoDescCheckBox.args = {
  checkbox: true,
}
NoDescCheckBox.storyName = "Checkbox - No description"

export const NoDescRadioIcon = Template.bind({})
NoDescRadioIcon.args = {
  radio: true,
  icon: true
}
NoDescRadioIcon.storyName = "Radio & Icon - No description"

export const NoDescCheckIcon = Template.bind({})
NoDescCheckIcon.args = {
  checkbox: true,
  icon: true
}
NoDescCheckIcon.storyName = "Checkbox & Icon - No description"


import DRadio from "./DRadio.vue";

export default {
  title: "Radio",
  component: DRadio,
  argTypes: {
    ringed: {
      control: { type: "boolean" },
    },
    alignToTop: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: {
    DRadio,
  },
  setup: function () {
    return { args };
  },
  template: `<d-radio v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Checking",
};

export const Ringed = Template.bind({});
Ringed.args = {
  label: "Checking",
  ringed: true,
};

import DCopy from "@/d-copy/DCopy.vue";

export default {
  title: "Copy",
  component: DCopy,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DCopy,
  },
  setup() {
    return {
      args,
    };
  },
  template: `<d-copy v-bind="args" />`,
});

export const Default = Template.bind({});

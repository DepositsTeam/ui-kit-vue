import DGoBack from "@/d-go-back/DGoBack.vue";

export default {
  title: "Go Back",
  component: DGoBack,
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: {
    DGoBack,
  },
  setup() {
    return { args };
  },
  template: `<d-go-back v-bind="args" />`,
});

export const Default = Template.bind({});

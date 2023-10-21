import DStaticStats3 from "./DStaticStats3.vue";

export default {
  title: "Static Stats 3",
  component: DStaticStats3,
  argTypes: {
    stat1: {
      control: { type: "object" },
    },
    stat2: {
      control: { type: "object" },
    },
    icon: {
      control: { type: ["object", "text"] },
    },
  },
};

const Template = (args) => ({
  components: {
    DStaticStats3,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stats3 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  stat1: {
    text: "Total users",
    value: 100,
  },
  stat2: {
    text: "Active users",
    value: 50,
  },
  icon: "https://launch.new/assets/setup-program.7e364d0e.svg",
};

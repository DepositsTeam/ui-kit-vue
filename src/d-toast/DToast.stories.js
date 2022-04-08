import DToast from "./DToast.vue";
import DButton from "../d-button/DButton.vue";

export default {
  title: "Toast",
  component: DToast,
  argTypes: {
    autoClose: {
      control: { type: "text" },
    },
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-left", "bottom-right"],
    },
    onClose: {
      control: { type: "function" },
    },
  },
};

const Template = (args) => ({
  components: { DToast, DButton },
  data: () => ({
    count: 1,
  }),
  setup() {
    return { args };
  },
  methods: {
    pushToast() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.$refs.toast.pushToast(differentArgs);
      this.count += 1;
    },
  },
  template: `
    <d-button @click="pushToast">Show Toast</d-button>
    <d-toast ref="toast" v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
};

export const TooltipWithDescription = Template.bind({});
TooltipWithDescription.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

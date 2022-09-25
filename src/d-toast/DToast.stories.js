import DToast from "./DToast.vue";
import { DButton, ToastProvider, DarkModeProvider } from "../main";

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
  inject: ["d__pushToast"],
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
      this.d__pushToast(differentArgs);
      this.count += 1;
    },
  },
  template: `
    <d-button @click="pushToast">Show Toast</d-button>
  `,
});

const ToastWrapper = () => {
  const Bound = Template.bind({});
  Bound.decorators = [
    () => ({
      components: {
        ToastProvider,
      },
      template: `<toast-provider><story /></toast-provider>`,
    }),
  ];
  return Bound;
};

const DarkModeTemplate = (args) => ({
  components: { DToast, DButton, DarkModeProvider },
  inject: ["d__pushToast"],
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
      this.d__pushToast(differentArgs);
      this.count += 1;
    },
  },
  template: `
        <d-button @click="pushToast">Show Toast</d-button>    
  `,
});

const DarkToastWrapper = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      components: {
        ToastProvider,
        DarkModeProvider,
      },
      template: `
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        `,
    }),
  ];
  return Bound;
};

export const Default = ToastWrapper();
Default.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
};

export const ToastWithDescription = ToastWrapper();
ToastWithDescription.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescription = ToastWrapper();
ToastWithOnlyDescription.args = {
  colorScheme: "success",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const DefaultDark = DarkToastWrapper();
DefaultDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
};

export const ToastWithDescriptionDark = DarkToastWrapper();
ToastWithDescriptionDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescriptionDark = DarkToastWrapper();
ToastWithOnlyDescriptionDark.args = {
  colorScheme: "success",
  autoClose: 3,
  description: "I am a random one with a description",
};

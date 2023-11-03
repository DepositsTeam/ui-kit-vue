import {
  DButton,
  ToastProvider,
  DarkModeProvider,
  DModal,
  useToast,
} from "../main";

export default {
  title: "Toast",
  tags: ["autodocs"],
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

const ModalTemplate = (args) => ({
  components: { DModal, DButton },
  setup() {
    const { pushToast, clearToasts } = useToast();
    return { args, pushToast, clearToasts };
  },
  methods: {
    pushToastFunction() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.pushToast(differentArgs);
      this.count += 1;
    },
    clearToastsFunction() {
      this.clearToasts();
    },
  },
  mounted() {
    this.pushToastFunction();
  },
  template: `
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
    <d-modal :show="true"></d-modal>
  `,
});

const Template = (args) => ({
  components: { DButton },
  inject: ["d__pushToast", "d__clearToasts"],
  data: () => ({
    count: 1,
  }),
  setup() {
    const { pushToast, clearToasts } = useToast();
    return { args, pushToast, clearToasts };
  },
  methods: {
    pushToastFunction() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.pushToast(differentArgs);
      this.count += 1;
    },
    clearToastsFunction() {
      this.clearToasts();
    },
  },
  template: `
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
  `,
});

const ToastWrapper = (template = Template) => {
  const Bound = template.bind({});
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
  components: { DButton, DarkModeProvider },
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
  colorScheme: "error",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const ModalToast = ToastWrapper(ModalTemplate);
ModalToast.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
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
  timeout: 3,
};

export const ToastWithDescriptionDark = DarkToastWrapper();
ToastWithDescriptionDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  timeout: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescriptionDark = DarkToastWrapper();
ToastWithOnlyDescriptionDark.args = {
  colorScheme: "success",
  timeout: 3,
  description: "I am a random one with a description",
};

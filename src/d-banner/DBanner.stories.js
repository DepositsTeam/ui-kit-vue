import DBanner from "./DBanner.vue";

export default {
  title: "Banner",
  component: DBanner,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    colorScheme: {
      control: { type: "select" },
      options: ["default", "info", "warning", "error", "success"],
    },
    removable: {
      control: { type: "boolean" },
    },
    alignTop: {
      control: { type: "boolean" },
    },
    full: {
      control: { type: "boolean" },
      default: true
    },
  },
};

const Template = (args) => ({
  components: { DBanner },
  setup() {
    return { args };
  },
  template: `<d-banner v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
};

export const Info = Template.bind({});
Info.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
};

export const DefaultRemovable = Template.bind({});
DefaultRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true,
};

export const SuccessRemovable = Template.bind({});
SuccessRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true,
};

export const ErrorRemovable = Template.bind({});
ErrorRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true,
};

export const WarningRemovable = Template.bind({});
WarningRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true,
};

export const InfoRemovable = Template.bind({});
InfoRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true,
};

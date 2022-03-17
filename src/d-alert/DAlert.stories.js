import DAlert from "./DAlert.vue";

export default {
  title: "Alert",
  component: DAlert,
  argTypes: {
    message: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    colorScheme: {
      control: { type: "select" },
      options: ["default", "info", "warning", "error", "success"],
    },
    theme: {
      control: { type: "select" },
      options: ["flat", "filled", "inline"],
    },
    button: {
      control: { type: "object" },
    },
    closable: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DAlert },
  setup() {
    return { args };
  },
  template: `<d-alert v-bind="args" />`,
});

export const FlatDefault = Template.bind({});

export const FlatSuccess = Template.bind({});
FlatSuccess.args = {
  colorScheme: "success",
};

export const FlatWarning = Template.bind({});
FlatWarning.args = {
  colorScheme: "warning",
};

export const FlatError = Template.bind({});
FlatError.args = {
  colorScheme: "error",
};

export const FlatInfo = Template.bind({});
FlatInfo.args = {
  colorScheme: "info",
};

export const FlatDefaultDescription = Template.bind({});
FlatDefaultDescription.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescription = Template.bind({});
FlatSuccessDescription.args = {
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescription = Template.bind({});
FlatWarningDescription.args = {
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescription = Template.bind({});
FlatErrorDescription.args = {
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescription = Template.bind({});
FlatInfoDescription.args = {
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatDefaultButton = Template.bind({});
FlatDefaultButton.args = {
  button: {
    text: "Default Button",
  },
};

export const FlatSuccessButton = Template.bind({});
FlatSuccessButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const FlatWarningButton = Template.bind({});
FlatWarningButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const FlatErrorButton = Template.bind({});
FlatErrorButton.args = {
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FlatInfoButton = Template.bind({});
FlatInfoButton.args = {
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FlatDefaultDescriptionButton = Template.bind({});
FlatDefaultDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescriptionButton = Template.bind({});
FlatSuccessDescriptionButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescriptionButton = Template.bind({});
FlatWarningDescriptionButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescriptionButton = Template.bind({});
FlatErrorDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescriptionButton = Template.bind({});
FlatInfoDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  theme: "filled",
};

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  theme: "filled",
  colorScheme: "success",
};

export const FilledWarning = Template.bind({});
FilledWarning.args = {
  theme: "filled",
  colorScheme: "warning",
};

export const FilledError = Template.bind({});
FilledError.args = {
  theme: "filled",
  colorScheme: "error",
};

export const FilledInfo = Template.bind({});
FilledInfo.args = {
  theme: "filled",
  colorScheme: "info",
};

export const FilledDefaultDescription = Template.bind({});
FilledDefaultDescription.args = {
  theme: "filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescription = Template.bind({});
FilledSuccessDescription.args = {
  theme: "filled",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledWarningDescription = Template.bind({});
FilledWarningDescription.args = {
  theme: "filled",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledErrorDescription = Template.bind({});
FilledErrorDescription.args = {
  theme: "filled",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledInfoDescription = Template.bind({});
FilledInfoDescription.args = {
  theme: "filled",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefaultButton = Template.bind({});
FilledDefaultButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
};

export const FilledSuccessButton = Template.bind({});
FilledSuccessButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const FilledWarningButton = Template.bind({});
FilledWarningButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const FilledErrorButton = Template.bind({});
FilledErrorButton.args = {
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FilledInfoButton = Template.bind({});
FilledInfoButton.args = {
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FilledDefaultDescriptionButton = Template.bind({});
FilledDefaultDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescriptionButton = Template.bind({});
FilledSuccessDescriptionButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledWarningDescriptionButton = Template.bind({});
FilledWarningDescriptionButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledErrorDescriptionButton = Template.bind({});
FilledErrorDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledInfoDescriptionButton = Template.bind({});
FilledInfoDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const InlineSuccess = Template.bind({});
InlineSuccess.args = {
  colorScheme: "success",
  theme: "inline",
};

export const InlineWarning = Template.bind({});
InlineWarning.args = {
  colorScheme: "warning",
  theme: "inline",
};

export const InlineError = Template.bind({});
InlineError.args = {
  colorScheme: "error",
  theme: "inline",
};

export const InlineInfo = Template.bind({});
InlineInfo.args = {
  colorScheme: "info",
  theme: "inline",
};

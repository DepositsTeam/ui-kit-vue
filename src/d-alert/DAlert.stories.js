import DAlert from "./DAlert.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

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

const DarkModeTemplate = (args) => ({
  components: { DAlert, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-alert v-bind="args" /></dark-mode-provider>`,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const FlatDefault = Template.bind({});
FlatDefault.args = {
  message: "This is an alert",
};

export const DarkFlatDefault = DarkModeTemplateFactory();
DarkFlatDefault.args = {
  message: "This is an alert",
};

export const FlatSuccess = Template.bind({});
FlatSuccess.args = {
  message: "This is an alert",
  colorScheme: "success",
};

export const DarkFlatSuccess = DarkModeTemplateFactory();
DarkFlatSuccess.args = {
  message: "This is an alert",
  colorScheme: "success",
};

export const FlatWarning = Template.bind({});
FlatWarning.args = {
  message: "This is an alert",
  colorScheme: "warning",
};

export const DarkFlatWarning = DarkModeTemplateFactory();
DarkFlatWarning.args = {
  message: "This is an alert",
  colorScheme: "warning",
};

export const FlatError = Template.bind({});
FlatError.args = {
  message: "This is an alert",
  colorScheme: "error",
};

export const DarkFlatError = DarkModeTemplateFactory();
DarkFlatError.args = {
  message: "This is an alert",
  colorScheme: "error",
};

export const FlatInfo = Template.bind({});
FlatInfo.args = {
  message: "This is an alert",
  colorScheme: "info",
};

export const DarkFlatInfo = DarkModeTemplateFactory();
DarkFlatInfo.args = {
  message: "This is an alert",
  colorScheme: "info",
};

export const FlatDefaultDescription = Template.bind({});
FlatDefaultDescription.args = {
  message: "This is an alert",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatDefaultDescription = DarkModeTemplateFactory();
DarkFlatDefaultDescription.args = {
  message: "This is an alert",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescription = Template.bind({});
FlatSuccessDescription.args = {
  message: "This is an alert",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatSuccessDescription = DarkModeTemplateFactory();
DarkFlatSuccessDescription.args = {
  message: "This is an alert",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescription = Template.bind({});
FlatWarningDescription.args = {
  message: "This is an alert",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatWarningDescription = DarkModeTemplateFactory();
DarkFlatWarningDescription.args = {
  message: "This is an alert",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescription = Template.bind({});
FlatErrorDescription.args = {
  message: "This is an alert",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatErrorDescription = DarkModeTemplateFactory();
DarkFlatErrorDescription.args = {
  message: "This is an alert",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescription = Template.bind({});
FlatInfoDescription.args = {
  message: "This is an alert",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatInfoDescription = DarkModeTemplateFactory();
DarkFlatInfoDescription.args = {
  message: "This is an alert",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatDefaultButton = Template.bind({});
FlatDefaultButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatDefaultButton = DarkModeTemplateFactory();
DarkFlatDefaultButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
};

export const FlatSuccessButton = Template.bind({});
FlatSuccessButton.args = {
  message: "This is an alert",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatSuccessButton = DarkModeTemplateFactory();
DarkFlatSuccessButton.args = {
  message: "This is an alert",
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

export const DarkFlatWarningButton = DarkModeTemplateFactory();
DarkFlatWarningButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const FlatErrorButton = Template.bind({});
FlatErrorButton.args = {
  message: "This is an alert",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatErrorButton = DarkModeTemplateFactory();
DarkFlatErrorButton.args = {
  message: "This is an alert",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FlatInfoButton = Template.bind({});
FlatInfoButton.args = {
  message: "This is an alert",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatInfoButton = DarkModeTemplateFactory();
DarkFlatInfoButton.args = {
  message: "This is an alert",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FlatDefaultDescriptionButton = Template.bind({});
FlatDefaultDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatDefaultDescriptionButton = DarkModeTemplateFactory();
DarkFlatDefaultDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescriptionButton = Template.bind({});
FlatSuccessDescriptionButton.args = {
  message: "This is an alert",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatSuccessDescriptionButton = DarkModeTemplateFactory();
DarkFlatSuccessDescriptionButton.args = {
  message: "This is an alert",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescriptionButton = Template.bind({});
FlatWarningDescriptionButton.args = {
  message: "This is an alert",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatWarningDescriptionButton = DarkModeTemplateFactory();
DarkFlatWarningDescriptionButton.args = {
  message: "This is an alert",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescriptionButton = Template.bind({});
FlatErrorDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatErrorDescriptionButton = DarkModeTemplateFactory();
DarkFlatErrorDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescriptionButton = Template.bind({});
FlatInfoDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatInfoDescriptionButton = DarkModeTemplateFactory();
DarkFlatInfoDescriptionButton.args = {
  message: "This is an alert",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  message: "This is an alert",
  theme: "filled",
};
export const DarkFilledDefault = DarkModeTemplateFactory();
DarkFilledDefault.args = {
  message: "This is an alert",
  theme: "filled",
};

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
};

export const DarkFilledSuccess = DarkModeTemplateFactory();
DarkFilledSuccess.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
};

export const FilledWarning = Template.bind({});
FilledWarning.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
};

export const DarkFilledWarning = DarkModeTemplateFactory();
DarkFilledWarning.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
};

export const FilledError = Template.bind({});
FilledError.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
};

export const DarkFilledError = DarkModeTemplateFactory();
DarkFilledError.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
};

export const FilledInfo = Template.bind({});
FilledInfo.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
};

export const DarkFilledInfo = DarkModeTemplateFactory();
DarkFilledInfo.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
};

export const FilledDefaultDescription = Template.bind({});
FilledDefaultDescription.args = {
  message: "This is an alert",
  theme: "filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledDefaultDescription = DarkModeTemplateFactory();
DarkFilledDefaultDescription.args = {
  message: "This is an alert",
  theme: "filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescription = Template.bind({});
FilledSuccessDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledSuccessDescription = DarkModeTemplateFactory();
DarkFilledSuccessDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledWarningDescription = Template.bind({});
FilledWarningDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledWarningDescription = DarkModeTemplateFactory();
DarkFilledWarningDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledErrorDescription = Template.bind({});
FilledErrorDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledErrorDescription = DarkModeTemplateFactory();
DarkFilledErrorDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledInfoDescription = Template.bind({});
FilledInfoDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledInfoDescription = DarkModeTemplateFactory();
DarkFilledInfoDescription.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefaultButton = Template.bind({});
FilledDefaultButton.args = {
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledDefaultButton = DarkModeTemplateFactory();
DarkFilledDefaultButton.args = {
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
};

export const FilledSuccessButton = Template.bind({});
FilledSuccessButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledSuccessButton = DarkModeTemplateFactory();
DarkFilledSuccessButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const FilledWarningButton = Template.bind({});
FilledWarningButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledWarningButton = DarkModeTemplateFactory();
DarkFilledWarningButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const FilledErrorButton = Template.bind({});
FilledErrorButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledErrorButton = DarkModeTemplateFactory();
DarkFilledErrorButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FilledInfoButton = Template.bind({});
FilledInfoButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledInfoButton = DarkModeTemplateFactory();
DarkFilledInfoButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FilledDefaultDescriptionButton = Template.bind({});
FilledDefaultDescriptionButton.args = {
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledDefaultDescriptionButton = DarkModeTemplateFactory();
DarkFilledDefaultDescriptionButton.args = {
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescriptionButton = Template.bind({});
FilledSuccessDescriptionButton.args = {
  message: "This is an alert",
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledSuccessDescriptionButton = DarkModeTemplateFactory();
DarkFilledSuccessDescriptionButton.args = {
  message: "This is an alert",
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
  message: "This is an alert",
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledWarningDescriptionButton = DarkModeTemplateFactory();
DarkFilledWarningDescriptionButton.args = {
  message: "This is an alert",
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
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledErrorDescriptionButton = DarkModeTemplateFactory();
DarkFilledErrorDescriptionButton.args = {
  message: "This is an alert",
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
  message: "This is an alert",
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledInfoDescriptionButton = DarkModeTemplateFactory();
DarkFilledInfoDescriptionButton.args = {
  message: "This is an alert",
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
  message: "This is an alert",
  colorScheme: "success",
  theme: "inline",
};

export const DarkInlineSuccess = DarkModeTemplateFactory();
DarkInlineSuccess.args = {
  message: "This is an alert",
  colorScheme: "success",
  theme: "inline",
};

export const InlineWarning = Template.bind({});
InlineWarning.args = {
  message: "This is an alert",
  colorScheme: "warning",
  theme: "inline",
};

export const DarkInlineWarning = DarkModeTemplateFactory();
DarkInlineWarning.args = {
  message: "This is an alert",
  colorScheme: "warning",
  theme: "inline",
};

export const InlineError = Template.bind({});
InlineError.args = {
  message: "This is an alert",
  colorScheme: "error",
  theme: "inline",
};

export const DarkInlineError = DarkModeTemplateFactory();
DarkInlineError.args = {
  message: "This is an alert",
  colorScheme: "error",
  theme: "inline",
};

export const InlineInfo = Template.bind({});
InlineInfo.args = {
  message: "This is an alert",
  colorScheme: "info",
  theme: "inline",
};

export const DarkInlineInfo = DarkModeTemplateFactory();
DarkInlineInfo.args = {
  message: "This is an alert",
  colorScheme: "info",
  theme: "inline",
};

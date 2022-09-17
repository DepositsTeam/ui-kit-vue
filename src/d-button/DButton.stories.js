import DButton from "./DButton.vue";
import SearchIcon from "../icons/SearchIcon.vue";

export default {
  title: "Button",
  component: DButton,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    is: {
      control: { type: "select" },
      options: ["button", "a", "span", "div"],
    },
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    dropDown: {
      control: { type: "Boolean" },
    },
    leftIcon: {
      control: { type: "object" },
    },
    responsive: {
      control: { type: "boolean" },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<d-button v-bind="args"><span v-html="args.children" /></d-button>`,
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = { children: "Primary Button", colorScheme: "primary" };

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Primary Loading Button",
  colorScheme: "primary",
  loading: true,
};
PrimaryLoading.storyName = "Loading";

export const Danger = Template.bind({});
Danger.args = { children: "Danger Button", colorScheme: "danger" };

export const Success = Template.bind({});
Success.args = { children: "Success Button", colorScheme: "success" };

export const Outline = Template.bind({});
Outline.args = { children: "Outline Button", colorScheme: "outline" };

export const OutlineLeftIcon = Template.bind({});
OutlineLeftIcon.args = {
  children: "Outline Button",
  colorScheme: "outline",
  leftIcon: SearchIcon,
};

export const OutlineDropdown = Template.bind({});
OutlineDropdown.args = {
  children: "Outline Button",
  colorScheme: "outline",
  dropDown: true,
};

export const Invisible = Template.bind({});
Invisible.args = { children: "Invisible Button", colorScheme: "invisible" };

export const InvisibleLeftIcon = Template.bind({});
InvisibleLeftIcon.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  leftIcon: SearchIcon,
};

export const InvisibleLeftIconDropdown = Template.bind({});
InvisibleLeftIconDropdown.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  dropDown: true,
};

export const Small = Template.bind({});
Small.args = { children: "Small Button", size: "small" };

export const Medium = Template.bind({});
Medium.args = { children: "Medium Button", size: "medium" };

export const Large = Template.bind({});
Large.args = { children: "Large Button", size: "large" };

export const XLarge = Template.bind({});
XLarge.args = { children: "X-Large Button", size: "xlarge" };
XLarge.storyName = "X-Large";

export const Huge = Template.bind({});
Huge.args = { children: "Huge Button", size: "huge" };

export const Massive = Template.bind({});
Massive.args = { children: "Massive Button", size: "massive" };

export const Dropdown = Template.bind({});
Dropdown.args = { children: "Dropdown Button", dropDown: true };
Dropdown.storyName = "Dropdown Button";

export const IconButton = Template.bind({});
IconButton.args = { children: "Icon Button", leftIcon: SearchIcon };

export const PrimaryIconButton = Template.bind({});
PrimaryIconButton.args = {
  children: "Primary Icon Button",
  colorScheme: "primary",
  leftIcon: SearchIcon,
};

export const SuccessIconButton = Template.bind({});
SuccessIconButton.args = {
  children: "Success Icon Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
};

export const SuccessIconXLargeButton = Template.bind({});
SuccessIconXLargeButton.args = {
  children: "Success Icon XLarge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "xlarge",
};

export const SuccessIconHugeButton = Template.bind({});
SuccessIconHugeButton.args = {
  children: "Success Icon Huge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "huge",
};

export const SuccessIconMassiveButton = Template.bind({});
SuccessIconMassiveButton.args = {
  children: "Success Icon Massive Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "massive",
};

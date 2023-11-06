import DCompositeButton from "@/d-composite-button/DCompositeButton.vue";
import ThemeProvider from "@/providers/ThemeProvider.vue";
import HomeFilledIcon from "@/icons/filled/HomeFilledIcon.vue";

export default {
  components: { HomeFilledIcon },
  title: "Composite Button",
  component: DCompositeButton,
  tags: ["autodocs"],
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
    loaderType: {
      control: { type: "select" },
      options: ["text", "ring", "equalizer", "ringed-circle"],
      table: {
        defaultValue: "text",
      },
    },
  },
};

const Template = (args) => ({
  components: {
    DCompositeButton,
  },
  setup() {
    return { args };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    },
  },
  template: `<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />`,
});

const ThemeProviderTemplate = (args) => ({
  components: {
    DCompositeButton,
    ThemeProvider,
  },
  setup() {
    return { args };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    },
  },
  template: `
    <theme-provider :initial-theme="{primaryColor: '#800080'}" >
      <d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />
    </theme-provider>
  `,
});

const CustomIconTemplate = (args) => ({
  components: {
    DCompositeButton,
    HomeFilledIcon,
  },
  setup() {
    return { args };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    },
  },

  template: `<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick">
    <template #icon>
      <home-filled-icon smart-color="white" />
    </template>
  </d-composite-button>
  `,
});

export const CompositeBtn = Template.bind({});
CompositeBtn.args = {
  colorScheme: "success",
};

export const WithCustomTheme = ThemeProviderTemplate.bind({});
WithCustomTheme.args = {
  colorScheme: "primary",
};

export const WithCustomIcon = CustomIconTemplate.bind({});
WithCustomIcon.args = {
  colorScheme: "primary",
  smartColor: "#a10d3f",
};

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "danger",
};

export const Success = Template.bind({});
Success.args = {
  colorScheme: "success",
};

export const Outline = Template.bind({});
Outline.args = {
  colorScheme: "outline",
};

export const Small = Template.bind({});
Small.args = {
  colorScheme: "success",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  colorScheme: "success",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  colorScheme: "success",
  size: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  colorScheme: "success",
  size: "xlarge",
};

export const Huge = Template.bind({});
Huge.args = {
  colorScheme: "success",
  size: "huge",
};

export const Massive = Template.bind({});
Massive.args = {
  colorScheme: "success",
  size: "massive",
};

export const Disabled = Template.bind({});
Disabled.args = {
  colorScheme: "success",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  colorScheme: "success",
  loading: true,
};

// TODO: Figure out how to add menu dropdown that can be triggered by any of the buttons

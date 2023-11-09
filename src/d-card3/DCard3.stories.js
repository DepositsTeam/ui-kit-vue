import DCard3 from "./DCard3.vue";
import { DCol, DResponsiveLayout, DRow, DBox } from "@/main";

export default {
  title: "Card 3",
  component: DCard3,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subtitle: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
    topBgColor: {
      control: { type: "color" },
    },
    bottomBgColor: {
      control: { type: "color" },
    },
    imageBgColor: {
      control: { type: "color" },
    },
  },
};

const CardListTemplate = (args) => ({
  components: {
    DCard3,
    DCol,
    DRow,
    DResponsiveLayout,
    DBox,
  },
  setup() {
    return { args };
  },
  template: `
      <d-responsive-layout>
        <d-row>
          <d-col v-for="arg in args" :md="4">
            <d-card3 v-bind="arg"/>
          </d-col>
        </d-row>
      </d-responsive-layout>
    `,
});

export const LightModeCardList = CardListTemplate.bind([]);
LightModeCardList.args = [
  {
    title: "Statements",
    description: "Using the Banking kit.",
    image: "https://console.api.ondeposits.com/demo/statement-new.svg",
  },
  {
    title: "E-Commerce",
    subtitle: "Like Shopify",
    description: "Using the Commerce kit",
    image: "https://console.api.ondeposits.com/demo/money-new.svg",
  },
  {
    title: "Money",
    subtitle: "Like Chime",
    description: "Using the Money kit",
    image: "https://console.api.ondeposits.com/demo/e-commerce-new.svg",
  },
];

export const DarkModeCardList = CardListTemplate.bind([]);
DarkModeCardList.args = [
  {
    title: "Getting Started",
    description: "Everything you need to get started with Deposits.",
    image: "https://docs.deposits.dev/assets/svgs/home/services_dark.svg",
    topBgColor: "#57627a",
    bottomBgColor: "#1e293b",
    imageBgColor: "#1b344d",
  },
  {
    title: "API Reference",
    description: "Complete reference documentation for Deposits APIs.",
    image: "https://docs.deposits.dev/assets/svgs/home/api_reference_dark.svg",
    topBgColor: "#57627a",
    bottomBgColor: "#1e293b",
    imageBgColor: "#1b344d",
  },
  {
    title: "Recipes",
    description: "Quick guides to help you build fast.",
    image: "https://docs.deposits.dev/assets/svgs/home/recipes_dark.svg",
    topBgColor: "#57627a",
    bottomBgColor: "#1e293b",
    imageBgColor: "#1b344d",
  },
];

const Template = (args) => ({
  components: {
    DCard3,
  },
  setup() {
    return { args };
  },
  template: `
      <d-card3 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Money",
  subtitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
};

export const WithBackgroundColors = Template.bind({});
WithBackgroundColors.args = {
  title: "Money",
  subtitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
  topBgColor: "#0bb9e9",
  bottomBgColor: "#bdf3fc",
  imageBgColor: "#ffffff",
};

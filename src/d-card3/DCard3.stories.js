import DCard3 from "./DCard3.vue";
import { DCol, DResponsiveLayout, DRow, DBox } from "@/main";
import { ref } from "vue";

export default {
  title: "Card 3",
  component: DCard3,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subTitle: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
    topBackgroundColor: {
      control: { type: "text" },
    },
    bottomBackgroundColor: {
      control: { type: "text" },
    },
    imageBackgroundColor: {
      control: { type: "text" },
    },
  },
};

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
  subTitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
};

export const WithBackgroundColors = Template.bind({});
WithBackgroundColors.args = {
  title: "Money",
  subTitle: "Like Chime",
  description: "Using the Money kit",
  image: "https://console.api.ondeposits.com/demo/money-new.svg",
  topBackgroundColor: "#0bb9e9",
  bottomBackgroundColor: "#bdf3fc",
  imageBackgroundColor: "#ffffff",
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

export const CardList = CardListTemplate.bind([]);
CardList.args = [
  {
    title: "Recipes",
    description: "Quick guides to help you build fast.",
    image: "https://docs.deposits.dev/assets/svgs/home/recipes_dark.svg",
    topBackgroundColor: "#0bb9e9",
    bottomBackgroundColor: "#bdf3fc",
    imageBackgroundColor: "#1b344d",
  },
  {
    title: "E-Commerce",
    subTitle: "Like Shopify",
    description: "Using the Commerce kit",
    image: "https://console.api.ondeposits.com/demo/money-new.svg",
  },
  {
    title: "Money",
    subTitle: "Like Chime",
    description: "Using the Money kit",
    image: "https://console.api.ondeposits.com/demo/e-commerce-new.svg",
    topBackgroundColor: "#e85e75",
    bottomBackgroundColor: "#e8dbdd",
    imageBackgroundColor: "#ffffff",
  },
];

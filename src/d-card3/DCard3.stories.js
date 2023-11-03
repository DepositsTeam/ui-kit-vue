import DCard3 from "./DCard3.vue";
import { DCol, DResponsiveLayout, DRow } from "@/main";
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
    backgroundColor: {
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
  backgroundColor: "#0bb9e9",
};

const CardListTemplate = (args) => ({
  components: {
    DCard3,
    DCol,
    DRow,
    DResponsiveLayout,
  },
  setup() {
    const lists = ref(args);
  },
  template: `
      <d-responsive-layout>
        <d-row>
          <d-col v-for="arg in lists.value" :xs="3" :sm="12">
            <d-card3 v-bind="arg"/>
          </d-col>
        </d-row>
      </d-responsive-layout>
    `,
});

export const CardList = CardListTemplate.bind({});
Default.args = [
  {
    title: "Money",
    subTitle: "Like Chime",
    description: "Using the Money kit",
    image: "https://console.api.ondeposits.com/demo/money-new.svg",
    backgroundColor: "#0bb9e9",
  },
];

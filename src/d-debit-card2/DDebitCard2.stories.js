import DDebitCard2 from "./DDebitCard2.vue";
import { DarkModeProvider } from "../main";

export default {
  component: DDebitCard2,
  title: "Vertical Debit Card",
  argTypes: {
    brand: {
      control: { type: "select" },
      options: ["mastercard", "visa"],
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "grey"],
    },
    cardWidth: {
      control: { type: "text" },
    },
    firstName: {
      control: { type: "text" },
    },
    lastName: {
      control: { type: "text" },
    },
    cardNo: {
      control: { type: "text" },
    },
    rotate: {
      control: { type: "boolean" },
    },
    hoverFlip: {
      control: { type: "boolean" },
    },
    bottomLeftText: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DDebitCard2 },
  setup() {
    return { args };
  },
  template: `
    <d-debit-card2 v-bind="args" />
  `,
});

const DarkModeTemplate = (args) => ({
  components: { DDebitCard2, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 3em; background: #121A26;">
    <dark-mode-provider :dark-mode="true">
      <d-debit-card2 v-bind="args" />
    </dark-mode-provider>
    </div>
  `,
});

export const LightThemeMastercard = Template.bind({});
export const LightThemeMasterCardRotating = Template.bind({});
LightThemeMasterCardRotating.args = {
  rotate: true,
};
export const LightThemeVisa = Template.bind({});
LightThemeVisa.args = {
  brand: "visa",
};
export const LightThemeVisaRotating = Template.bind({});
LightThemeVisaRotating.args = {
  rotate: true,
  brand: "visa",
};
export const DarkThemeMastercard = Template.bind({});
DarkThemeMastercard.args = {
  theme: "dark",
};
export const DarkThemeMasterCardRotating = Template.bind({});
DarkThemeMasterCardRotating.args = {
  rotate: true,
  theme: "dark",
};
export const DarkThemeMasterCardHoverFlip = Template.bind({});
DarkThemeMasterCardHoverFlip.args = {
  hoverFlip: true,
  theme: "dark",
};
export const DarkThemeVisa = Template.bind({});
DarkThemeVisa.args = {
  theme: "dark",
  brand: "visa",
};
export const GreyThemeMastercard = Template.bind({});
GreyThemeMastercard.args = {
  theme: "grey",
};
export const GreyThemeVisa = Template.bind({});
GreyThemeVisa.args = {
  theme: "grey",
  brand: "visa",
};
export const LightThemeMastercardDarkMode = DarkModeTemplate.bind({});
export const LightThemeVisaDarkMode = DarkModeTemplate.bind({});
LightThemeVisaDarkMode.args = {
  brand: "visa",
};
export const DarkThemeMastercardDarkMode = DarkModeTemplate.bind({});
DarkThemeMastercardDarkMode.args = {
  theme: "dark",
};
export const DarkThemeVisaDarkMode = DarkModeTemplate.bind({});
DarkThemeVisaDarkMode.args = {
  theme: "dark",
  brand: "visa",
};
export const GreyThemeMastercardDarkMode = DarkModeTemplate.bind({});
GreyThemeMastercardDarkMode.args = {
  theme: "grey",
};
export const GreyThemeVisaDarkMode = DarkModeTemplate.bind({});
GreyThemeVisaDarkMode.args = {
  theme: "grey",
  brand: "visa",
};

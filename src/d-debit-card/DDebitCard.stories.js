import DDebitCard from "./DDebitCard.vue";
import { DarkModeProvider } from "../main";

export default {
  component: DDebitCard,
  title: "Debit Card",
  argTypes: {},
};

const Template = (args) => ({
  components: { DDebitCard },
  setup() {
    return { args };
  },
  template: `
    <d-debit-card v-bind="args" />
  `,
});

const DarkModeTemplate = (args) => ({
  components: { DDebitCard, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 3em; background: #121A26;">
    <dark-mode-provider :dark-mode="true">
      <d-debit-card v-bind="args" />
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

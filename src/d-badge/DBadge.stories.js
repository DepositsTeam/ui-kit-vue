import DBadge from "./DBadge.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Badge",
  component: DBadge,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["neutral", "green", "red", "yellow", "cyan", "blue"],
    },
    subtle: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "huge"],
    },
    customSize: {
      control: { type: "text" },
    },
    smartColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: {
    DBadge,
  },
  setup() {
    return { args };
  },
  template: `<d-badge v-bind="args"><span v-html="args.children"></span></d-badge>`,
});

const DarkModeTemplate = (args) => ({
  components: { DBadge, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-badge v-bind="args"><span v-html="args.children"></span></d-badge></dark-mode-provider>`,
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

export const SmallNeutral = Template.bind({});
SmallNeutral.args = {
  children: "Neutral",
};

export const DarkSmallNeutral = DarkModeTemplateFactory();
DarkSmallNeutral.args = {
  children: "Neutral",
};

export const SmallGreen = Template.bind({});
SmallGreen.args = {
  children: "Green",
  colorScheme: "green",
};

export const DarkSmallGreen = DarkModeTemplateFactory();
DarkSmallGreen.args = {
  children: "Green",
  colorScheme: "green",
};

export const SmallRed = Template.bind({});
SmallRed.args = {
  children: "Red",
  colorScheme: "red",
};

export const DarkSmallRed = DarkModeTemplateFactory();
DarkSmallRed.args = {
  children: "Red",
  colorScheme: "red",
};

export const SmallYellow = Template.bind({});
SmallYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
};

export const DarkSmallYellow = DarkModeTemplateFactory();
DarkSmallYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
};

export const SmallCyan = Template.bind({});
SmallCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
};

export const DarkSmallCyan = DarkModeTemplateFactory();
DarkSmallCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
};

export const SmallBlue = Template.bind({});
SmallBlue.args = {
  children: "Blue",
  colorScheme: "blue",
};

export const DarkSmallBlue = DarkModeTemplateFactory();
DarkSmallBlue.args = {
  children: "Blue",
  colorScheme: "blue",
};

export const MediumNeutral = Template.bind({});
MediumNeutral.args = {
  children: "Neutral",
  size: "medium",
};

export const DarkMediumNeutral = DarkModeTemplateFactory();
DarkMediumNeutral.args = {
  children: "Neutral",
  size: "medium",
};

export const MediumGreen = Template.bind({});
MediumGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "medium",
};

export const DarkMediumGreen = DarkModeTemplateFactory();
DarkMediumGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "medium",
};

export const MediumRed = Template.bind({});
MediumRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "medium",
};

export const DarkMediumRed = DarkModeTemplateFactory();
DarkMediumRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "medium",
};

export const MediumYellow = Template.bind({});
MediumYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "medium",
};

export const DarkMediumYellow = DarkModeTemplateFactory();
DarkMediumYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "medium",
};

export const MediumCyan = Template.bind({});
MediumCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "medium",
};

export const DarkMediumCyan = DarkModeTemplateFactory();
DarkMediumCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "medium",
};

export const MediumBlue = Template.bind({});
MediumBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const DarkMediumBlue = DarkModeTemplateFactory();
DarkMediumBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const LargeNeutral = Template.bind({});
LargeNeutral.args = {
  children: "Neutral",
  size: "large",
};

export const DarkLargeNeutral = DarkModeTemplateFactory();
DarkLargeNeutral.args = {
  children: "Neutral",
  size: "large",
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "large",
};

export const DarkLargeGreen = DarkModeTemplateFactory();
DarkLargeGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "large",
};

export const LargeRed = Template.bind({});
LargeRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "large",
};

export const DarkLargeRed = DarkModeTemplateFactory();
DarkLargeRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "large",
};

export const LargeYellow = Template.bind({});
LargeYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "large",
};

export const DarkLargeYellow = DarkModeTemplateFactory();
DarkLargeYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "large",
};

export const LargeCyan = Template.bind({});
LargeCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "large",
};

export const DarkLargeCyan = DarkModeTemplateFactory();
DarkLargeCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "large",
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const DarkLargeBlue = DarkModeTemplateFactory();
DarkLargeBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const SubtleSmallNeutral = Template.bind({});
SubtleSmallNeutral.args = {
  children: "Neutral",
  subtle: true,
};

export const DarkSubtleSmallNeutral = DarkModeTemplateFactory();
DarkSubtleSmallNeutral.args = {
  children: "Neutral",
  subtle: true,
};

export const SubtleSmallGreen = Template.bind({});
SubtleSmallGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
};

export const DarkSubtleSmallGreen = DarkModeTemplateFactory();
DarkSubtleSmallGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
};

export const SubtleSmallRed = Template.bind({});
SubtleSmallRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
};

export const DarkSubtleSmallRed = DarkModeTemplateFactory();
DarkSubtleSmallRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
};

export const SubtleSmallYellow = Template.bind({});
SubtleSmallYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
};

export const DarkSubtleSmallYellow = DarkModeTemplateFactory();
DarkSubtleSmallYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
};

export const SubtleSmallCyan = Template.bind({});
SubtleSmallCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
};

export const DarkSubtleSmallCyan = DarkModeTemplateFactory();
DarkSubtleSmallCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
};

export const SubtleSmallBlue = Template.bind({});
SubtleSmallBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
};

export const DarkSubtleSmallBlue = DarkModeTemplateFactory();
DarkSubtleSmallBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
};

export const SubtleMediumNeutral = Template.bind({});
SubtleMediumNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "medium",
};

export const SubtleMediumNeutralDark = DarkModeTemplateFactory();
SubtleMediumNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "medium",
};

export const SubtleMediumGreen = Template.bind({});
SubtleMediumGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "medium",
};

export const SubtleMediumGreenDark = DarkModeTemplateFactory();
SubtleMediumGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "medium",
};

export const SubtleMediumRed = Template.bind({});
SubtleMediumRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "medium",
};

export const SubtleMediumRedDark = DarkModeTemplateFactory();
SubtleMediumRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "medium",
};

export const SubtleMediumYellow = Template.bind({});
SubtleMediumYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "medium",
};

export const SubtleMediumYellowDark = DarkModeTemplateFactory();
SubtleMediumYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "medium",
};

export const SubtleMediumCyan = Template.bind({});
SubtleMediumCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "medium",
};

export const SubtleMediumCyanDark = DarkModeTemplateFactory();
SubtleMediumCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "medium",
};

export const SubtleMediumBlue = Template.bind({});
SubtleMediumBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const DarkSubtleMediumBlue = DarkModeTemplateFactory();
DarkSubtleMediumBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleLargeNeutral = Template.bind({});
SubtleLargeNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "large",
};

export const SubtleLargeNeutralDark = DarkModeTemplateFactory();
SubtleLargeNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "large",
};

export const SubtleLargeGreen = Template.bind({});
SubtleLargeGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "large",
};

export const SubtleLargeGreenDark = DarkModeTemplateFactory();
SubtleLargeGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "large",
};

export const SubtleLargeRed = Template.bind({});
SubtleLargeRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "large",
};

export const SubtleLargeRedDark = DarkModeTemplateFactory();
SubtleLargeRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "large",
};

export const SubtleLargeYellow = Template.bind({});
SubtleLargeYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "large",
};

export const SubtleLargeYellowDark = DarkModeTemplateFactory();
SubtleLargeYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "large",
};

export const SubtleLargeCyan = Template.bind({});
SubtleLargeCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "large",
};

export const SubtleLargeCyanDark = DarkModeTemplateFactory();
SubtleLargeCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "large",
};

export const SubtleLargeBlue = Template.bind({});
SubtleLargeBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleLargeBlueDark = DarkModeTemplateFactory();
SubtleLargeBlueDark.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleHugeNeutral = Template.bind({});
SubtleHugeNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "huge",
};

export const SubtleHugeNeutralDark = DarkModeTemplateFactory();
SubtleHugeNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "huge",
};

export const SubtleHugeGreen = Template.bind({});
SubtleHugeGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "huge",
};

export const SubtleHugeGreenDark = DarkModeTemplateFactory();
SubtleHugeGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "huge",
};

export const SubtleHugeRed = Template.bind({});
SubtleHugeRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "huge",
};

export const SubtleHugeRedDark = DarkModeTemplateFactory();
SubtleHugeRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "huge",
};

export const SubtleHugeYellow = Template.bind({});
SubtleHugeYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "huge",
};

export const SubtleHugeYellowDark = DarkModeTemplateFactory();
SubtleHugeYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "huge",
};

export const SubtleHugeCyan = Template.bind({});
SubtleHugeCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "huge",
};

export const SubtleHugeCyanDark = DarkModeTemplateFactory();
SubtleHugeCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "huge",
};

export const SubtleHugeBlue = Template.bind({});
SubtleHugeBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "huge",
};

export const SubtleHugeBlueDark = DarkModeTemplateFactory();
SubtleHugeBlueDark.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "huge",
};

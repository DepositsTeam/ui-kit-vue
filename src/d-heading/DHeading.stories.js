import DHeading from "./DHeading.vue";

export default {
  title: "Heading",
  component: DHeading,
  argTypes: {
    is: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    scale: {
      control: { type: "select" },
      options: ["subtitle-1", "subtitle-2", "subhead"],
    },
    uppercase: {
      control: { type: "boolean" },
    },
    equalLineHeight: {
      control: { type: "boolean" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
  },
};

const Template = (args) => ({
  components: { DHeading },
  setup() {
    return { args };
  },
  template: `<d-heading v-bind="args"><span>{{args.children}}</span></d-heading>`,
});

const CustomFontSizeTemplate = ({ fontSize, ...args }) => ({
  components: { DHeading },
  setup() {
    return { fontSize, args };
  },
  template: `<d-heading :font-size="fontSize" v-bind="args">{{args.children}}</d-heading>`,
});

const CustomFontWeightTemplate = ({ fontWeight, ...args }) => ({
  components: { DHeading },
  setup() {
    return { fontWeight, args };
  },
  template: `<d-heading :font-weight="fontWeight" v-bind="args">{{args.children}}</d-heading>`,
});

export const H1 = Template.bind({});
H1.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h1",
};
H1.storyName = "H1";

export const H2 = Template.bind({});
H2.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h2",
};
H2.storyName = "H2";

export const H3 = Template.bind({});
H3.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h3",
};
H3.storyName = "H3";

export const H4 = Template.bind({});
H4.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h4",
};
H4.storyName = "H4";

export const H5 = Template.bind({});
H5.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h5",
};
H5.storyName = "H5";

export const H6 = Template.bind({});
H6.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h6",
};
H6.storyName = "H6";

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "subtitle-1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "subtitle-2",
};

export const Subhead = Template.bind({});
Subhead.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "subhead",
};

export const CustomFontSize = CustomFontSizeTemplate.bind({});
CustomFontSize.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h1",
  fontSize: "8px",
};

export const CustomFontWeight = CustomFontWeightTemplate.bind({});
CustomFontWeight.args = {
  children: "The quick brown fox jumps over the lazy dog",
  scale: "h1",
  fontWeight: "800",
};

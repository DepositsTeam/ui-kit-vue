import DText from "./DText.vue";

export default {
  title: "Text",
  component: DText,
  argTypes: {
    is: {
      control: { type: "select" },
      options: ["p", "span", "small", "sub", "sup"],
    },
    scale: {
      control: { type: "select" },
      options: [
        "body",
        "subhead",
        "p-18",
        "overline",
        "footnote",
        "overline",
        "footnote-caps",
      ],
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
  components: { DText },
  setup() {
    return { args };
  },
  template: `<d-text v-bind="args"><span>{{args.children}}</span></d-text>`,
});

const CustomFontSizeTemplate = ({ fontSize, ...args }) => ({
  components: { DText },
  setup() {
    return { args, fontSize };
  },
  template: `<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>`,
});

const CustomFontWeightTemplate = ({ fontWeight, ...args }) => ({
  components: { DText },
  setup() {
    return { args, fontWeight };
  },
  template: `<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>`,
});

export const Body = Template.bind({});
Body.args = { children: "The quick brown fox jumps over the lazy dog." };

export const Paragraph18 = Template.bind({});
Paragraph18.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  scale: "p-18",
};

export const Footnote = Template.bind({});
Footnote.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  scale: "footnote",
};

export const Overline = Template.bind({});
Overline.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  scale: "overline",
};

export const FootnoteCaps = Template.bind({});
FootnoteCaps.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  scale: "footnote-caps",
};
FootnoteCaps.storyName = "Footnote All Caps";

export const CustomFontSize = CustomFontSizeTemplate.bind({});
CustomFontSize.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  fontSize: "88px",
};

export const CustomFontWeight = CustomFontWeightTemplate.bind({});
CustomFontWeight.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  fontWeight: "700",
  scale: "subhead",
};

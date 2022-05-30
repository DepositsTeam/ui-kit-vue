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
      control: {type: "select"},
      options: [
        "circularSTD",
        "heroNew"
      ]
    }
  },
};

const Template = (args) => ({
  components: { DText },
  setup() {
    return { args };
  },
  template: `<d-text v-bind="args"><span>{{args.children}}</span></d-text>`,
});

export const Body = Template.bind({});
Body.args = { children: "Body" };

export const Paragraph18 = Template.bind({});
Paragraph18.args = { children: "Paragraph18", scale: "p-18" };

export const Footnote = Template.bind({});
Footnote.args = { children: "Footnote", scale: "footnote" };

export const Overline = Template.bind({});
Overline.args = { children: "Overline", scale: "overline" };

export const FootnoteCaps = Template.bind({});
FootnoteCaps.args = { children: "Footnote All Caps", scale: "footnote-caps" };
FootnoteCaps.storyName = "Footnote All Caps";

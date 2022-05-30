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
      control: {type: "select"},
      options: [
        "circularSTD",
        "heroNew"
      ]
    }
  },
};

const Template = (args) => ({
  components: { DHeading },
  setup() {
    return { args };
  },
  template: `<d-heading v-bind="args"><span>{{args.children}}</span></d-heading>`,
});

export const H1 = Template.bind({});
H1.args = {
  children: "H1",
};

export const H2 = Template.bind({});
H2.args = {
  children: "H2",
};

export const H3 = Template.bind({});
H3.args = {
  children: "H3",
};

export const H4 = Template.bind({});
H4.args = {
  children: "H4",
};

export const H5 = Template.bind({});
H5.args = {
  children: "H5",
};

export const H6 = Template.bind({});
H6.args = {
  children: "H6",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "Subtitle1",
  scale: "subtitle-1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "Subtitle2",
  scale: "subtitle-2",
};

export const Subhead = Template.bind({});
Subhead.args = {
  children: "Subhead",
  scale: "subhead",
};

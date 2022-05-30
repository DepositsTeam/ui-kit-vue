import DWysiwyg from "./DWysiwyg.vue";

export default {
  title: "WYSIWYG Editor",
  component: DWysiwyg,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    labelClass: {
      control: { type: "text" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    labelFontFace: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DWysiwyg },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-wysiwyg v-bind="args" v-model="value"  />`,
});

export const Default = Template.bind({});

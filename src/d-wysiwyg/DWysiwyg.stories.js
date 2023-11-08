import DWysiwyg from "./DWysiwyg.vue";
import { DarkModeProvider } from "../main";

export default {
  components: DWysiwyg,
  title: "Forms/WYSIWYG Editor",
  tags: ["autodocs"],
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

const DarkModeTemplate = (args) => ({
  components: { DWysiwyg, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
    </dark-mode-provider>
    `,
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

export const Default = Template.bind({});

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "WYSIWYG Input area",
};

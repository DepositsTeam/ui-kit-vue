var l=Object.defineProperty;var t=(o,e)=>l(o,"name",{value:e,configurable:!0});import{j as s}from"./DAccordion-5e36a576.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-c285f804.js";const b={parameters:{storySource:{source:`import DText from "./DText.vue";

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
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`,
});

const CustomFontSizeTemplate = ({ fontSize, ...args }) => ({
  components: { DText },
  setup() {
    return { args, fontSize };
  },
  template: \`<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>\`,
});

const CustomFontWeightTemplate = ({ fontWeight, ...args }) => ({
  components: { DText },
  setup() {
    return { args, fontWeight };
  },
  template: \`<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>\`,
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
`,locationsMap:{body:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"paragraph-18":{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},footnote:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},overline:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"footnote-caps":{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"custom-font-size":{startLoc:{col:31,line:44},endLoc:{col:2,line:50},startBody:{col:31,line:44},endBody:{col:2,line:50}},"custom-font-weight":{startLoc:{col:33,line:52},endLoc:{col:2,line:58},startBody:{col:33,line:52},endBody:{col:2,line:58}}}}},title:"Text",component:s,argTypes:{is:{control:{type:"select"},options:["p","span","small","sub","sup"]},scale:{control:{type:"select"},options:["body","subhead","p-18","overline","footnote","overline","footnote-caps"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]}}},n=t(o=>({components:{DText:s},setup(){return{args:o}},template:'<d-text v-bind="args"><span>{{args.children}}</span></d-text>'}),"Template"),a=t(({fontSize:o,...e})=>({components:{DText:s},setup(){return{args:e,fontSize:o}},template:'<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>'}),"CustomFontSizeTemplate"),c=t(({fontWeight:o,...e})=>({components:{DText:s},setup(){return{args:e,fontWeight:o}},template:'<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>'}),"CustomFontWeightTemplate"),i=n.bind({});i.args={children:"The quick brown fox jumps over the lazy dog."};const p=n.bind({});p.args={children:"The quick brown fox jumps over the lazy dog.",scale:"p-18"};const d=n.bind({});d.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote"};const h=n.bind({});h.args={children:"The quick brown fox jumps over the lazy dog.",scale:"overline"};const r=n.bind({});r.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote-caps"};r.storyName="Footnote All Caps";const u=a.bind({});u.args={children:"The quick brown fox jumps over the lazy dog.",fontSize:"88px"};const g=c.bind({});g.args={children:"The quick brown fox jumps over the lazy dog.",fontWeight:"700",scale:"subhead"};const T=["Body","Paragraph18","Footnote","Overline","FootnoteCaps","CustomFontSize","CustomFontWeight"];export{i as Body,u as CustomFontSize,g as CustomFontWeight,d as Footnote,r as FootnoteCaps,h as Overline,p as Paragraph18,T as __namedExportsOrder,b as default};
//# sourceMappingURL=DText.stories-c89d0a94.js.map

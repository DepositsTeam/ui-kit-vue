var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{g as s}from"./DAccordion-1697359a.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-96c70789.js";const x={parameters:{storySource:{source:`import DText from "./DText.vue";

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
    underline: {
      control: { type: "boolean" },
    },
    noLine: {
      control: { type: "boolean" },
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
`,locationsMap:{body:{startLoc:{col:17,line:42},endLoc:{col:2,line:48},startBody:{col:17,line:42},endBody:{col:2,line:48}},"paragraph-18":{startLoc:{col:17,line:42},endLoc:{col:2,line:48},startBody:{col:17,line:42},endBody:{col:2,line:48}},footnote:{startLoc:{col:17,line:42},endLoc:{col:2,line:48},startBody:{col:17,line:42},endBody:{col:2,line:48}},overline:{startLoc:{col:17,line:42},endLoc:{col:2,line:48},startBody:{col:17,line:42},endBody:{col:2,line:48}},"footnote-caps":{startLoc:{col:17,line:42},endLoc:{col:2,line:48},startBody:{col:17,line:42},endBody:{col:2,line:48}},"custom-font-size":{startLoc:{col:31,line:50},endLoc:{col:2,line:56},startBody:{col:31,line:50},endBody:{col:2,line:56}},"custom-font-weight":{startLoc:{col:33,line:58},endLoc:{col:2,line:64},startBody:{col:33,line:58},endBody:{col:2,line:64}}}}},title:"Text",component:s,argTypes:{is:{control:{type:"select"},options:["p","span","small","sub","sup"]},scale:{control:{type:"select"},options:["body","subhead","p-18","overline","footnote","overline","footnote-caps"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},underline:{control:{type:"boolean"}},noLine:{control:{type:"boolean"}}}},e=t(o=>({components:{DText:s},setup(){return{args:o}},template:'<d-text v-bind="args"><span>{{args.children}}</span></d-text>'}),"Template"),a=t(({fontSize:o,...n})=>({components:{DText:s},setup(){return{args:n,fontSize:o}},template:'<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>'}),"CustomFontSizeTemplate"),c=t(({fontWeight:o,...n})=>({components:{DText:s},setup(){return{args:n,fontWeight:o}},template:'<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>'}),"CustomFontWeightTemplate"),i=e.bind({});i.args={children:"The quick brown fox jumps over the lazy dog."};const p=e.bind({});p.args={children:"The quick brown fox jumps over the lazy dog.",scale:"p-18"};const d=e.bind({});d.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote"};const h=e.bind({});h.args={children:"The quick brown fox jumps over the lazy dog.",scale:"overline"};const l=e.bind({});l.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote-caps"};l.storyName="Footnote All Caps";const u=a.bind({});u.args={children:"The quick brown fox jumps over the lazy dog.",fontSize:"88px"};const g=c.bind({});g.args={children:"The quick brown fox jumps over the lazy dog.",fontWeight:"700",scale:"subhead"};const T=["Body","Paragraph18","Footnote","Overline","FootnoteCaps","CustomFontSize","CustomFontWeight"];export{i as Body,u as CustomFontSize,g as CustomFontWeight,d as Footnote,l as FootnoteCaps,h as Overline,p as Paragraph18,T as __namedExportsOrder,x as default};
//# sourceMappingURL=DText.stories-a5e0d23e.js.map

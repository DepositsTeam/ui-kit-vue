var r=Object.defineProperty;var o=(n,e)=>r(n,"name",{value:e,configurable:!0});import{j as s}from"./DAccordion-6a7eaa92.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-decc4a29.js";const b={parameters:{storySource:{source:`import DText from "./DText.vue";

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

export const CustomFontSize = CustomFontSizeTemplate.bind({});
CustomFontSize.args = {
  children: "Customized font size",
  fontSize: "88px",
};

export const CustomFontWeight = CustomFontWeightTemplate.bind({});
CustomFontWeight.args = {
  children: "Customized font weight",
  fontWeight: "700",
  scale: "subhead",
};
`,locationsMap:{body:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"paragraph-18":{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},footnote:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},overline:{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"footnote-caps":{startLoc:{col:17,line:36},endLoc:{col:2,line:42},startBody:{col:17,line:36},endBody:{col:2,line:42}},"custom-font-size":{startLoc:{col:31,line:44},endLoc:{col:2,line:50},startBody:{col:31,line:44},endBody:{col:2,line:50}},"custom-font-weight":{startLoc:{col:33,line:52},endLoc:{col:2,line:58},startBody:{col:33,line:52},endBody:{col:2,line:58}}}}},title:"Text",component:s,argTypes:{is:{control:{type:"select"},options:["p","span","small","sub","sup"]},scale:{control:{type:"select"},options:["body","subhead","p-18","overline","footnote","overline","footnote-caps"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]}}},t=o(n=>({components:{DText:s},setup(){return{args:n}},template:'<d-text v-bind="args"><span>{{args.children}}</span></d-text>'}),"Template"),a=o(({fontSize:n,...e})=>({components:{DText:s},setup(){return{args:e,fontSize:n}},template:'<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>'}),"CustomFontSizeTemplate"),i=o(({fontWeight:n,...e})=>({components:{DText:s},setup(){return{args:e,fontWeight:n}},template:'<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>'}),"CustomFontWeightTemplate"),c=t.bind({});c.args={children:"Body"};const p=t.bind({});p.args={children:"Paragraph18",scale:"p-18"};const d=t.bind({});d.args={children:"Footnote",scale:"footnote"};const g=t.bind({});g.args={children:"Overline",scale:"overline"};const l=t.bind({});l.args={children:"Footnote All Caps",scale:"footnote-caps"};l.storyName="Footnote All Caps";const m=a.bind({});m.args={children:"Customized font size",fontSize:"88px"};const h=i.bind({});h.args={children:"Customized font weight",fontWeight:"700",scale:"subhead"};const F=["Body","Paragraph18","Footnote","Overline","FootnoteCaps","CustomFontSize","CustomFontWeight"];export{c as Body,m as CustomFontSize,h as CustomFontWeight,d as Footnote,l as FootnoteCaps,g as Overline,p as Paragraph18,F as __namedExportsOrder,b as default};
//# sourceMappingURL=DText.stories-58150096.js.map

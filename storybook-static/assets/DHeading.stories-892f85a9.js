var h=Object.defineProperty;var t=(n,o)=>h(n,"name",{value:o,configurable:!0});import{n as l}from"./DAccordion-747ca11f.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-03b5867e.js";const v={parameters:{storySource:{source:`import DHeading from "./DHeading.vue";

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
  template: \`<d-heading v-bind="args"><span>{{args.children}}</span></d-heading>\`,
});

const CustomFontSizeTemplate = ({ fontSize, ...args }) => ({
  components: { DHeading },
  setup() {
    return { fontSize, args };
  },
  template: \`<d-heading :font-size="fontSize" v-bind="args">{{args.children}}</d-heading>\`,
});

const CustomFontWeightTemplate = ({ fontWeight, ...args }) => ({
  components: { DHeading },
  setup() {
    return { fontWeight, args };
  },
  template: \`<d-heading :font-weight="fontWeight" v-bind="args">{{args.children}}</d-heading>\`,
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
`,locationsMap:{"h-1":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"h-2":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"h-3":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"h-4":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"h-5":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"h-6":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"subtitle-1":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"subtitle-2":{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},subhead:{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"custom-font-size":{startLoc:{col:31,line:36},endLoc:{col:2,line:42},startBody:{col:31,line:36},endBody:{col:2,line:42}},"custom-font-weight":{startLoc:{col:33,line:44},endLoc:{col:2,line:50},startBody:{col:33,line:44},endBody:{col:2,line:50}}}}},title:"Heading",component:l,argTypes:{is:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"]},scale:{control:{type:"select"},options:["subtitle-1","subtitle-2","subhead"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]}}},e=t(n=>({components:{DHeading:l},setup(){return{args:n}},template:'<d-heading v-bind="args"><span>{{args.children}}</span></d-heading>'}),"Template"),u=t(({fontSize:n,...o})=>({components:{DHeading:l},setup(){return{fontSize:n,args:o}},template:'<d-heading :font-size="fontSize" v-bind="args">{{args.children}}</d-heading>'}),"CustomFontSizeTemplate"),p=t(({fontWeight:n,...o})=>({components:{DHeading:l},setup(){return{fontWeight:n,args:o}},template:'<d-heading :font-weight="fontWeight" v-bind="args">{{args.children}}</d-heading>'}),"CustomFontWeightTemplate"),s=e.bind({});s.args={children:"The quick brown fox jumps over the lazy dog",scale:"h1"};s.storyName="H1";const i=e.bind({});i.args={children:"The quick brown fox jumps over the lazy dog",scale:"h2"};i.storyName="H2";const c=e.bind({});c.args={children:"The quick brown fox jumps over the lazy dog",scale:"h3"};c.storyName="H3";const r=e.bind({});r.args={children:"The quick brown fox jumps over the lazy dog",scale:"h4"};r.storyName="H4";const a=e.bind({});a.args={children:"The quick brown fox jumps over the lazy dog",scale:"h5"};a.storyName="H5";const d=e.bind({});d.args={children:"The quick brown fox jumps over the lazy dog",scale:"h6"};d.storyName="H6";const g=e.bind({});g.args={children:"The quick brown fox jumps over the lazy dog",scale:"subtitle-1"};const m=e.bind({});m.args={children:"The quick brown fox jumps over the lazy dog",scale:"subtitle-2"};const b=e.bind({});b.args={children:"The quick brown fox jumps over the lazy dog",scale:"subhead"};const y=u.bind({});y.args={children:"The quick brown fox jumps over the lazy dog",scale:"h1",fontSize:"8px"};const H=p.bind({});H.args={children:"The quick brown fox jumps over the lazy dog",scale:"h1",fontWeight:"800"};const S=["H1","H2","H3","H4","H5","H6","Subtitle1","Subtitle2","Subhead","CustomFontSize","CustomFontWeight"];export{y as CustomFontSize,H as CustomFontWeight,s as H1,i as H2,c as H3,r as H4,a as H5,d as H6,b as Subhead,g as Subtitle1,m as Subtitle2,S as __namedExportsOrder,v as default};
//# sourceMappingURL=DHeading.stories-892f85a9.js.map

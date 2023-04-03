var i=Object.defineProperty;var t=(a,e)=>i(a,"name",{value:e,configurable:!0});import{X as r,_ as d}from"./DAccordion-ff829d56.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-0f2a274d.js";const F={parameters:{storySource:{source:`import DTagInput from "./DTagInput.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Tag Input",
  component: DTagInput,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    values: {
      control: { type: "object" },
      table: {
        defaultValue: ["Option 1", "Option 2", "Option 3"],
      },
    },
    tagDelimiterKey: {
      control: { type: "select" },
      options: ["enter", "comma", "space"],
      table: {
        defaultValue: "enter",
      },
    },
  },
};

const Template = (args) => ({
  components: { DTagInput },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"],
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    },
  },
  setup() {
    return { args };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DTagInput, DarkModeProvider },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"],
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    },
  },
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
    <d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />
    </dark-mode-provider>
    \`,
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

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeMassiveDark = DarkModeTemplateFactory();
SizeMassiveDark.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeHugeDark = DarkModeTemplateFactory();
SizeHugeDark.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeXLargeDark = DarkModeTemplateFactory();
SizeXLargeDark.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const SizeLargeDark = DarkModeTemplateFactory();
SizeLargeDark.args = {
  label: "Form Label",
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeMediumDark = DarkModeTemplateFactory();
SizeMediumDark.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  size: "small",
};

export const SizeSmallDark = DarkModeTemplateFactory();
SizeSmallDark.args = {
  label: "Form Label",
  size: "small",
};
`,locationsMap:{"size-massive":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-massive-dark":{startLoc:{col:31,line:102},endLoc:{col:56,line:102},startBody:{col:31,line:102},endBody:{col:56,line:102}},"size-huge":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-huge-dark":{startLoc:{col:28,line:114},endLoc:{col:53,line:114},startBody:{col:28,line:114},endBody:{col:53,line:114}},"size-x-large":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-x-large-dark":{startLoc:{col:30,line:126},endLoc:{col:55,line:126},startBody:{col:30,line:126},endBody:{col:55,line:126}},"size-large":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-large-dark":{startLoc:{col:29,line:138},endLoc:{col:54,line:138},startBody:{col:29,line:138},endBody:{col:54,line:138}},"size-medium":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-medium-dark":{startLoc:{col:30,line:150},endLoc:{col:55,line:150},startBody:{col:30,line:150},endBody:{col:55,line:150}},"size-small":{startLoc:{col:17,line:31},endLoc:{col:2,line:54},startBody:{col:17,line:31},endBody:{col:2,line:54}},"size-small-dark":{startLoc:{col:29,line:162},endLoc:{col:54,line:162},startBody:{col:29,line:162},endBody:{col:54,line:162}}}}},title:"Forms/Tag Input",component:r,argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},values:{control:{type:"object"},table:{defaultValue:["Option 1","Option 2","Option 3"]}},tagDelimiterKey:{control:{type:"select"},options:["enter","comma","space"],table:{defaultValue:"enter"}}}},o=t(a=>({components:{DTagInput:r},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,n){console.log(e,n)},onTagChanged:function(e,n){console.log(e,n)},onTagDeleted:function(e,n){console.log(e,n)},onTextChanged:function(e){console.log(e)}},setup(){return{args:a}},template:'<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />'}),"Template"),s=t(a=>({components:{DTagInput:r,DarkModeProvider:d},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,n){console.log(e,n)},onTagChanged:function(e,n){console.log(e,n)},onTagDeleted:function(e,n){console.log(e,n)},onTextChanged:function(e){console.log(e)}},setup(){return{args:a}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),l=t(()=>{const a=s.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),g=o.bind({});g.args={label:"Form Label",size:"massive"};const c=l();c.args={label:"Form Label",size:"massive"};const m=o.bind({});m.args={label:"Form Label",size:"huge"};const p=l();p.args={label:"Form Label",size:"huge"};const u=o.bind({});u.args={label:"Form Label",size:"xlarge"};const z=l();z.args={label:"Form Label",size:"xlarge"};const T=o.bind({});T.args={label:"Form Label",size:"large"};const b=l();b.args={label:"Form Label",size:"large"};const y=o.bind({});y.args={label:"Form Label",size:"medium"};const L=l();L.args={label:"Form Label",size:"medium"};const S=o.bind({});S.args={label:"Form Label",size:"small"};const D=l();D.args={label:"Form Label",size:"small"};const M=["SizeMassive","SizeMassiveDark","SizeHuge","SizeHugeDark","SizeXLarge","SizeXLargeDark","SizeLarge","SizeLargeDark","SizeMedium","SizeMediumDark","SizeSmall","SizeSmallDark"];export{m as SizeHuge,p as SizeHugeDark,T as SizeLarge,b as SizeLargeDark,g as SizeMassive,c as SizeMassiveDark,y as SizeMedium,L as SizeMediumDark,S as SizeSmall,D as SizeSmallDark,u as SizeXLarge,z as SizeXLargeDark,M as __namedExportsOrder,F as default};
//# sourceMappingURL=DTagInput.stories-ca374fd1.js.map

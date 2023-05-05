var r=Object.defineProperty;var o=(n,t)=>r(n,"name",{value:t,configurable:!0});import{F as l,j as a}from"./DAccordion-747ca11f.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-03b5867e.js";const f={parameters:{storySource:{source:`import DLoader from "./DLoader.vue";
import DText from "../d-text/DText.vue";

export default {
  title: "Loader",
  component: DLoader,
  argTypes: {
    fullPage: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loader: {
      control: { type: "select" },
      options: ["ring", "equalizer", "ringed-circle"],
    },
    smartColor: {
      control: { type: "color" },
    },
    translucent: {
      control: { type: "boolean" },
    },
    loaderSize: {
      control: { type: "string" },
      table: {
        defaultValue: "80px",
      },
    },
  },
};

const Template = (args) => ({
  components: {
    DLoader,
    DText,
  },
  setup() {
    return { args };
  },
  template: \`<d-loader v-bind="args"><d-text>I am some text that will show after loading</d-text></d-loader>\`,
});

export const Default = Template.bind({});
Default.args = {
  fullPage: false,
};

export const EqualizerLoader = Template.bind({});
EqualizerLoader.args = {
  loader: "equalizer",
};

export const RingedCircle = Template.bind({});
RingedCircle.args = {
  loader: "ringed-circle",
};

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};
`,locationsMap:{default:{startLoc:{col:17,line:33},endLoc:{col:2,line:42},startBody:{col:17,line:33},endBody:{col:2,line:42}},"equalizer-loader":{startLoc:{col:17,line:33},endLoc:{col:2,line:42},startBody:{col:17,line:33},endBody:{col:2,line:42}},"ringed-circle":{startLoc:{col:17,line:33},endLoc:{col:2,line:42},startBody:{col:17,line:33},endBody:{col:2,line:42}},"full-page":{startLoc:{col:17,line:33},endLoc:{col:2,line:42},startBody:{col:17,line:33},endBody:{col:2,line:42}}}}},title:"Loader",component:l,argTypes:{fullPage:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},loader:{control:{type:"select"},options:["ring","equalizer","ringed-circle"]},smartColor:{control:{type:"color"}},translucent:{control:{type:"boolean"}},loaderSize:{control:{type:"string"},table:{defaultValue:"80px"}}}},e=o(n=>({components:{DLoader:l,DText:a},setup(){return{args:n}},template:'<d-loader v-bind="args"><d-text>I am some text that will show after loading</d-text></d-loader>'}),"Template"),d=e.bind({});d.args={fullPage:!1};const i=e.bind({});i.args={loader:"equalizer"};const c=e.bind({});c.args={loader:"ringed-circle"};const s=e.bind({});s.args={fullPage:!0};const y=["Default","EqualizerLoader","RingedCircle","FullPage"];export{d as Default,i as EqualizerLoader,s as FullPage,c as RingedCircle,y as __namedExportsOrder,f as default};
//# sourceMappingURL=DLoader.stories-ac34dba8.js.map

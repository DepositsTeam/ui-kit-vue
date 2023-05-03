var n=Object.defineProperty;var i=(t,e)=>n(t,"name",{value:e,configurable:!0});import{$ as l}from"./DAccordion-8b25468e.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-e1a5a4b4.js";const d={parameters:{storySource:{source:`import DTooltip from "./DTooltip.vue";

export default {
  title: "Tooltip",
  component: { DTooltip },
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DTooltip,
  },
  setup() {
    return { args };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`,
});

export const HoverTooltip = Template.bind({});
HoverTooltip.args = {
  tooltip: "I am a test tooltip",
};

export const ClickTooltip = Template.bind({});
ClickTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: 5,
};

export const ClickTooltipWithoutTimeout = Template.bind({});
ClickTooltipWithoutTimeout.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: false,
};
`,locationsMap:{"hover-tooltip":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}},"click-tooltip":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}},"click-tooltip-without-timeout":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}}}}},title:"Tooltip",component:{DTooltip:l},argTypes:{}},o=i(t=>({components:{DTooltip:l},setup(){return{args:t}},template:'<d-tooltip v-bind="args">I am a test</d-tooltip>'}),"Template"),p=o.bind({});p.args={tooltip:"I am a test tooltip"};const c=o.bind({});c.args={tooltip:"I am a test tooltip",trigger:"click",timeout:5};const r=o.bind({});r.args={tooltip:"I am a test tooltip",trigger:"click",timeout:!1};const u=["HoverTooltip","ClickTooltip","ClickTooltipWithoutTimeout"];export{c as ClickTooltip,r as ClickTooltipWithoutTimeout,p as HoverTooltip,u as __namedExportsOrder,d as default};
//# sourceMappingURL=DTooltip.stories-804f66bd.js.map

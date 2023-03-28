var i=Object.defineProperty;var e=(n,r)=>i(n,"name",{value:r,configurable:!0});import{G as o,g as l}from"./DAccordion-efe34db7.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-6096d5f2.js";const x={parameters:{storySource:{source:`import DMenu from "./DMenu.vue";
import DButton from "../d-button/DButton.vue";

export default {
  title: "Menu (Context or Dropdown menu)",
  component: DMenu,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DMenu,
    DButton,
  },
  data: () => ({}),
  setup() {
    return { args };
  },
  template: \`<d-menu v-bind="args" >
  <d-button>...</d-button>
  </d-menu>\`,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
    },
    {
      text: "Create",
    },
  ],
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: ["Edit", "Delete", "Create"],
};

export const CustomOptionColor = Template.bind({});
CustomOptionColor.args = {
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
    },
    {
      text: "Create",
    },
  ],
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  trigger: "hover",
  options: [
    {
      text: "Edit",
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
    },
    {
      text: "Create",
    },
  ],
};
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"string-options":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"custom-option-color":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"hover-trigger":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}}}}},title:"Menu (Context or Dropdown menu)",component:o,argTypes:{}},t=e(n=>({components:{DMenu:o,DButton:l},data:()=>({}),setup(){return{args:n}},template:`<d-menu v-bind="args" >
  <d-button>...</d-button>
  </d-menu>`}),"Template"),s=t.bind({});s.args={options:[{text:"Edit"},{text:"Delete"},{text:"Create"}]};const a=t.bind({});a.args={options:["Edit","Delete","Create"]};const d=t.bind({});d.args={options:[{text:"Edit"},{text:"Delete",textColor:"#D62F4B"},{text:"Create"}]};const p=t.bind({});p.args={trigger:"hover",options:[{text:"Edit"},{text:"Delete",textColor:"#D62F4B"},{text:"Create"}]};const D=["Default","StringOptions","CustomOptionColor","HoverTrigger"];export{d as CustomOptionColor,s as Default,p as HoverTrigger,a as StringOptions,D as __namedExportsOrder,x as default};
//# sourceMappingURL=DMenu.stories-82d01776.js.map

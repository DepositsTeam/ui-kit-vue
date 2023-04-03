var i=Object.defineProperty;var e=(t,o)=>i(t,"name",{value:o,configurable:!0});import{G as r,g as l}from"./DAccordion-ff829d56.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-0f2a274d.js";const g={parameters:{storySource:{source:`import DMenu from "./DMenu.vue";
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
  methods: {
    consoleOption: function (option) {

    },
  },
  setup() {
    return { args };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
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
      onClick: (option) => alert("I clicked " + option.text),
    },
    {
      text: "Delete",
      textColor: "#D62F4B",
      onHover: (option) =>
        alert("I hovered an option with color " + option.textColor),
    },
    {
      text: "Create",
    },
  ],
};
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:27},startBody:{col:17,line:10},endBody:{col:2,line:27}},"string-options":{startLoc:{col:17,line:10},endLoc:{col:2,line:27},startBody:{col:17,line:10},endBody:{col:2,line:27}},"custom-option-color":{startLoc:{col:17,line:10},endLoc:{col:2,line:27},startBody:{col:17,line:10},endBody:{col:2,line:27}},"hover-trigger":{startLoc:{col:17,line:10},endLoc:{col:2,line:27},startBody:{col:17,line:10},endBody:{col:2,line:27}}}}},title:"Menu (Context or Dropdown menu)",component:r,argTypes:{}},n=e(t=>({components:{DMenu:r,DButton:l},data:()=>({}),methods:{consoleOption:function(o){}},setup(){return{args:t}},template:`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>`}),"Template"),s=n.bind({});s.args={options:[{text:"Edit"},{text:"Delete"},{text:"Create"}]};const p=n.bind({});p.args={options:["Edit","Delete","Create"]};const a=n.bind({});a.args={options:[{text:"Edit"},{text:"Delete",textColor:"#D62F4B"},{text:"Create"}]};const c=n.bind({});c.args={trigger:"hover",options:[{text:"Edit",onClick:t=>alert("I clicked "+t.text)},{text:"Delete",textColor:"#D62F4B",onHover:t=>alert("I hovered an option with color "+t.textColor)},{text:"Create"}]};const D=["Default","StringOptions","CustomOptionColor","HoverTrigger"];export{a as CustomOptionColor,s as Default,c as HoverTrigger,p as StringOptions,D as __namedExportsOrder,g as default};
//# sourceMappingURL=DMenu.stories-01c73506.js.map

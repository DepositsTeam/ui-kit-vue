var r=Object.defineProperty;var e=(t,o)=>r(t,"name",{value:o,configurable:!0});import{G as i,g as l}from"./DAccordion-89860e3e.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-3c407190.js";const D={parameters:{storySource:{source:`import DMenu from "./DMenu.vue";
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
    consoleOption: function (option) {},
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

export const DisabledOption = Template.bind({});
DisabledOption.args = {
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
      disabled: true,
    },
    {
      text: "Create",
      disabled: true,
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}},"string-options":{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}},"custom-option-color":{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}},"disabled-option":{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}},"hover-trigger":{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}}}}},title:"Menu (Context or Dropdown menu)",component:i,argTypes:{}},n=e(t=>({components:{DMenu:i,DButton:l},data:()=>({}),methods:{consoleOption:function(o){}},setup(){return{args:t}},template:`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>`}),"Template"),s=n.bind({});s.args={options:[{text:"Edit"},{text:"Delete"},{text:"Create"}]};const d=n.bind({});d.args={options:["Edit","Delete","Create"]};const a=n.bind({});a.args={options:[{text:"Edit"},{text:"Delete",textColor:"#D62F4B"},{text:"Create"}]};const p=n.bind({});p.args={options:[{text:"Edit",onClick:t=>alert("I clicked "+t.text)},{text:"Delete",textColor:"#D62F4B",onHover:t=>alert("I hovered an option with color "+t.textColor),disabled:!0},{text:"Create",disabled:!0}]};const c=n.bind({});c.args={trigger:"hover",options:[{text:"Edit",onClick:t=>alert("I clicked "+t.text)},{text:"Delete",textColor:"#D62F4B",onHover:t=>alert("I hovered an option with color "+t.textColor)},{text:"Create"}]};const C=["Default","StringOptions","CustomOptionColor","DisabledOption","HoverTrigger"];export{a as CustomOptionColor,s as Default,p as DisabledOption,c as HoverTrigger,d as StringOptions,C as __namedExportsOrder,D as default};
//# sourceMappingURL=DMenu.stories-1ca36455.js.map

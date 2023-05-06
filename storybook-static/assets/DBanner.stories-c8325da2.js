var l=Object.defineProperty;var t=(e,r)=>l(e,"name",{value:r,configurable:!0});import{f as i,b as c,g as s,c as a,_ as d}from"./DAccordion-94c4fcd2.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-2d75bc08.js";const P={parameters:{storySource:{source:`import DBanner from "./DBanner.vue";
import { DarkModeProvider, DAutoLayout, DText, DBox } from "../main";

export default {
  title: "Banner",
  component: DBanner,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    colorScheme: {
      control: { type: "select" },
      options: ["default", "info", "warning", "error", "success"],
    },
    removable: {
      control: { type: "boolean" },
    },
    alignTop: {
      control: { type: "boolean" },
    },
    full: {
      control: { type: "boolean" },
      default: true,
    },
    smartColor: {
      control: { type: "color" },
    },
    iconColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: { DBanner },
  setup() {
    return { args };
  },
  template: \`<d-banner v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DBanner, DarkModeProvider },
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-banner v-bind="args" />
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

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
};

export const DarkSuccess = DarkModeTemplateFactory();
DarkSuccess.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
};

export const DarkError = DarkModeTemplateFactory();
DarkError.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
};

export const DarkWarning = DarkModeTemplateFactory();
DarkWarning.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
};

export const Info = Template.bind({});
Info.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
};

export const DarkInfo = DarkModeTemplateFactory();
DarkInfo.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
};

export const DefaultRemovable = Template.bind({});
DefaultRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true,
};

export const DarkDefaultRemovable = DarkModeTemplateFactory();
DarkDefaultRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true,
};

export const SuccessRemovable = Template.bind({});
SuccessRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true,
};

export const DarkSuccessRemovable = DarkModeTemplateFactory();
DarkSuccessRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true,
};

export const ErrorRemovable = Template.bind({});
ErrorRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true,
};

export const DarkErrorRemovable = DarkModeTemplateFactory();
DarkErrorRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true,
};

export const WarningRemovable = Template.bind({});
WarningRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true,
};

export const DarkWarningRemovable = DarkModeTemplateFactory();
DarkWarningRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true,
};

export const InfoRemovable = Template.bind({});
InfoRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true,
};

export const DarkInfoRemovable = DarkModeTemplateFactory();
DarkInfoRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true,
};

const CustomBannerTemplate = (args) => ({
  components: {
    DBanner,
    DAutoLayout,
    DText,
    DBox,
  },
  setup() {
    return { args };
  },
  template: \`
    <d-banner smart-color="#FFD49B" theme="filled">
    <d-auto-layout stretch-items alignment="center">
      <d-text center>
        You are on a 7 day free trial. Billing will begin in 7 days. To
        cancel,
        <d-box is="span" color="#995A06" no-line>click here</d-box>
      </d-text>
    </d-auto-layout>
    </d-banner>
  \`,
});

export const CustomBanner = CustomBannerTemplate.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-default":{startLoc:{col:27,line:75},endLoc:{col:52,line:75},startBody:{col:27,line:75},endBody:{col:52,line:75}},success:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-success":{startLoc:{col:27,line:90},endLoc:{col:52,line:90},startBody:{col:27,line:90},endBody:{col:52,line:90}},error:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-error":{startLoc:{col:25,line:106},endLoc:{col:50,line:106},startBody:{col:25,line:106},endBody:{col:50,line:106}},warning:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-warning":{startLoc:{col:27,line:122},endLoc:{col:52,line:122},startBody:{col:27,line:122},endBody:{col:52,line:122}},info:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-info":{startLoc:{col:24,line:138},endLoc:{col:49,line:138},startBody:{col:24,line:138},endBody:{col:49,line:138}},"default-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-default-removable":{startLoc:{col:36,line:154},endLoc:{col:61,line:154},startBody:{col:36,line:154},endBody:{col:61,line:154}},"success-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-success-removable":{startLoc:{col:36,line:171},endLoc:{col:61,line:171},startBody:{col:36,line:171},endBody:{col:61,line:171}},"error-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-error-removable":{startLoc:{col:34,line:189},endLoc:{col:59,line:189},startBody:{col:34,line:189},endBody:{col:59,line:189}},"warning-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-warning-removable":{startLoc:{col:36,line:207},endLoc:{col:61,line:207},startBody:{col:36,line:207},endBody:{col:61,line:207}},"info-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-info-removable":{startLoc:{col:33,line:225},endLoc:{col:58,line:225},startBody:{col:33,line:225},endBody:{col:58,line:225}},"custom-banner":{startLoc:{col:29,line:234},endLoc:{col:2,line:255},startBody:{col:29,line:234},endBody:{col:2,line:255}}}}},title:"Banner",component:i,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},colorScheme:{control:{type:"select"},options:["default","info","warning","error","success"]},removable:{control:{type:"boolean"}},alignTop:{control:{type:"boolean"}},full:{control:{type:"boolean"},default:!0},smartColor:{control:{type:"color"}},iconColor:{control:{type:"color"}}}},o=t(e=>({components:{DBanner:i},setup(){return{args:e}},template:'<d-banner v-bind="args" />'}),"Template"),m=t(e=>({components:{DBanner:i,DarkModeProvider:d},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-banner v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),n=t(()=>{const e=m.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),u=o.bind({});u.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const p=n();p.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const g=o.bind({});g.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const b=n();b.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const D=o.bind({});D.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const v=n();v.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const y=o.bind({});y.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const L=n();L.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const T=o.bind({});T.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const k=n();k.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const B=o.bind({});B.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const f=n();f.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const S=o.bind({});S.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const x=n();x.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const h=o.bind({});h.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const R=n();R.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const M=o.bind({});M.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const E=n();E.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const w=o.bind({});w.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const F=n();F.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const I=t(e=>({components:{DBanner:i,DAutoLayout:c,DText:s,DBox:a},setup(){return{args:e}},template:`
    <d-banner smart-color="#FFD49B" theme="filled">
    <d-auto-layout stretch-items alignment="center">
      <d-text center>
        You are on a 7 day free trial. Billing will begin in 7 days. To
        cancel,
        <d-box is="span" color="#995A06" no-line>click here</d-box>
      </d-text>
    </d-auto-layout>
    </d-banner>
  `}),"CustomBannerTemplate"),Y=I.bind({}),O=["Default","DarkDefault","Success","DarkSuccess","Error","DarkError","Warning","DarkWarning","Info","DarkInfo","DefaultRemovable","DarkDefaultRemovable","SuccessRemovable","DarkSuccessRemovable","ErrorRemovable","DarkErrorRemovable","WarningRemovable","DarkWarningRemovable","InfoRemovable","DarkInfoRemovable","CustomBanner"];export{Y as CustomBanner,p as DarkDefault,f as DarkDefaultRemovable,v as DarkError,R as DarkErrorRemovable,k as DarkInfo,F as DarkInfoRemovable,b as DarkSuccess,x as DarkSuccessRemovable,L as DarkWarning,E as DarkWarningRemovable,u as Default,B as DefaultRemovable,D as Error,h as ErrorRemovable,T as Info,w as InfoRemovable,g as Success,S as SuccessRemovable,y as Warning,M as WarningRemovable,O as __namedExportsOrder,P as default};
//# sourceMappingURL=DBanner.stories-c8325da2.js.map

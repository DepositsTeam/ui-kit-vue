var l=Object.defineProperty;var n=(t,r)=>l(t,"name",{value:r,configurable:!0});import{f as i,_ as c}from"./DAccordion-78a63ab7.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-699909b0.js";const F={parameters:{storySource:{source:`import DBanner from "./DBanner.vue";
import { DarkModeProvider } from "../main";

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
`,locationsMap:{default:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-default":{startLoc:{col:27,line:75},endLoc:{col:52,line:75},startBody:{col:27,line:75},endBody:{col:52,line:75}},success:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-success":{startLoc:{col:27,line:90},endLoc:{col:52,line:90},startBody:{col:27,line:90},endBody:{col:52,line:90}},error:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-error":{startLoc:{col:25,line:106},endLoc:{col:50,line:106},startBody:{col:25,line:106},endBody:{col:50,line:106}},warning:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-warning":{startLoc:{col:27,line:122},endLoc:{col:52,line:122},startBody:{col:27,line:122},endBody:{col:52,line:122}},info:{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-info":{startLoc:{col:24,line:138},endLoc:{col:49,line:138},startBody:{col:24,line:138},endBody:{col:49,line:138}},"default-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-default-removable":{startLoc:{col:36,line:154},endLoc:{col:61,line:154},startBody:{col:36,line:154},endBody:{col:61,line:154}},"success-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-success-removable":{startLoc:{col:36,line:171},endLoc:{col:61,line:171},startBody:{col:36,line:171},endBody:{col:61,line:171}},"error-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-error-removable":{startLoc:{col:34,line:189},endLoc:{col:59,line:189},startBody:{col:34,line:189},endBody:{col:59,line:189}},"warning-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-warning-removable":{startLoc:{col:36,line:207},endLoc:{col:61,line:207},startBody:{col:36,line:207},endBody:{col:61,line:207}},"info-removable":{startLoc:{col:17,line:37},endLoc:{col:2,line:43},startBody:{col:17,line:37},endBody:{col:2,line:43}},"dark-info-removable":{startLoc:{col:33,line:225},endLoc:{col:58,line:225},startBody:{col:33,line:225},endBody:{col:58,line:225}}}}},title:"Banner",component:i,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},colorScheme:{control:{type:"select"},options:["default","info","warning","error","success"]},removable:{control:{type:"boolean"}},alignTop:{control:{type:"boolean"}},full:{control:{type:"boolean"},default:!0},smartColor:{control:{type:"color"}},iconColor:{control:{type:"color"}}}},e=n(t=>({components:{DBanner:i},setup(){return{args:t}},template:'<d-banner v-bind="args" />'}),"Template"),s=n(t=>({components:{DBanner:i,DarkModeProvider:c},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-banner v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),o=n(()=>{const t=s.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},"DarkModeTemplateFactory"),d=e.bind({});d.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const a=o();a.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const m=e.bind({});m.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const u=o();u.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const p=e.bind({});p.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const g=o();g.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const b=e.bind({});b.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const v=o();v.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const D=e.bind({});D.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const L=o();L.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const k=e.bind({});k.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const y=o();y.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const T=e.bind({});T.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const f=o();f.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const B=e.bind({});B.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const S=o();S.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const R=e.bind({});R.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const h=o();h.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const x=e.bind({});x.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const M=o();M.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const _=["Default","DarkDefault","Success","DarkSuccess","Error","DarkError","Warning","DarkWarning","Info","DarkInfo","DefaultRemovable","DarkDefaultRemovable","SuccessRemovable","DarkSuccessRemovable","ErrorRemovable","DarkErrorRemovable","WarningRemovable","DarkWarningRemovable","InfoRemovable","DarkInfoRemovable"];export{a as DarkDefault,y as DarkDefaultRemovable,g as DarkError,S as DarkErrorRemovable,L as DarkInfo,M as DarkInfoRemovable,u as DarkSuccess,f as DarkSuccessRemovable,v as DarkWarning,h as DarkWarningRemovable,d as Default,k as DefaultRemovable,p as Error,B as ErrorRemovable,D as Info,x as InfoRemovable,m as Success,T as SuccessRemovable,b as Warning,R as WarningRemovable,_ as __namedExportsOrder,F as default};
//# sourceMappingURL=DBanner.stories-caf85784.js.map

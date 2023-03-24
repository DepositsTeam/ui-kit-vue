var d=Object.defineProperty;var n=(o,t)=>d(o,"name",{value:t,configurable:!0});import{Y as e,Z as r,_ as i,g as c}from"./DAccordion-4bc919d8.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-72b4e0f8.js";const W={parameters:{storySource:{source:`import DToast from "./DToast.vue";
import { DButton, ToastProvider, DarkModeProvider } from "../main";

export default {
  title: "Toast",
  component: DToast,
  argTypes: {
    autoClose: {
      control: { type: "text" },
    },
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-left", "bottom-right"],
    },
    onClose: {
      control: { type: "function" },
    },
  },
};

const Template = (args) => ({
  components: { DToast, DButton },
  inject: ["d__pushToast"],
  data: () => ({
    count: 1,
  }),
  setup() {
    return { args };
  },
  methods: {
    pushToast() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.d__pushToast(differentArgs);
      this.count += 1;
    },
  },
  template: \`
    <d-button @click="pushToast">Show Toast</d-button>
  \`,
});

const ToastWrapper = () => {
  const Bound = Template.bind({});
  Bound.decorators = [
    () => ({
      components: {
        ToastProvider,
      },
      template: \`<toast-provider><story /></toast-provider>\`,
    }),
  ];
  return Bound;
};

const DarkModeTemplate = (args) => ({
  components: { DToast, DButton, DarkModeProvider },
  inject: ["d__pushToast"],
  data: () => ({
    count: 1,
  }),
  setup() {
    return { args };
  },
  methods: {
    pushToast() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.d__pushToast(differentArgs);
      this.count += 1;
    },
  },
  template: \`
        <d-button @click="pushToast">Show Toast</d-button>    
  \`,
});

const DarkToastWrapper = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      components: {
        ToastProvider,
        DarkModeProvider,
      },
      template: \`
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        \`,
    }),
  ];
  return Bound;
};

export const Default = ToastWrapper();
Default.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
};

export const ToastWithDescription = ToastWrapper();
ToastWithDescription.args = {
  colorScheme: "error",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescription = ToastWrapper();
ToastWithOnlyDescription.args = {
  colorScheme: "success",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const DefaultDark = DarkToastWrapper();
DefaultDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
};

export const ToastWithDescriptionDark = DarkToastWrapper();
ToastWithDescriptionDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  autoClose: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescriptionDark = DarkToastWrapper();
ToastWithOnlyDescriptionDark.args = {
  colorScheme: "success",
  autoClose: 3,
  description: "I am a random one with a description",
};
`,locationsMap:{default:{startLoc:{col:23,line:98},endLoc:{col:37,line:98},startBody:{col:23,line:98},endBody:{col:37,line:98}},"toast-with-description":{startLoc:{col:36,line:105},endLoc:{col:50,line:105},startBody:{col:36,line:105},endBody:{col:50,line:105}},"toast-with-only-description":{startLoc:{col:40,line:113},endLoc:{col:54,line:113},startBody:{col:40,line:113},endBody:{col:54,line:113}},"default-dark":{startLoc:{col:27,line:120},endLoc:{col:45,line:120},startBody:{col:27,line:120},endBody:{col:45,line:120}},"toast-with-description-dark":{startLoc:{col:40,line:127},endLoc:{col:58,line:127},startBody:{col:40,line:127},endBody:{col:58,line:127}},"toast-with-only-description-dark":{startLoc:{col:44,line:135},endLoc:{col:62,line:135},startBody:{col:44,line:135},endBody:{col:62,line:135}}}}},title:"Toast",component:e,argTypes:{autoClose:{control:{type:"text"}},position:{control:{type:"select"},options:["top-right","top-left","bottom-left","bottom-right"]},onClose:{control:{type:"function"}}}},p=n(o=>({components:{DToast:e,DButton:c},inject:["d__pushToast"],data:()=>({count:1}),setup(){return{args:o}},methods:{pushToast(){const t={...o};t.message+=this.count,this.d__pushToast(t),this.count+=1}},template:`
    <d-button @click="pushToast">Show Toast</d-button>
  `}),"Template"),s=n(()=>{const o=p.bind({});return o.decorators=[()=>({components:{ToastProvider:r},template:"<toast-provider><story /></toast-provider>"})],o},"ToastWrapper"),l=n(o=>({components:{DToast:e,DButton:c,DarkModeProvider:i},inject:["d__pushToast"],data:()=>({count:1}),setup(){return{args:o}},methods:{pushToast(){const t={...o};t.message+=this.count,this.d__pushToast(t),this.count+=1}},template:`
        <d-button @click="pushToast">Show Toast</d-button>    
  `}),"DarkModeTemplate"),a=n(()=>{const o=l.bind({});return o.decorators=[()=>({components:{ToastProvider:r,DarkModeProvider:i},template:`
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        `})],o},"DarkToastWrapper"),m=s();m.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const u=s();u.args={colorScheme:"error",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const h=s();h.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const T=a();T.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const D=a();D.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const g=a();g.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const B=["Default","ToastWithDescription","ToastWithOnlyDescription","DefaultDark","ToastWithDescriptionDark","ToastWithOnlyDescriptionDark"];export{m as Default,T as DefaultDark,u as ToastWithDescription,D as ToastWithDescriptionDark,h as ToastWithOnlyDescription,g as ToastWithOnlyDescriptionDark,B as __namedExportsOrder,W as default};
//# sourceMappingURL=DToast.stories-cc3e2f07.js.map

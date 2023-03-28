var u=Object.defineProperty;var n=(o,t)=>u(o,"name",{value:t,configurable:!0});import{Z as s,$ as c,_ as d,g as l}from"./DAccordion-d6db220c.js";import{v as i}from"./vue.esm-bundler-f42bdcc2.js";import"./iframe-ccff4bf2.js";const m=n(()=>{const o=i("d__pushToast"),t=i("d__clearToasts");return{pushToast:n(p=>{if(o&&typeof o=="function")return o(p);throw Error("The `pushToast` function is not enabled. You probably omitted the ToastProvider.")},"pushToast"),clearToasts:n(()=>t(),"clearToasts")}},"useToast"),w={parameters:{storySource:{source:`import DToast from "./DToast.vue";
import { DButton, ToastProvider, DarkModeProvider, useToast } from "../main";

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
  inject: ["d__pushToast", "d__clearToasts"],
  data: () => ({
    count: 1,
  }),
  setup() {
    const { pushToast, clearToasts } = useToast();
    return { args, pushToast, clearToasts };
  },
  methods: {
    pushToastFunction() {
      const differentArgs = { ...args };
      differentArgs.message += this.count;
      this.pushToast(differentArgs);
      this.count += 1;
    },
    clearToastsFunction() {
      this.clearToasts();
    },
  },
  template: \`
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
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
`,locationsMap:{default:{startLoc:{col:23,line:103},endLoc:{col:37,line:103},startBody:{col:23,line:103},endBody:{col:37,line:103}},"toast-with-description":{startLoc:{col:36,line:110},endLoc:{col:50,line:110},startBody:{col:36,line:110},endBody:{col:50,line:110}},"toast-with-only-description":{startLoc:{col:40,line:118},endLoc:{col:54,line:118},startBody:{col:40,line:118},endBody:{col:54,line:118}},"default-dark":{startLoc:{col:27,line:125},endLoc:{col:45,line:125},startBody:{col:27,line:125},endBody:{col:45,line:125}},"toast-with-description-dark":{startLoc:{col:40,line:132},endLoc:{col:58,line:132},startBody:{col:40,line:132},endBody:{col:58,line:132}},"toast-with-only-description-dark":{startLoc:{col:44,line:140},endLoc:{col:62,line:140},startBody:{col:44,line:140},endBody:{col:62,line:140}}}}},title:"Toast",component:s,argTypes:{autoClose:{control:{type:"text"}},position:{control:{type:"select"},options:["top-right","top-left","bottom-left","bottom-right"]},onClose:{control:{type:"function"}}}},T=n(o=>({components:{DToast:s,DButton:l},inject:["d__pushToast","d__clearToasts"],data:()=>({count:1}),setup(){const{pushToast:t,clearToasts:r}=m();return{args:o,pushToast:t,clearToasts:r}},methods:{pushToastFunction(){const t={...o};t.message+=this.count,this.pushToast(t),this.count+=1},clearToastsFunction(){this.clearToasts()}},template:`
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
  `}),"Template"),e=n(()=>{const o=T.bind({});return o.decorators=[()=>({components:{ToastProvider:c},template:"<toast-provider><story /></toast-provider>"})],o},"ToastWrapper"),h=n(o=>({components:{DToast:s,DButton:l,DarkModeProvider:d},inject:["d__pushToast"],data:()=>({count:1}),setup(){return{args:o}},methods:{pushToast(){const t={...o};t.message+=this.count,this.d__pushToast(t),this.count+=1}},template:`
        <d-button @click="pushToast">Show Toast</d-button>    
  `}),"DarkModeTemplate"),a=n(()=>{const o=h.bind({});return o.decorators=[()=>({components:{ToastProvider:c,DarkModeProvider:d},template:`
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        `})],o},"DarkToastWrapper"),D=e();D.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const f=e();f.args={colorScheme:"error",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const g=e();g.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const k=a();k.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const y=a();y.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const v=a();v.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const S=["Default","ToastWithDescription","ToastWithOnlyDescription","DefaultDark","ToastWithDescriptionDark","ToastWithOnlyDescriptionDark"];export{D as Default,k as DefaultDark,f as ToastWithDescription,y as ToastWithDescriptionDark,g as ToastWithOnlyDescription,v as ToastWithOnlyDescriptionDark,S as __namedExportsOrder,w as default};
//# sourceMappingURL=DToast.stories-21927746.js.map

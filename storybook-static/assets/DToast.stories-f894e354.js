var l=Object.defineProperty;var n=(o,t)=>l(o,"name",{value:t,configurable:!0});import{Z as i,_ as c,g as d}from"./DAccordion-747ca11f.js";import{v as r}from"./vue.esm-bundler-da4a8dbf.js";import"./iframe-03b5867e.js";const u=n(()=>{const o=r("d__pushToast"),t=r("d__clearToasts");return{pushToast:n(p=>{if(o&&typeof o=="function")return o(p);throw Error("The `pushToast` function is not enabled. You probably omitted the ToastProvider.")},"pushToast"),clearToasts:n(()=>t(),"clearToasts")}},"useToast"),w={parameters:{storySource:{source:`import { DButton, ToastProvider, DarkModeProvider, useToast } from "../main";

export default {
  title: "Toast",
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
  components: { DButton },
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
  components: { DButton, DarkModeProvider },
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
  timeout: 3,
};

export const ToastWithDescriptionDark = DarkToastWrapper();
ToastWithDescriptionDark.args = {
  colorScheme: "info",
  message: "I am a tooltip no ",
  timeout: 3,
  description: "I am a random one with a description",
};

export const ToastWithOnlyDescriptionDark = DarkToastWrapper();
ToastWithOnlyDescriptionDark.args = {
  colorScheme: "success",
  timeout: 3,
  description: "I am a random one with a description",
};
`,locationsMap:{default:{startLoc:{col:23,line:101},endLoc:{col:37,line:101},startBody:{col:23,line:101},endBody:{col:37,line:101}},"toast-with-description":{startLoc:{col:36,line:108},endLoc:{col:50,line:108},startBody:{col:36,line:108},endBody:{col:50,line:108}},"toast-with-only-description":{startLoc:{col:40,line:116},endLoc:{col:54,line:116},startBody:{col:40,line:116},endBody:{col:54,line:116}},"default-dark":{startLoc:{col:27,line:123},endLoc:{col:45,line:123},startBody:{col:27,line:123},endBody:{col:45,line:123}},"toast-with-description-dark":{startLoc:{col:40,line:130},endLoc:{col:58,line:130},startBody:{col:40,line:130},endBody:{col:58,line:130}},"toast-with-only-description-dark":{startLoc:{col:44,line:138},endLoc:{col:62,line:138},startBody:{col:44,line:138},endBody:{col:62,line:138}}}}},title:"Toast",argTypes:{autoClose:{control:{type:"text"}},position:{control:{type:"select"},options:["top-right","top-left","bottom-left","bottom-right"]},onClose:{control:{type:"function"}}}},m=n(o=>({components:{DButton:d},inject:["d__pushToast","d__clearToasts"],data:()=>({count:1}),setup(){const{pushToast:t,clearToasts:a}=u();return{args:o,pushToast:t,clearToasts:a}},methods:{pushToastFunction(){const t={...o};t.message+=this.count,this.pushToast(t),this.count+=1},clearToastsFunction(){this.clearToasts()}},template:`
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
  `}),"Template"),e=n(()=>{const o=m.bind({});return o.decorators=[()=>({components:{ToastProvider:i},template:"<toast-provider><story /></toast-provider>"})],o},"ToastWrapper"),h=n(o=>({components:{DButton:d,DarkModeProvider:c},inject:["d__pushToast"],data:()=>({count:1}),setup(){return{args:o}},methods:{pushToast(){const t={...o};t.message+=this.count,this.d__pushToast(t),this.count+=1}},template:`
        <d-button @click="pushToast">Show Toast</d-button>    
  `}),"DarkModeTemplate"),s=n(()=>{const o=h.bind({});return o.decorators=[()=>({components:{ToastProvider:i,DarkModeProvider:c},template:`
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        `})],o},"DarkToastWrapper"),T=e();T.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const D=e();D.args={colorScheme:"error",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const f=e();f.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const g=s();g.args={colorScheme:"info",message:"I am a tooltip no ",timeout:3};const k=s();k.args={colorScheme:"info",message:"I am a tooltip no ",timeout:3,description:"I am a random one with a description"};const y=s();y.args={colorScheme:"success",timeout:3,description:"I am a random one with a description"};const S=["Default","ToastWithDescription","ToastWithOnlyDescription","DefaultDark","ToastWithDescriptionDark","ToastWithOnlyDescriptionDark"];export{T as Default,g as DefaultDark,D as ToastWithDescription,k as ToastWithDescriptionDark,f as ToastWithOnlyDescription,y as ToastWithOnlyDescriptionDark,S as __namedExportsOrder,w as default};
//# sourceMappingURL=DToast.stories-f894e354.js.map

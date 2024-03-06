import{T as x,_ as B,j as q,k as u}from"./DWysiwyg-7da6f1ce.js";import{d as l}from"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const E=()=>{const o=l("d__pushToast"),t=l("d__clearToasts");return{pushToast:Y=>{if(o&&typeof o=="function")return o(Y);throw Error("The `pushToast` function is not enabled. You probably omitted the ToastProvider.")},clearToasts:()=>t()}},R={title:"Toast",tags:["autodocs"],argTypes:{autoClose:{control:{type:"text"}},position:{control:{type:"select"},options:["top-right","top-left","bottom-left","bottom-right"]},onClose:{control:{type:"function"}}}},z=o=>({components:{DModal:q,DButton:u},setup(){const{pushToast:t,clearToasts:p}=E();return{args:o,pushToast:t,clearToasts:p}},methods:{pushToastFunction(){const t={...o};t.message+=this.count,this.pushToast(t),this.count+=1},clearToastsFunction(){this.clearToasts()}},mounted(){this.pushToastFunction()},template:`
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
    <d-modal :show="true"></d-modal>
  `}),G=o=>({components:{DButton:u},inject:["d__pushToast","d__clearToasts"],data:()=>({count:1}),setup(){const{pushToast:t,clearToasts:p}=E();return{args:o,pushToast:t,clearToasts:p}},methods:{pushToastFunction(){const t={...o};t.message+=this.count,this.pushToast(t),this.count+=1},clearToastsFunction(){this.clearToasts()}},template:`
    <d-button @click="pushToastFunction">Show Toast</d-button>
    <d-button @click="clearToastsFunction">Clear Toasts</d-button>
  `}),d=(o=G)=>{const t=o.bind({});return t.decorators=[()=>({components:{ToastProvider:x},template:"<toast-provider><story /></toast-provider>"})],t},H=o=>({components:{DButton:u,DarkModeProvider:B},inject:["d__pushToast"],data:()=>({count:1}),setup(){return{args:o}},methods:{pushToast(){const t={...o};t.message+=this.count,this.d__pushToast(t),this.count+=1}},template:`
        <d-button @click="pushToast">Show Toast</d-button>    
  `}),m=()=>{const o=H.bind({});return o.decorators=[()=>({components:{ToastProvider:x,DarkModeProvider:B},template:`
        <div style="padding: 3em; background: #121A26;">
          <dark-mode-provider :dark-mode="true">
            <toast-provider><story /></toast-provider>
          </dark-mode-provider>
        </div>
        `})],o},s=d();s.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const e=d();e.args={colorScheme:"error",message:"I am a tooltip no ",autoClose:3,description:"I am a random one with a description"};const a=d(z);a.args={colorScheme:"info",message:"I am a tooltip no ",autoClose:3};const r=d();r.args={colorScheme:"success",autoClose:3,description:"I am a random one with a description"};const c=m();c.args={colorScheme:"info",message:"I am a tooltip no ",timeout:3};const n=m();n.args={colorScheme:"info",message:"I am a tooltip no ",timeout:3,description:"I am a random one with a description"};const i=m();i.args={colorScheme:"success",timeout:3,description:"I am a random one with a description"};var T,h,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"ToastWrapper()",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var D,f,k;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:"ToastWrapper()",...(k=(f=e.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,_,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ToastWrapper(ModalTemplate)",...(S=(_=a.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var W,y,v;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:"ToastWrapper()",...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,C,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"DarkToastWrapper()",...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,M,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"DarkToastWrapper()",...(j=(M=n.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var O,A,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"DarkToastWrapper()",...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const U=["Default","ToastWithDescription","ModalToast","ToastWithOnlyDescription","DefaultDark","ToastWithDescriptionDark","ToastWithOnlyDescriptionDark"];export{s as Default,c as DefaultDark,a as ModalToast,e as ToastWithDescription,n as ToastWithDescriptionDark,r as ToastWithOnlyDescription,i as ToastWithOnlyDescriptionDark,U as __namedExportsOrder,R as default};
//# sourceMappingURL=DToast.stories-a015309c.js.map
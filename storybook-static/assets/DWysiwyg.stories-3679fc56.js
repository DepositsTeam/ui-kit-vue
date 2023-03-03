var T=Object.defineProperty;var c=(a,m)=>T(a,"name",{value:m,configurable:!0});import{Z as F,$ as L,a0 as M,a1 as O,a2 as B,a3 as S,a4 as K,a5 as H,a6 as I,a7 as V,a8 as E,a9 as U,aa as Y,ab as N,ac as j,ad as G,ae as P,af as R,ag as q,ah as z,ai as Z,aj as J,ak as Q,al as X,i as ee,am as g,_ as ne}from"./DAccordion-fce913b6.js";import{r as p,x as _,y as te,G as ae,U as se,z as oe,o as v,j as f,l as t,t as y,i as s,f as k,u as o,F as le,k as ie,b as i}from"./vue.esm-bundler-f42bdcc2.js";import"./iframe-96b0fe7c.js";const re={class:"ui-wysiwyg__wrapper"},ce={key:0},ue=["font-face"],de={id:"headings"},ve={key:0,id:"heading-options"},fe=["onClick"],A={__name:"KnockOffWyswig",props:{modelValue:{type:String,default:""},label:{type:String},labelClass:{type:[String,Array,Object]},fontFace:{type:String},labelFontFace:{type:String},placeholder:{type:String,default:"Type content here"}},emits:["update:modelValue"],setup(a,{emit:m}){const b=a,e=p(null),u=p(!1),d=p(!1);_(()=>{window.addEventListener("click",w)}),te(()=>{window.removeEventListener("click",w)});const x=c(()=>{d.value=!d.value},"toggleOptions"),w=c(r=>{d.value&&!r.target.closest("#headings")&&(d.value=!1)},"checkClicks");ae(()=>b.modelValue,r=>{e.value.getHTML()!==r&&e.value.commands.setContent(r,!1)}),_(()=>{e.value=new F({content:"",extensions:[L,M,O,B,S,K.configure({placeholder:b.placeholder}),H.configure({types:["heading","paragraph"]}),I.configure({levels:[1,2,3,4,5,6]})],onUpdate:()=>{m("update:modelValue",e.value.getHTML())},onFocus:()=>{u.value=!0},onBlur:()=>{u.value=!1}})}),se(()=>{e.value.destroy()});const D=[2,3,4,5,6],$=c(()=>{const r=window.prompt("Enter your image URL");r&&e.value.chain().focus().setImage({src:r}).run()},"addImage"),C=c(()=>{if(e.value.isActive("link"))e.value.chain().focus().unsetLink().run();else{const r=e.value.getAttributes("link").href,n=window.prompt("URL",r);if(n===null)return;if(n===""){e.value.chain().focus().extendMarkRange("link").unsetLink().run();return}e.value.chain().focus().extendMarkRange("link").setLink({href:n}).run()}},"toggleLink"),W=oe(()=>e.value.isActive("heading",{level:1})?"H1":e.value.isActive("heading",{level:2})?"H2":e.value.isActive("heading",{level:3})?"H3":e.value.isActive("heading",{level:4})?"H4":e.value.isActive("heading",{level:5})?"H5":e.value.isActive("heading",{level:6})?"H6":"H2");return(r,n)=>(v(),f("div",re,[a.label?(v(),f("label",ce,[t("p",{class:s(["ui-text-field__label",a.labelClass]),scale:"subhead","font-face":a.labelFontFace},y(a.label),11,ue)])):k("",!0),t("div",{class:s([{focused:u.value},"d-wysiwyg-semantic-container"])},[e.value?(v(),f("div",{key:0,class:s([{focused:u.value},"d-wysisyg-controls"])},[t("p",{onClick:n[0]||(n[0]=l=>e.value.commands.toggleHeading({level:1})),class:s({"is-active":e.value.isActive("heading",{level:1})})}," Title ",2),t("div",de,[t("div",{id:"headings-visible",onClick:x},y(o(W)),1),d.value?(v(),f("div",ve,[(v(),f(le,null,ie(D,(l,h)=>t("div",{key:`heading-${h}`,class:"heading-option",onClick:_e=>e.value.commands.toggleHeading({level:l})}," H"+y(l),9,fe)),64))])):k("",!0)]),t("button",{onClick:n[1]||(n[1]=l=>e.value.chain().focus().setTextAlign("left").run()),class:s({"is-active":e.value.isActive({textAlign:"left"})})},[i(o(V))],2),t("button",{onClick:n[2]||(n[2]=l=>e.value.chain().focus().setTextAlign("center").run()),class:s({"is-active":e.value.isActive({textAlign:"center"})})},[i(o(E))],2),t("button",{onClick:n[3]||(n[3]=l=>e.value.chain().focus().setTextAlign("right").run()),class:s({"is-active":e.value.isActive({textAlign:"right"})})},[i(o(U))],2),t("button",{onClick:n[4]||(n[4]=l=>e.value.chain().focus().setTextAlign("justify").run()),class:s({"is-active":e.value.isActive({textAlign:"justify"})})},[i(o(Y))],2),t("button",{onClick:n[5]||(n[5]=l=>e.value.chain().focus().toggleBold().run()),class:s({"is-active":e.value.isActive("bold")})},[i(o(N))],2),t("button",{onClick:n[6]||(n[6]=l=>e.value.chain().focus().toggleItalic().run()),class:s({"is-active":e.value.isActive("italic")})},[i(o(j))],2),t("button",{onClick:n[7]||(n[7]=l=>e.value.chain().focus().toggleUnderline().run()),class:s({"is-active":e.value.isActive("underline")})},[i(o(G))],2),t("button",{onClick:n[8]||(n[8]=l=>e.value.chain().focus().toggleBulletList().run()),class:s({"is-active":e.value.isActive("bulletList")})},[i(o(P))],2),t("button",{onClick:n[9]||(n[9]=l=>e.value.chain().focus().toggleBlockquote().run()),class:s({"is-active":e.value.isActive("blockquote")})},[i(o(R))],2),t("button",{onClick:n[10]||(n[10]=l=>e.value.chain().focus().toggleCode().run()),class:s({"is-active":e.value.isActive("code")})},[i(o(q))],2),t("button",{onClick:$},[i(o(z))]),t("button",{onClick:C,class:s({"is-active":e.value.isActive("link")})},[i(o(Z))],2),t("button",{onClick:n[11]||(n[11]=l=>e.value.chain().focus().undo().run())},[i(o(J))]),t("button",{onClick:n[12]||(n[12]=l=>e.value.chain().focus().redo().run())},[i(o(Q))])],2)):k("",!0),i(o(X),{class:s([{focused:u.value},"d-wysiwyg-editor"]),editor:e.value},null,8,["class","editor"])],2)]))}},ge=ee(A,[["__scopeId","data-v-bad631fe"]]);A.__docgenInfo={exportName:"default",displayName:"KnockOffWyswig",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",type:{name:"string"}},{name:"labelClass",type:{name:"string|array|object"}},{name:"fontFace",type:{name:"string"}},{name:"labelFontFace",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Type content here"'}}],events:[{name:"update:modelValue"}]};const Ce={parameters:{storySource:{source:`import DWysiwyg from "./DWysiwyg.vue";
import KnockOffWyswig from "./KnockOffWyswig.vue";
import { DarkModeProvider } from "../main";

export default {
  components: DWysiwyg,
  title: "Forms/WYSIWYG Editor",
  component: DWysiwyg,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    labelClass: {
      control: { type: "text" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    labelFontFace: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DWysiwyg },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<d-wysiwyg v-bind="args" v-model="value"  />\`,
});

const KnockOffTemplate = (args) => ({
  components: { KnockOffWyswig },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<knock-off-wyswig v-bind="args" v-model="value"  />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DWysiwyg, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
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

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "WYSIWYG Input area",
};

export const KnockOffWyswigMode = KnockOffTemplate.bind({});
KnockOffWyswigMode.args = {
  label: "Wsiwig",
};
`,locationsMap:{default:{startLoc:{col:17,line:26},endLoc:{col:2,line:35},startBody:{col:17,line:26},endBody:{col:2,line:35}},"dark-default":{startLoc:{col:27,line:76},endLoc:{col:52,line:76},startBody:{col:27,line:76},endBody:{col:52,line:76}},"knock-off-wyswig-mode":{startLoc:{col:25,line:37},endLoc:{col:2,line:46},startBody:{col:25,line:37},endBody:{col:2,line:46}}}}},components:g,title:"Forms/WYSIWYG Editor",component:g,argTypes:{label:{control:{type:"text"}},labelClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},labelFontFace:{control:{type:"text"}}}},me=c(a=>({components:{DWysiwyg:g},data:()=>({value:""}),setup(){return{args:a}},template:'<d-wysiwyg v-bind="args" v-model="value"  />'}),"Template"),pe=c(a=>({components:{KnockOffWyswig:ge},data:()=>({value:""}),setup(){return{args:a}},template:'<knock-off-wyswig v-bind="args" v-model="value"  />'}),"KnockOffTemplate"),ye=c(a=>({components:{DWysiwyg:g,DarkModeProvider:ne},data:()=>({value:""}),setup(){return{args:a}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),ke=c(()=>{const a=ye.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),We=me.bind({}),be=ke();be.args={label:"WYSIWYG Input area"};const we=pe.bind({});we.args={label:"Wsiwig"};const he=["Default","DarkDefault","KnockOffWyswigMode"];export{be as DarkDefault,We as Default,we as KnockOffWyswigMode,he as __namedExportsOrder,Ce as default};
//# sourceMappingURL=DWysiwyg.stories-3679fc56.js.map

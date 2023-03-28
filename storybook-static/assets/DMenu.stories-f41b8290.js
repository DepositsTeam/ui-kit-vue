var w=Object.defineProperty;var u=(t,e)=>w(t,"name",{value:e,configurable:!0});import{z as B,a as m,w as s,u as n,o as d,b as c,e as C,j as T,k as S,F as O,g as E,t as I}from"./vue.esm-bundler-f42bdcc2.js";import{G as f,i as N,c as i,j as L,g as V}from"./DAccordion-63ca2c4a.js";import"./iframe-d64ba1f7.js";class g{constructor(e,a="text"){if(typeof e=="string")this.text=e,this.uuid=f(30,8),this.originalOption=e;else{const l={...e},{leftIcon:o="",rightIcon:p="",href:r="",to:h="",textColor:y="",className:v="",onClick:b=void 0,onHover:M=void 0,...k}=e;this.leftIcon=o,this.rightIcon=p,this.text=k[a],this.href=r,this.to=h,this.textColor=y,this.className=v,this.onClick=b,this.onHover=M,this.uuid=f(30,8),this.originalOption=l}}}u(g,"MenuOption");const x={__name:"DMenu",props:{options:{type:Array},optionTitle:{type:String,default:"text"},trigger:{type:String,default:"click",validator:t=>["click","hover"].includes(t)}},emits:["option-clicked"],setup(t,{emit:e}){const a=t,l=B(()=>[...a.options].map(o=>new g(o,a.optionTitle)));return(o,p)=>(d(),m(n(i),{class:"d-context-menu-dropdown-wrapper"},{default:s(()=>[c(n(i),{ref:"targetRef",class:"d-context-menu-dropdown-target"},{default:s(()=>[C(o.$slots,"default",{},void 0,!0)]),_:3},512),c(n(i),{ref:"dropdownRef",class:"d-context-menu-dropdown"},{default:s(()=>[(d(!0),T(O,null,S(n(l),r=>(d(),m(n(i),{class:"d-context-menu-dropdown-option",key:r.uuid},{default:s(()=>[c(n(L),null,{default:s(()=>[E(I(r.text),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512)]),_:3}))}},_=N(x,[["__scopeId","data-v-7bfec2e3"]]);x.__docgenInfo={exportName:"default",displayName:"DMenu",description:"",tags:{},props:[{name:"options",type:{name:"array"}},{name:"optionTitle",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"trigger",type:{name:"string"},defaultValue:{func:!1,value:'"click"'},values:["click","hover"]}],events:[{name:"option-clicked"}],slots:[{name:"default"}]};const q={parameters:{storySource:{source:`import DMenu from "./DMenu.vue";
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
  <d-button>Dropdown Menu</d-button>
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"string-options":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}}}}},title:"Menu (Context or Dropdown menu)",component:_,argTypes:{}},D=u(t=>({components:{DMenu:_,DButton:V},data:()=>({}),setup(){return{args:t}},template:`<d-menu v-bind="args" >
  <d-button>Dropdown Menu</d-button>
  </d-menu>`}),"Template"),R=D.bind({});R.args={options:[{text:"Edit"},{text:"Delete"},{text:"Create"}]};const j=D.bind({});j.args={options:["Edit","Delete","Create"]};const z=["Default","StringOptions"];export{R as Default,j as StringOptions,z as __namedExportsOrder,q as default};
//# sourceMappingURL=DMenu.stories-f41b8290.js.map

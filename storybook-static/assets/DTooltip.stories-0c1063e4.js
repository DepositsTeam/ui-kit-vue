var D=Object.defineProperty;var i=(o,t)=>D(o,"name",{value:t,configurable:!0});import{r as a,x as I,y as L,a as B,w as u,u as n,o as M,b as d,e as O,g as R,t as S,i as N}from"./vue.esm-bundler-f42bdcc2.js";import{$ as E,a0 as H,a1 as V,a2 as W,a3 as j,c as r}from"./DAccordion-469baf55.js";import"./iframe-b2609c2a.js";const y={__name:"DTooltip",props:{tooltip:{type:String},trigger:{type:String,validator:o=>["click","hover"].includes(o),default:"hover"},timeout:{type:Number,default:3}},setup(o){const t=o,g=a(null),s=a(null),p=a(null),e=a(!0),c=i(()=>{E(g.value.$el,s.value.$el,{placement:"top",middleware:[H(6),V(),W({padding:5}),j({element:p.value.$el})]}).then(({x:l,y:v,placement:x,middlewareData:C})=>{Object.assign(s.value.$el.style,{left:`${l}px`,top:`${v}px`});const{x:T,y:k}=C.arrow,$={top:"bottom",right:"left",bottom:"top",left:"right"}[x.split("-")[0]];Object.assign(p.value.$el.style,{left:T!=null?`${T}px`:"",top:k!=null?`${k}px`:"",right:"",bottom:"",[$]:"-4px"})})},"updateTooltip"),f=i(l=>{!l.target.closest(".ui-tooltip-wrapper")&&t.trigger==="click"&&(e.value=!0)},"removeOnClickOutside"),h=i(l=>{l.target.closest(".ui-tooltip-wrapper")&&e.value&&t.trigger==="click"&&(e.value=!1,c(),t.timeout&&t.timeout>0&&setTimeout(()=>{e.value=!0},t.timeout*1e3))},"handleClick"),b=i(()=>{e.value&&t.trigger==="hover"&&(e.value=!1,c())},"handleMouseEnter"),w=i(()=>{!e.value&&t.trigger==="hover"&&(e.value=!0)},"handleMouseLeave");return I(()=>{c(),window.addEventListener("click",f)}),L(()=>{window.removeEventListener("click",f)}),(l,v)=>(M(),B(n(r),{class:"ui-tooltip-wrapper",onClick:h,onMouseenter:b,onMouseleave:w},{default:u(()=>[d(n(r),{ref_key:"targetRef",ref:g,class:"ui-tooltip-target"},{default:u(()=>[O(l.$slots,"default")]),_:3},512),d(n(r),{ref_key:"tooltipRef",ref:s,class:N(["ui-tooltip",{hidden:e.value}])},{default:u(()=>[R(S(o.tooltip)+" ",1),d(n(r),{class:"ui-tooltip__arrow",ref_key:"arrowRef",ref:p},null,512)]),_:1},8,["class"])]),_:3}))}},_=y;y.__docgenInfo={exportName:"default",displayName:"DTooltip",description:"",tags:{},props:[{name:"tooltip",type:{name:"string"}},{name:"trigger",type:{name:"string"},defaultValue:{func:!1,value:'"hover"'},values:["click","hover"]},{name:"timeout",type:{name:"number"},defaultValue:{func:!1,value:"3"}}],slots:[{name:"default"}]};const G={parameters:{storySource:{source:`import DTooltip from "./DTooltip.vue";

export default {
  title: "Tooltip",
  component: { DTooltip },
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DTooltip,
  },
  setup() {
    return { args };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`,
});

export const HoverTooltip = Template.bind({});
HoverTooltip.args = {
  tooltip: "I am a test tooltip",
};

export const ClickTooltip = Template.bind({});
ClickTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: 5,
};

export const ClickTooltipWithoutTimeout = Template.bind({});
ClickTooltipWithoutTimeout.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: false,
};
`,locationsMap:{"hover-tooltip":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}},"click-tooltip":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}},"click-tooltip-without-timeout":{startLoc:{col:17,line:9},endLoc:{col:2,line:17},startBody:{col:17,line:9},endBody:{col:2,line:17}}}}},title:"Tooltip",component:{DTooltip:_},argTypes:{}},m=i(o=>({components:{DTooltip:_},setup(){return{args:o}},template:'<d-tooltip v-bind="args">I am a test</d-tooltip>'}),"Template"),z=m.bind({});z.args={tooltip:"I am a test tooltip"};const U=m.bind({});U.args={tooltip:"I am a test tooltip",trigger:"click",timeout:5};const X=m.bind({});X.args={tooltip:"I am a test tooltip",trigger:"click",timeout:!1};const J=["HoverTooltip","ClickTooltip","ClickTooltipWithoutTimeout"];export{U as ClickTooltip,X as ClickTooltipWithoutTimeout,z as HoverTooltip,J as __namedExportsOrder,G as default};
//# sourceMappingURL=DTooltip.stories-0c1063e4.js.map

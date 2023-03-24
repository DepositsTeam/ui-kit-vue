var to=Object.defineProperty;var s=(e,l)=>to(e,"name",{value:l,configurable:!0});import{a as so,w as Co,i,u as m,o as n,j as a,F as io,k as mo,l as r,t}from"./vue.esm-bundler-f42bdcc2.js";import{i as yo,c as No,p as Bo}from"./DAccordion-4bc919d8.js";import"./iframe-72b4e0f8.js";const go={key:0},Fo={key:1},uo={class:"ui-color__container"},y={__name:"Color",props:{colorName:{type:String,default:"Cyan 100"},colorCode:{type:String,default:"#F2FAFC"},textColor:{type:String},colors:{type:Array}},setup(e){const l=s(C=>{const d=C.split(" ");return`${d[0].toLowerCase()}-${d[1]}`},"getProperColorName");return(C,d)=>(n(),so(m(No),{class:i(["ui-color",[`bg-${l(e.colorName)}`,`text-${e.textColor}`]])},{default:Co(()=>[e.colors&&e.colors.length?(n(),a("div",go,[(n(!0),a(io,null,mo(e.colors,(c,ao)=>(n(),a("div",{key:`ui-color__${ao}__${m(Bo)()}`,class:i(`ui-color__container bg-${l(c.colorName)} text-${c.textColor}`)},[r("p",null,t(c.colorName),1),r("p",null,t(c.colorCode),1)],2))),128))])):(n(),a("div",Fo,[r("div",uo,[r("p",null,t(e.colorName),1),r("p",null,t(e.colorCode),1)])]))]),_:1},8,["class"]))}},N=yo(y,[["__scopeId","data-v-d78ecfa1"]]);y.__docgenInfo={exportName:"default",displayName:"Color",description:"",tags:{},props:[{name:"colorName",type:{name:"string"},defaultValue:{func:!1,value:'"Cyan 100"'}},{name:"colorCode",type:{name:"string"},defaultValue:{func:!1,value:'"#F2FAFC"'}},{name:"textColor",type:{name:"string"}},{name:"colors",type:{name:"array"}}]};const wo={parameters:{storySource:{source:`import Color from "./Color.vue";

export default {
  title: "Color",
  component: Color,
  argTypes: {
    colorName: {
      control: { type: "text" },
    },
    colorCode: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "text" },
    },
    colors: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    Color,
  },
  setup() {
    return { args };
  },
  template: \`<color v-bind="args" />\`,
});

export const Cyan = Template.bind({});
Cyan.args = {
  colors: [
    {
      colorName: "Cyan 100",
      colorCode: "#F2FAFC",
    },
    {
      colorName: "Cyan 200",
      colorCode: "#BDF3FC",
    },
    {
      colorName: "Cyan 300",
      colorCode: "#75E2FA",
    },
    {
      colorName: "Cyan 400",
      colorCode: "#43D2FA",
    },
    {
      colorName: "Cyan 500",
      colorCode: "#0DB9E9",
    },
    {
      colorName: "Cyan 600",
      colorCode: "#0C9CCC",
    },
    {
      colorName: "Cyan 700",
      colorCode: "#0B87B0",
      textColor: "white",
    },
    {
      colorName: "Cyan 800",
      colorCode: "#085E7A",
      textColor: "white",
    },
    {
      colorName: "Cyan 900",
      colorCode: "#094357",
      textColor: "white",
    },
  ],
};

export const Green = Template.bind({});
Green.args = {
  colors: [
    {
      colorName: "Green 100",
      colorCode: "#EDFFF9",
    },
    {
      colorName: "Green 200",
      colorCode: "#C4EFDF",
    },
    {
      colorName: "Green 300",
      colorCode: "#9BDFC4",
    },
    {
      colorName: "Green 400",
      colorCode: "#71D0A7",
    },
    {
      colorName: "Green 500",
      colorCode: "#27C079",
    },
    {
      colorName: "Green 600",
      colorCode: "#00B058",
    },
    {
      colorName: "Green 700",
      colorCode: "#158957",
    },
    {
      colorName: "Green 800",
      colorCode: "#1F624A",
      textColor: "white",
    },
    {
      colorName: "Green 900",
      colorCode: "#1D3B32",
      textColor: "white",
    },
  ],
};

export const Orange = Template.bind({});
Orange.args = {
  colors: [
    {
      colorName: "Orange 100",
      colorCode: "#FFF8F0",
    },
    {
      colorName: "Orange 200",
      colorCode: "#FFF0DB",
    },
    {
      colorName: "Orange 300",
      colorCode: "#FFE5C2",
    },
    {
      colorName: "Orange 400",
      colorCode: "#FFD49B",
    },
    {
      colorName: "Orange 500",
      colorCode: "#FFB44F",
    },
    {
      colorName: "Orange 600",
      colorCode: "#FF9505",
    },
    {
      colorName: "Orange 700",
      colorCode: "#E08304",
    },
    {
      colorName: "Orange 800",
      colorCode: "#995A06",
      textColor: "white",
    },
    {
      colorName: "Orange 900",
      colorCode: "#573302",
      textColor: "white",
    },
  ],
};

export const Red = Template.bind({});
Red.args = {
  colors: [
    {
      colorName: "Red 100",
      colorCode: "#FFF0F2",
    },
    {
      colorName: "Red 200",
      colorCode: "#FCC5CE",
    },
    {
      colorName: "Red 300",
      colorCode: "#F99BAB",
    },
    {
      colorName: "Red 400",
      colorCode: "#E85E75",
    },
    {
      colorName: "Red 500",
      colorCode: "#D62F4B",
      textColor: "white",
    },
    {
      colorName: "Red 600",
      colorCode: "#AD283D",
      textColor: "white",
    },
    {
      colorName: "Red 700",
      colorCode: "#842432",
      textColor: "white",
    },
    {
      colorName: "Red 800",
      colorCode: "#5C1E27",
      textColor: "white",
    },
    {
      colorName: "Red 900",
      colorCode: "#331418",
      textColor: "white",
    },
  ],
};

export const Blue = Template.bind({});
Blue.args = {
  colors: [
    {
      colorName: "Blue 100",
      colorCode: "#F7FBFF",
    },
    {
      colorName: "Blue 200",
      colorCode: "#DDEFFF",
    },
    {
      colorName: "Blue 300",
      colorCode: "#ACD7FF",
    },
    {
      colorName: "Blue 400",
      colorCode: "#62B2FD",
    },
    {
      colorName: "Blue 500",
      colorCode: "#0D7FE9",
    },
    {
      colorName: "Blue 600",
      colorCode: "#0059AC",
      textColor: "white",
    },
    {
      colorName: "Blue 700",
      colorCode: "#003F79",
      textColor: "white",
    },
    {
      colorName: "Blue 800",
      colorCode: "#022A50",
      textColor: "white",
    },
    {
      colorName: "Blue 900",
      colorCode: "#051B30",
      textColor: "white",
    },
  ],
};

export const Cyan100 = Template.bind({});
Cyan100.args = {
  colorName: "Cyan 100",
  colorCode: "#F2FAFC",
};

Cyan100.storyName = "Cyan 100";

export const Cyan200 = Template.bind({});
Cyan200.args = {
  colorName: "Cyan 200",
  colorCode: "#BDF3FC",
};
Cyan200.storyName = "Cyan 200";

export const Cyan300 = Template.bind({});
Cyan300.args = {
  colorName: "Cyan 300",
  colorCode: "#75E2FA",
};
Cyan300.storyName = "Cyan 300";

export const Cyan400 = Template.bind({});
Cyan400.args = {
  colorName: "Cyan 400",
  colorCode: "#43D2FA",
};
Cyan400.storyName = "Cyan 400";

export const Cyan500 = Template.bind({});
Cyan500.args = {
  colorName: "Cyan 500",
  colorCode: "#0DB9E9",
};
Cyan500.storyName = "Cyan 500";

export const Cyan600 = Template.bind({});
Cyan600.args = {
  colorName: "Cyan 600",
  colorCode: "#0C9CCC",
};
Cyan600.storyName = "Cyan 600";

export const Cyan700 = Template.bind({});
Cyan700.args = {
  colorName: "Cyan 700",
  colorCode: "#0B87B0",
  textColor: "white",
};
Cyan700.storyName = "Cyan 700";

export const Cyan800 = Template.bind({});
Cyan800.args = {
  colorName: "Cyan 800",
  colorCode: "#085E7A",
  textColor: "white",
};
Cyan800.storyName = "Cyan 800";

export const Cyan900 = Template.bind({});
Cyan900.args = {
  colorName: "Cyan 900",
  colorCode: "#094357",
  textColor: "white",
};
Cyan900.storyName = "Cyan 900";

export const Green100 = Template.bind({});
Green100.args = {
  colorName: "Green 100",
  colorCode: "#EDFFF9",
};
Green100.storyName = "Green 100";

export const Green200 = Template.bind({});
Green200.args = {
  colorName: "Green 200",
  colorCode: "#C4EFDF",
};
Green200.storyName = "Green 200";

export const Green300 = Template.bind({});
Green300.args = {
  colorName: "Green 300",
  colorCode: "#9BDFC4",
};
Green300.storyName = "Green 300";

export const Green400 = Template.bind({});
Green400.args = {
  colorName: "Green 400",
  colorCode: "#71D0A7",
};
Green400.storyName = "Green 400";

export const Green500 = Template.bind({});
Green500.args = {
  colorName: "Green 500",
  colorCode: "#27C079",
};
Green500.storyName = "Green 500";

export const Green600 = Template.bind({});
Green600.args = {
  colorName: "Green 600",
  colorCode: "#00B058",
};
Green600.storyName = "Green 600";

export const Green700 = Template.bind({});
Green700.args = {
  colorName: "Green 700",
  colorCode: "#158957",
};
Green700.storyName = "Green 700";

export const Green800 = Template.bind({});
Green800.args = {
  colorName: "Green 800",
  colorCode: "#1F624A",
  textColor: "white",
};
Green800.storyName = "Green 800";

export const Green900 = Template.bind({});
Green900.args = {
  colorName: "Green 900",
  colorCode: "#1D3B32",
  textColor: "white",
};
Green900.storyName = "Green 900";

export const Orange100 = Template.bind({});
Orange100.args = {
  colorName: "Orange 100",
  colorCode: "#FFF8F0",
};

Orange100.storyName = "Orange 100";

export const Orange200 = Template.bind({});
Orange200.args = {
  colorName: "Orange 200",
  colorCode: "#FFF0DB",
};

Orange200.storyName = "Orange 200";

export const Orange300 = Template.bind({});
Orange300.args = {
  colorName: "Orange 300",
  colorCode: "#FFE5C2",
};

Orange300.storyName = "Orange 300";

export const Orange400 = Template.bind({});
Orange400.args = {
  colorName: "Orange 400",
  colorCode: "#FFD49B",
};

Orange400.storyName = "Orange 400";

export const Orange500 = Template.bind({});
Orange500.args = {
  colorName: "Orange 500",
  colorCode: "#FFB44F",
};

Orange500.storyName = "Orange 500";

export const Orange600 = Template.bind({});
Orange600.args = {
  colorName: "Orange 600",
  colorCode: "#FF9505",
};

Orange600.storyName = "Orange 600";

export const Orange700 = Template.bind({});
Orange700.args = {
  colorName: "Orange 700",
  colorCode: "#E08304",
};

Orange700.storyName = "Orange 700";

export const Orange800 = Template.bind({});
Orange800.args = {
  colorName: "Orange 800",
  colorCode: "#995A06",
  textColor: "white",
};

Orange800.storyName = "Orange 800";

export const Orange900 = Template.bind({});
Orange900.args = {
  colorName: "Orange 900",
  colorCode: "#573302",
  textColor: "white",
};

Orange900.storyName = "Orange 900";

export const Red100 = Template.bind({});
Red100.args = {
  colorName: "Red 100",
  colorCode: "#FFF0F2",
};

Red100.storyName = "Red 100";

export const Red200 = Template.bind({});
Red200.args = {
  colorName: "Red 200",
  colorCode: "#FCC5CE",
};

Red200.storyName = "Red 200";

export const Red300 = Template.bind({});
Red300.args = {
  colorName: "Red 300",
  colorCode: "#F99BAB",
};

Red300.storyName = "Red 300";

export const Red400 = Template.bind({});
Red400.args = {
  colorName: "Red 400",
  colorCode: "#E85E75",
};

Red400.storyName = "Red 400";

export const Red500 = Template.bind({});
Red500.args = {
  colorName: "Red 500",
  colorCode: "#D62F4B",
  textColor: "white",
};

Red500.storyName = "Red 500";

export const Red600 = Template.bind({});
Red600.args = {
  colorName: "Red 600",
  colorCode: "#AD283D",
  textColor: "white",
};

Red600.storyName = "Red 600";

export const Red700 = Template.bind({});
Red700.args = {
  colorName: "Red 700",
  colorCode: "#842432",
  textColor: "white",
};

Red700.storyName = "Red 700";

export const Red800 = Template.bind({});
Red800.args = {
  colorName: "Red 800",
  colorCode: "#5C1E27",
  textColor: "white",
};

Red800.storyName = "Red 800";

export const Red900 = Template.bind({});
Red900.args = {
  colorName: "Red 900",
  colorCode: "#331418",
  textColor: "white",
};

Red900.storyName = "Red 900";

export const Blue100 = Template.bind({});
Blue100.args = {
  colorName: "Blue 100",
  colorCode: "#F7FBFF",
};
Blue100.storyName = "Blue 100";

export const Blue200 = Template.bind({});
Blue200.args = {
  colorName: "Blue 200",
  colorCode: "#DDEFFF",
};
Blue200.storyName = "Blue 200";

export const Blue300 = Template.bind({});
Blue300.args = {
  colorName: "Blue 300",
  colorCode: "#ACD7FF",
};
Blue300.storyName = "Blue 300";

export const Blue400 = Template.bind({});
Blue400.args = {
  colorName: "Blue 400",
  colorCode: "#62B2FD",
};
Blue400.storyName = "Blue 400";

export const Blue500 = Template.bind({});
Blue500.args = {
  colorName: "Blue 500",
  colorCode: "#0D7FE9",
};
Blue500.storyName = "Blue 500";

export const Blue600 = Template.bind({});
Blue600.args = {
  colorName: "Blue 600",
  colorCode: "#0059AC",
  textColor: "white",
};
Blue600.storyName = "Blue 600";

export const Blue700 = Template.bind({});
Blue700.args = {
  colorName: "Blue 700",
  colorCode: "#003F79",
  textColor: "white",
};
Blue700.storyName = "Blue 700";

export const Blue800 = Template.bind({});
Blue800.args = {
  colorName: "Blue 800",
  colorCode: "#022A50",
  textColor: "white",
};
Blue800.storyName = "Blue 800";

export const Blue900 = Template.bind({});
Blue900.args = {
  colorName: "Blue 900",
  colorCode: "#051B30",
  textColor: "white",
};
Blue900.storyName = "Blue 900";
`,locationsMap:{cyan:{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},green:{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},orange:{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},red:{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},blue:{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-100":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-200":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-300":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-400":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-500":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-600":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-700":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-800":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"cyan-900":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-100":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-200":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-300":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-400":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-500":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-600":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-700":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-800":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"green-900":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-100":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-200":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-300":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-400":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-500":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-600":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-700":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-800":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"orange-900":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-100":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-200":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-300":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-400":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-500":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-600":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-700":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-800":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"red-900":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-100":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-200":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-300":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-400":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-500":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-600":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-700":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-800":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}},"blue-900":{startLoc:{col:17,line:22},endLoc:{col:2,line:30},startBody:{col:17,line:22},endBody:{col:2,line:30}}}}},title:"Color",component:N,argTypes:{colorName:{control:{type:"text"}},colorCode:{control:{type:"text"}},textColor:{control:{type:"text"}},colors:{control:{type:"object"}}}},o=s(e=>({components:{Color:N},setup(){return{args:e}},template:'<color v-bind="args" />'}),"Template"),po=o.bind({});po.args={colors:[{colorName:"Cyan 100",colorCode:"#F2FAFC"},{colorName:"Cyan 200",colorCode:"#BDF3FC"},{colorName:"Cyan 300",colorCode:"#75E2FA"},{colorName:"Cyan 400",colorCode:"#43D2FA"},{colorName:"Cyan 500",colorCode:"#0DB9E9"},{colorName:"Cyan 600",colorCode:"#0C9CCC"},{colorName:"Cyan 700",colorCode:"#0B87B0",textColor:"white"},{colorName:"Cyan 800",colorCode:"#085E7A",textColor:"white"},{colorName:"Cyan 900",colorCode:"#094357",textColor:"white"}]};const xo=o.bind({});xo.args={colors:[{colorName:"Green 100",colorCode:"#EDFFF9"},{colorName:"Green 200",colorCode:"#C4EFDF"},{colorName:"Green 300",colorCode:"#9BDFC4"},{colorName:"Green 400",colorCode:"#71D0A7"},{colorName:"Green 500",colorCode:"#27C079"},{colorName:"Green 600",colorCode:"#00B058"},{colorName:"Green 700",colorCode:"#158957"},{colorName:"Green 800",colorCode:"#1F624A",textColor:"white"},{colorName:"Green 900",colorCode:"#1D3B32",textColor:"white"}]};const bo=o.bind({});bo.args={colors:[{colorName:"Orange 100",colorCode:"#FFF8F0"},{colorName:"Orange 200",colorCode:"#FFF0DB"},{colorName:"Orange 300",colorCode:"#FFE5C2"},{colorName:"Orange 400",colorCode:"#FFD49B"},{colorName:"Orange 500",colorCode:"#FFB44F"},{colorName:"Orange 600",colorCode:"#FF9505"},{colorName:"Orange 700",colorCode:"#E08304"},{colorName:"Orange 800",colorCode:"#995A06",textColor:"white"},{colorName:"Orange 900",colorCode:"#573302",textColor:"white"}]};const Go=o.bind({});Go.args={colors:[{colorName:"Red 100",colorCode:"#FFF0F2"},{colorName:"Red 200",colorCode:"#FCC5CE"},{colorName:"Red 300",colorCode:"#F99BAB"},{colorName:"Red 400",colorCode:"#E85E75"},{colorName:"Red 500",colorCode:"#D62F4B",textColor:"white"},{colorName:"Red 600",colorCode:"#AD283D",textColor:"white"},{colorName:"Red 700",colorCode:"#842432",textColor:"white"},{colorName:"Red 800",colorCode:"#5C1E27",textColor:"white"},{colorName:"Red 900",colorCode:"#331418",textColor:"white"}]};const Oo=o.bind({});Oo.args={colors:[{colorName:"Blue 100",colorCode:"#F7FBFF"},{colorName:"Blue 200",colorCode:"#DDEFFF"},{colorName:"Blue 300",colorCode:"#ACD7FF"},{colorName:"Blue 400",colorCode:"#62B2FD"},{colorName:"Blue 500",colorCode:"#0D7FE9"},{colorName:"Blue 600",colorCode:"#0059AC",textColor:"white"},{colorName:"Blue 700",colorCode:"#003F79",textColor:"white"},{colorName:"Blue 800",colorCode:"#022A50",textColor:"white"},{colorName:"Blue 900",colorCode:"#051B30",textColor:"white"}]};const B=o.bind({});B.args={colorName:"Cyan 100",colorCode:"#F2FAFC"};B.storyName="Cyan 100";const g=o.bind({});g.args={colorName:"Cyan 200",colorCode:"#BDF3FC"};g.storyName="Cyan 200";const F=o.bind({});F.args={colorName:"Cyan 300",colorCode:"#75E2FA"};F.storyName="Cyan 300";const u=o.bind({});u.args={colorName:"Cyan 400",colorCode:"#43D2FA"};u.storyName="Cyan 400";const p=o.bind({});p.args={colorName:"Cyan 500",colorCode:"#0DB9E9"};p.storyName="Cyan 500";const x=o.bind({});x.args={colorName:"Cyan 600",colorCode:"#0C9CCC"};x.storyName="Cyan 600";const b=o.bind({});b.args={colorName:"Cyan 700",colorCode:"#0B87B0",textColor:"white"};b.storyName="Cyan 700";const G=o.bind({});G.args={colorName:"Cyan 800",colorCode:"#085E7A",textColor:"white"};G.storyName="Cyan 800";const O=o.bind({});O.args={colorName:"Cyan 900",colorCode:"#094357",textColor:"white"};O.storyName="Cyan 900";const R=o.bind({});R.args={colorName:"Green 100",colorCode:"#EDFFF9"};R.storyName="Green 100";const L=o.bind({});L.args={colorName:"Green 200",colorCode:"#C4EFDF"};L.storyName="Green 200";const D=o.bind({});D.args={colorName:"Green 300",colorCode:"#9BDFC4"};D.storyName="Green 300";const h=o.bind({});h.args={colorName:"Green 400",colorCode:"#71D0A7"};h.storyName="Green 400";const w=o.bind({});w.args={colorName:"Green 500",colorCode:"#27C079"};w.storyName="Green 500";const E=o.bind({});E.args={colorName:"Green 600",colorCode:"#00B058"};E.storyName="Green 600";const T=o.bind({});T.args={colorName:"Green 700",colorCode:"#158957"};T.storyName="Green 700";const A=o.bind({});A.args={colorName:"Green 800",colorCode:"#1F624A",textColor:"white"};A.storyName="Green 800";const _=o.bind({});_.args={colorName:"Green 900",colorCode:"#1D3B32",textColor:"white"};_.storyName="Green 900";const f=o.bind({});f.args={colorName:"Orange 100",colorCode:"#FFF8F0"};f.storyName="Orange 100";const v=o.bind({});v.args={colorName:"Orange 200",colorCode:"#FFF0DB"};v.storyName="Orange 200";const $=o.bind({});$.args={colorName:"Orange 300",colorCode:"#FFE5C2"};$.storyName="Orange 300";const k=o.bind({});k.args={colorName:"Orange 400",colorCode:"#FFD49B"};k.storyName="Orange 400";const S=o.bind({});S.args={colorName:"Orange 500",colorCode:"#FFB44F"};S.storyName="Orange 500";const j=o.bind({});j.args={colorName:"Orange 600",colorCode:"#FF9505"};j.storyName="Orange 600";const V=o.bind({});V.args={colorName:"Orange 700",colorCode:"#E08304"};V.storyName="Orange 700";const I=o.bind({});I.args={colorName:"Orange 800",colorCode:"#995A06",textColor:"white"};I.storyName="Orange 800";const z=o.bind({});z.args={colorName:"Orange 900",colorCode:"#573302",textColor:"white"};z.storyName="Orange 900";const M=o.bind({});M.args={colorName:"Red 100",colorCode:"#FFF0F2"};M.storyName="Red 100";const P=o.bind({});P.args={colorName:"Red 200",colorCode:"#FCC5CE"};P.storyName="Red 200";const q=o.bind({});q.args={colorName:"Red 300",colorCode:"#F99BAB"};q.storyName="Red 300";const H=o.bind({});H.args={colorName:"Red 400",colorCode:"#E85E75"};H.storyName="Red 400";const J=o.bind({});J.args={colorName:"Red 500",colorCode:"#D62F4B",textColor:"white"};J.storyName="Red 500";const K=o.bind({});K.args={colorName:"Red 600",colorCode:"#AD283D",textColor:"white"};K.storyName="Red 600";const Q=o.bind({});Q.args={colorName:"Red 700",colorCode:"#842432",textColor:"white"};Q.storyName="Red 700";const U=o.bind({});U.args={colorName:"Red 800",colorCode:"#5C1E27",textColor:"white"};U.storyName="Red 800";const W=o.bind({});W.args={colorName:"Red 900",colorCode:"#331418",textColor:"white"};W.storyName="Red 900";const X=o.bind({});X.args={colorName:"Blue 100",colorCode:"#F7FBFF"};X.storyName="Blue 100";const Y=o.bind({});Y.args={colorName:"Blue 200",colorCode:"#DDEFFF"};Y.storyName="Blue 200";const Z=o.bind({});Z.args={colorName:"Blue 300",colorCode:"#ACD7FF"};Z.storyName="Blue 300";const oo=o.bind({});oo.args={colorName:"Blue 400",colorCode:"#62B2FD"};oo.storyName="Blue 400";const eo=o.bind({});eo.args={colorName:"Blue 500",colorCode:"#0D7FE9"};eo.storyName="Blue 500";const no=o.bind({});no.args={colorName:"Blue 600",colorCode:"#0059AC",textColor:"white"};no.storyName="Blue 600";const ro=o.bind({});ro.args={colorName:"Blue 700",colorCode:"#003F79",textColor:"white"};ro.storyName="Blue 700";const lo=o.bind({});lo.args={colorName:"Blue 800",colorCode:"#022A50",textColor:"white"};lo.storyName="Blue 800";const co=o.bind({});co.args={colorName:"Blue 900",colorCode:"#051B30",textColor:"white"};co.storyName="Blue 900";const Eo=["Cyan","Green","Orange","Red","Blue","Cyan100","Cyan200","Cyan300","Cyan400","Cyan500","Cyan600","Cyan700","Cyan800","Cyan900","Green100","Green200","Green300","Green400","Green500","Green600","Green700","Green800","Green900","Orange100","Orange200","Orange300","Orange400","Orange500","Orange600","Orange700","Orange800","Orange900","Red100","Red200","Red300","Red400","Red500","Red600","Red700","Red800","Red900","Blue100","Blue200","Blue300","Blue400","Blue500","Blue600","Blue700","Blue800","Blue900"];export{Oo as Blue,X as Blue100,Y as Blue200,Z as Blue300,oo as Blue400,eo as Blue500,no as Blue600,ro as Blue700,lo as Blue800,co as Blue900,po as Cyan,B as Cyan100,g as Cyan200,F as Cyan300,u as Cyan400,p as Cyan500,x as Cyan600,b as Cyan700,G as Cyan800,O as Cyan900,xo as Green,R as Green100,L as Green200,D as Green300,h as Green400,w as Green500,E as Green600,T as Green700,A as Green800,_ as Green900,bo as Orange,f as Orange100,v as Orange200,$ as Orange300,k as Orange400,S as Orange500,j as Orange600,V as Orange700,I as Orange800,z as Orange900,Go as Red,M as Red100,P as Red200,q as Red300,H as Red400,J as Red500,K as Red600,Q as Red700,U as Red800,W as Red900,Eo as __namedExportsOrder,wo as default};
//# sourceMappingURL=Color.stories-fb8ca6e8.js.map

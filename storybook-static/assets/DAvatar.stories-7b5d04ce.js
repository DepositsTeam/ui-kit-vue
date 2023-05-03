var v=Object.defineProperty;var t=(n,S)=>v(n,"name",{value:S,configurable:!0});import{d as r,_ as h}from"./DAccordion-ba3c642d.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-8a3d2c77.js";const aa={parameters:{storySource:{source:`import DAvatar from "./DAvatar.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Avatar",
  component: DAvatar,
  argTypes: {
    subtle: {
      control: { type: "boolean" },
    },
    stacked: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    avatar: {
      control: { type: "object" },
    },
    avatars: {
      control: { type: "object" },
    },
    dropDown: {
      control: { type: "boolean" },
    },
    visibleAvatars: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => ({
  components: { DAvatar },
  setup() {
    return { args };
  },
  template: \`<d-avatar v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DAvatar, DarkModeProvider },
  setup() {
    return { args };
  },
  template: \`<dark-mode-provider :dark-mode="true"><d-avatar v-bind="args" /></dark-mode-provider>\`,
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

export const SmartColorAvatars = Template.bind({});
SmartColorAvatars.args = {
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#3f3f3f",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#000000",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#6b32a8",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#e00b64",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#efefef",
    },
  ],
};

export const SubtleLargeAvatars = Template.bind({});
SubtleLargeAvatars.args = {
  subtle: true,
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkLargeAvatars = DarkModeTemplateFactory();
SubtleDarkLargeAvatars.args = {
  subtle: true,
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleMediumAvatars = Template.bind({});
SubtleMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkMediumAvatars = DarkModeTemplateFactory();
SubtleDarkMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "grey",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleSmallAvatars = Template.bind({});
SubtleSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkSmallAvatars = DarkModeTemplateFactory();
SubtleDarkSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleCyan = Template.bind({});
SubtleCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};

export const SubtleDarkCyan = DarkModeTemplateFactory();
SubtleDarkCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};

export const SubtleGreen = Template.bind({});
SubtleGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleDarkGreen = DarkModeTemplateFactory();
SubtleDarkGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleOrange = Template.bind({});
SubtleOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleDarkOrange = DarkModeTemplateFactory();
SubtleDarkOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleRed = Template.bind({});
SubtleRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleDarkRed = DarkModeTemplateFactory();
SubtleDarkRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleGray = Template.bind({});
SubtleGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleDarkGray = DarkModeTemplateFactory();
SubtleDarkGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleBlue = Template.bind({});
SubtleBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const SubtleDarkBlue = DarkModeTemplateFactory();
SubtleDarkBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const Cyan = Template.bind({});
Cyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
Cyan.storyName = "Solid Cyan";

export const DarkCyan = DarkModeTemplateFactory();
DarkCyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
DarkCyan.storyName = "Solid Cyan Dark";

export const Green = Template.bind({});
Green.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
Green.storyName = "Solid Green";

export const DarkGreen = DarkModeTemplateFactory();
DarkGreen.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
DarkGreen.storyName = "Solid Green Dark";

export const Orange = Template.bind({});
Orange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
Orange.storyName = "Solid Orange";

export const DarkOrange = DarkModeTemplateFactory();
DarkOrange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
DarkOrange.storyName = "Solid Orange Dark";

export const Red = Template.bind({});
Red.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
Red.storyName = "Solid Red";

export const DarkRed = DarkModeTemplateFactory();
DarkRed.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
DarkRed.storyName = "Solid Red Dark";

export const Gray = Template.bind({});
Gray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
Gray.storyName = "Solid Gray";

export const DarkGray = DarkModeTemplateFactory();
DarkGray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
DarkGray.storyName = "Solid Gray Dark";

export const Blue = Template.bind({});
Blue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
Blue.storyName = "Solid Blue";

export const DarkBlue = DarkModeTemplateFactory();
DarkBlue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
DarkBlue.storyName = "Solid Blue Dark";

export const CyanStatusGreen = Template.bind({});
CyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const DarkCyanStatusGreen = DarkModeTemplateFactory();
DarkCyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const CyanStatusOrange = Template.bind({});
CyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange",
  },
};

export const DarkCyanStatusOrange = DarkModeTemplateFactory();
DarkCyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange",
  },
};

export const CyanStatusGray = Template.bind({});
CyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const DarkCyanStatusGray = DarkModeTemplateFactory();
DarkCyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const DarkImageAvatar = DarkModeTemplateFactory();
DarkImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const ImageAvatarStatus = Template.bind({});
ImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};

export const DarkImageAvatarStatus = DarkModeTemplateFactory();
DarkImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};
`,locationsMap:{"smart-color-avatars":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-large-avatars":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-large-avatars":{startLoc:{col:38,line:127},endLoc:{col:63,line:127},startBody:{col:38,line:127},endBody:{col:63,line:127}},"subtle-medium-avatars":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-medium-avatars":{startLoc:{col:39,line:200},endLoc:{col:64,line:200},startBody:{col:39,line:200},endBody:{col:64,line:200}},"subtle-small-avatars":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-small-avatars":{startLoc:{col:38,line:274},endLoc:{col:63,line:274},startBody:{col:38,line:274},endBody:{col:63,line:274}},"subtle-cyan":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-cyan":{startLoc:{col:30,line:320},endLoc:{col:55,line:320},startBody:{col:30,line:320},endBody:{col:55,line:320}},"subtle-green":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-green":{startLoc:{col:31,line:338},endLoc:{col:56,line:338},startBody:{col:31,line:338},endBody:{col:56,line:338}},"subtle-orange":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-orange":{startLoc:{col:32,line:356},endLoc:{col:57,line:356},startBody:{col:32,line:356},endBody:{col:57,line:356}},"subtle-red":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-red":{startLoc:{col:29,line:374},endLoc:{col:54,line:374},startBody:{col:29,line:374},endBody:{col:54,line:374}},"subtle-gray":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-gray":{startLoc:{col:30,line:392},endLoc:{col:55,line:392},startBody:{col:30,line:392},endBody:{col:55,line:392}},"subtle-blue":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"subtle-dark-blue":{startLoc:{col:30,line:410},endLoc:{col:55,line:410},startBody:{col:30,line:410},endBody:{col:55,line:410}},cyan:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-cyan":{startLoc:{col:24,line:428},endLoc:{col:49,line:428},startBody:{col:24,line:428},endBody:{col:49,line:428}},green:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-green":{startLoc:{col:25,line:446},endLoc:{col:50,line:446},startBody:{col:25,line:446},endBody:{col:50,line:446}},orange:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-orange":{startLoc:{col:26,line:464},endLoc:{col:51,line:464},startBody:{col:26,line:464},endBody:{col:51,line:464}},red:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-red":{startLoc:{col:23,line:482},endLoc:{col:48,line:482},startBody:{col:23,line:482},endBody:{col:48,line:482}},gray:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-gray":{startLoc:{col:24,line:500},endLoc:{col:49,line:500},startBody:{col:24,line:500},endBody:{col:49,line:500}},blue:{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-blue":{startLoc:{col:24,line:518},endLoc:{col:49,line:518},startBody:{col:24,line:518},endBody:{col:49,line:518}},"cyan-status-green":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-cyan-status-green":{startLoc:{col:35,line:536},endLoc:{col:60,line:536},startBody:{col:35,line:536},endBody:{col:60,line:536}},"cyan-status-orange":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-cyan-status-orange":{startLoc:{col:36,line:554},endLoc:{col:61,line:554},startBody:{col:36,line:554},endBody:{col:61,line:554}},"cyan-status-gray":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-cyan-status-gray":{startLoc:{col:34,line:572},endLoc:{col:59,line:572},startBody:{col:34,line:572},endBody:{col:59,line:572}},"image-avatar":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-image-avatar":{startLoc:{col:31,line:588},endLoc:{col:56,line:588},startBody:{col:31,line:588},endBody:{col:56,line:588}},"image-avatar-status":{startLoc:{col:17,line:33},endLoc:{col:2,line:39},startBody:{col:17,line:33},endBody:{col:2,line:39}},"dark-image-avatar-status":{startLoc:{col:37,line:603},endLoc:{col:62,line:603},startBody:{col:37,line:603},endBody:{col:62,line:603}}}}},title:"Avatar",component:r,argTypes:{subtle:{control:{type:"boolean"}},stacked:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large"]},avatar:{control:{type:"object"}},avatars:{control:{type:"object"}},dropDown:{control:{type:"boolean"}},visibleAvatars:{control:{type:"number"}}}},a=t(n=>({components:{DAvatar:r},setup(){return{args:n}},template:'<d-avatar v-bind="args" />'}),"Template"),B=t(n=>({components:{DAvatar:r,DarkModeProvider:h},setup(){return{args:n}},template:'<dark-mode-provider :dark-mode="true"><d-avatar v-bind="args" /></dark-mode-provider>'}),"DarkModeTemplate"),e=t(()=>{const n=B.bind({});return n.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],n},"DarkModeTemplateFactory"),k=a.bind({});k.args={avatars:[{status:"green",name:"Charles Babbage",smartColor:"#3f3f3f"},{status:"green",name:"Charles Babbage",smartColor:"#000000"},{status:"green",name:"Charles Babbage",smartColor:"#6b32a8"},{status:"green",name:"Charles Babbage",smartColor:"#e00b64"},{status:"green",name:"Charles Babbage",smartColor:"#efefef"}]};const C=a.bind({});C.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const D=e();D.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const L=a.bind({});L.args={subtle:!0,size:"medium",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const T=e();T.args={subtle:!0,size:"medium",avatars:[{status:"grey",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const G=a.bind({});G.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const A=e();A.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const x=a.bind({});x.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const R=e();R.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const U=a.bind({});U.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const M=e();M.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const O=a.bind({});O.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const N=e();N.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const F=a.bind({});F.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const f=e();f.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const I=a.bind({});I.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const z=e();z.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const J=a.bind({});J.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const K=e();K.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const s=a.bind({});s.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};s.storyName="Solid Cyan";const o=e();o.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};o.storyName="Solid Cyan Dark";const l=a.bind({});l.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};l.storyName="Solid Green";const c=e();c.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};c.storyName="Solid Green Dark";const m=a.bind({});m.args={avatar:{colorScheme:"orange",name:"John Doe"}};m.storyName="Solid Orange";const g=e();g.args={avatar:{colorScheme:"orange",name:"John Doe"}};g.storyName="Solid Orange Dark";const d=a.bind({});d.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};d.storyName="Solid Red";const i=e();i.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};i.storyName="Solid Red Dark";const u=a.bind({});u.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};u.storyName="Solid Gray";const b=e();b.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};b.storyName="Solid Gray Dark";const y=a.bind({});y.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};y.storyName="Solid Blue";const p=e();p.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};p.storyName="Solid Blue Dark";const Y=a.bind({});Y.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const _=e();_.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const j=a.bind({});j.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const P=e();P.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const w=a.bind({});w.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const E=e();E.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const q=a.bind({});q.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const H=e();H.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const Q=a.bind({});Q.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};const V=e();V.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};const ea=["SmartColorAvatars","SubtleLargeAvatars","SubtleDarkLargeAvatars","SubtleMediumAvatars","SubtleDarkMediumAvatars","SubtleSmallAvatars","SubtleDarkSmallAvatars","SubtleCyan","SubtleDarkCyan","SubtleGreen","SubtleDarkGreen","SubtleOrange","SubtleDarkOrange","SubtleRed","SubtleDarkRed","SubtleGray","SubtleDarkGray","SubtleBlue","SubtleDarkBlue","Cyan","DarkCyan","Green","DarkGreen","Orange","DarkOrange","Red","DarkRed","Gray","DarkGray","Blue","DarkBlue","CyanStatusGreen","DarkCyanStatusGreen","CyanStatusOrange","DarkCyanStatusOrange","CyanStatusGray","DarkCyanStatusGray","ImageAvatar","DarkImageAvatar","ImageAvatarStatus","DarkImageAvatarStatus"];export{y as Blue,s as Cyan,w as CyanStatusGray,Y as CyanStatusGreen,j as CyanStatusOrange,p as DarkBlue,o as DarkCyan,E as DarkCyanStatusGray,_ as DarkCyanStatusGreen,P as DarkCyanStatusOrange,b as DarkGray,c as DarkGreen,H as DarkImageAvatar,V as DarkImageAvatarStatus,g as DarkOrange,i as DarkRed,u as Gray,l as Green,q as ImageAvatar,Q as ImageAvatarStatus,m as Orange,d as Red,k as SmartColorAvatars,J as SubtleBlue,x as SubtleCyan,K as SubtleDarkBlue,R as SubtleDarkCyan,z as SubtleDarkGray,M as SubtleDarkGreen,D as SubtleDarkLargeAvatars,T as SubtleDarkMediumAvatars,N as SubtleDarkOrange,f as SubtleDarkRed,A as SubtleDarkSmallAvatars,I as SubtleGray,U as SubtleGreen,C as SubtleLargeAvatars,L as SubtleMediumAvatars,O as SubtleOrange,F as SubtleRed,G as SubtleSmallAvatars,ea as __namedExportsOrder,aa as default};
//# sourceMappingURL=DAvatar.stories-7b5d04ce.js.map

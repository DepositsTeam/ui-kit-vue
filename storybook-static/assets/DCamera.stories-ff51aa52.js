var te=Object.defineProperty;var s=(v,D)=>te(v,"name",{value:D,configurable:!0});import{i as H,c as x,g as ae,b as ne,j as re}from"./DAccordion-dc0cb5a1.js";import{o as T,a as N,w as y,b as _,u as F,V as oe,r as S,n as W,d as k,e as O,f as ie,g as U,t as se}from"./vue.esm-bundler-da4a8dbf.js";import{M as ce,a as le}from"./iframe-e26828aa.js";const J={__name:"CameraFrame",setup(v){return(D,i)=>(T(),N(F(x),{id:"camera_frame_wrapper"},{default:y(()=>[_(F(x),{id:"camera_frame"},{default:y(()=>[_(F(x),{id:"left_top_camera_frame"}),_(F(x),{id:"right_top_camera_frame"}),_(F(x),{id:"left_bottom_camera_frame"}),_(F(x),{id:"right_bottom_camera_frame"})]),_:1})]),_:1}))}},ue=H(J,[["__scopeId","data-v-c36c3b32"]]);J.__docgenInfo={exportName:"default",displayName:"CameraFrame",description:"",tags:{}};var z={},de={get exports(){return z},set exports(v){z=v}};const me=ce(oe);(function(v,D){(function(i,l){v.exports=l(me)})(le,function(i){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */function l(c,p,n,o){function r(e){return e instanceof n?e:new n(function(d){d(e)})}return s(r,"adopt"),new(n||(n=Promise))(function(e,d){function C(m){try{t(o.next(m))}catch(V){d(V)}}s(C,"fulfilled");function I(m){try{t(o.throw(m))}catch(V){d(V)}}s(I,"rejected");function t(m){m.done?e(m.value):r(m.value).then(C,I)}s(t,"step"),t((o=o.apply(c,p||[])).next())})}s(l,"__awaiter");function w(c,p){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,r,e,d;return d={next:C(0),throw:C(1),return:C(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function C(t){return function(m){return I([t,m])}}function I(t){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(e=t[0]&2?r.return:t[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,t[1])).done)return e;switch(r=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,r=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){n.label=t[1];break}if(t[0]===6&&n.label<e[1]){n.label=e[1],e=t;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(t);break}e[2]&&n.ops.pop(),n.trys.pop();continue}t=p.call(c,n)}catch(m){t=[6,m],r=0}finally{o=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}s(w,"__generator");var f=i.defineComponent({name:"Camera",components:{},emits:["loading","started","stopped","paused","resumed","camera-change","snapshot","error"],props:{resolution:{type:Object,default:function(){return{width:1920,height:1080}}},facingMode:{type:String,default:"environment"},autoplay:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!0},constraints:{type:Object,required:!1}},setup:function(c,p){var n=this,o=p.emit;i.onMounted(function(){if(!navigator.mediaDevices)throw new Error("Media devices not available");var a=document.getElementById("video");c.playsinline&&a&&a.setAttribute("playsinline",""),c.autoplay&&m()}),i.onUnmounted(function(){return A()});var r=i.ref(),e=i.ref(),d=i.ref(),C=c.constraints||{video:{width:c.resolution.width,height:c.resolution.height,facingMode:c.facingMode,deviceId:{}},audio:!1},I=s(function(a){return a===void 0&&(a=["audioinput","videoinput"]),l(n,void 0,void 0,function(){var u;return w(this,function(g){switch(g.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:return u=g.sent(),[2,u.filter(function(B){return a.includes(B.kind)})]}})})},"devices"),t=s(function(){if(d.value){var a=d.value.getVideoTracks().map(function(u){return u.getSettings().deviceId});if(a.length>0)return a[0]}},"currentDeviceID"),m=s(function(){return l(n,void 0,void 0,function(){var a,u;return w(this,function(g){switch(g.label){case 0:o("loading"),g.label=1;case 1:return g.trys.push([1,3,,4]),a=d,[4,navigator.mediaDevices.getUserMedia(C)];case 2:if(a.value=g.sent(),!r.value)throw new Error("Video ref is null");return r.value.srcObject=d.value,o("started"),[3,4];case 3:return u=g.sent(),o("error",u),[3,4];case 4:return[2]}})})},"start"),V=s(function(a,u,g){var B;if(a===void 0&&(a=c.resolution),u===void 0&&(u="image/png"),!r.value)throw new Error("Video ref is null");if(!e.value)throw new Error("Canvas ref is null");var G=a.width,P=a.height;return e.value.width=G,e.value.height=P,(B=e.value.getContext("2d"))===null||B===void 0||B.drawImage(r.value,0,0,G,P),new Promise(function(ee){var L;(L=e.value)===null||L===void 0||L.toBlob(function(R){o("snapshot",R),ee(R)},u,g)})},"snapshot"),X=s(function(a){return l(n,void 0,void 0,function(){return w(this,function(u){switch(u.label){case 0:return A(),C.video.deviceId.exact=a,[4,m()];case 1:return u.sent(),o("camera-change",a),[2]}})})},"changeCamera"),Y=s(function(){var a;(a=r.value)===null||a===void 0||a.play(),o("resumed")},"resume"),Z=s(function(){var a;(a=r.value)===null||a===void 0||a.pause(),o("paused")},"pause"),A=s(function(){var a;(a=d.value)===null||a===void 0||a.getTracks().forEach(function(u){return u.stop()}),o("stopped")},"stop");return{start:m,stop:A,video:r,snapshot:V,canvas:e,devices:I,currentDeviceID:t,pause:Z,resume:Y,changeCamera:X,stream:d}}});const h={id:"camera-container"},b={autoplay:"",ref:"video",id:"video"},M={id:"slot-container"},j={ref:"canvas",id:"canvas"};function E(c,p,n,o,r,e){return i.openBlock(),i.createElementBlock(i.Fragment,null,[i.createElementVNode("div",h,[i.createElementVNode("video",b,null,512),i.createElementVNode("div",M,[i.renderSlot(c.$slots,"default")])]),i.createElementVNode("canvas",j,null,512)],64)}s(E,"render");function $(c,p){p===void 0&&(p={});var n=p.insertAt;if(!(!c||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=c:r.appendChild(document.createTextNode(c))}}s($,"styleInject");var q=`
#camera-container[data-v-74104ed5] {
    position: relative;
    width: 100%;
    height: 100%;
}
#slot-container[data-v-74104ed5] {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
#video[data-v-74104ed5] {
    width: 100%;
    height: 100%;
}
#canvas[data-v-74104ed5] {
    display: none;
}
`;return $(q),f.render=E,f.__scopeId="data-v-74104ed5",f.__file="src/components/Camera.vue",f})})(de);const fe=z;const K={name:"CameraWrapper",emits:["snapped"],components:{DBox:x,DButton:ae,DAutoLayout:ne,DText:re,CameraFrame:ue,VCamera:fe},props:{caption:{type:String},showFocusFrame:{type:Boolean}},setup(v,{emit:D}){const i=S(null),l=S(0),w=S(null),f=S(null),h=S(!1),b=S(!1);return{currentSnapshot:w,retakePicture:s(async()=>{w.value=null},"retakePicture"),snapshot:s(async()=>{const c=await i.value.snapshot({width:1920,height:1080});w.value=URL.createObjectURL(c),D("snapped",{image:w.value,blob:c,file:new File([c],"name")})},"snapshot"),startCameraFeed:s(()=>b.value=!0,"startCameraFeed"),stopCameraFeed:s(()=>b.value=!1,"stopCameraFeed"),switchCamera:s(async()=>{var p,n;f.value=await((p=i.value)==null?void 0:p.devices(["videoinput"]));const c=await i.value.currentDeviceID();if(!h.value&&c!==f.value[0].deviceId){await i.value.changeCamera(f.value[0].deviceId),h.value=!0;return}if(await W(),f.value&&f.value.length>=2){let o=l.value+1;o>f.value.length-1&&(o=0),l.value=o,await W();const r=f.value[l.value];(n=i.value)==null||n.changeCamera(r.deviceId)}h.value=!0},"switchCamera"),camera:i,currentCamera:l,devices:f,mounted:h,cameraFeedShowing:b}}};function ve(v,D,i,l,w,f){const h=k("d-box"),b=k("camera-frame"),M=k("v-camera"),j=k("d-text"),E=k("d-button"),$=k("d-auto-layout");return T(),N(h,null,{default:y(()=>[l.currentSnapshot?(T(),N(h,{key:0},{default:y(()=>[_(h,{is:"img",width:"100%",height:"auto",src:l.currentSnapshot,alt:"Current Snapshot"},null,8,["src"]),O(v.$slots,"preview",{},void 0,!0)]),_:3})):(T(),N(h,{key:1},{default:y(()=>[_(M,{class:"camera-view",ref:"camera",autoplay:"",onStarted:l.startCameraFeed,onStopped:l.stopCameraFeed,resolution:{height:1920,width:1080}},{default:y(()=>[i.showFocusFrame&&l.cameraFeedShowing?(T(),N(b,{key:0})):ie("",!0),O(v.$slots,"in-camera",{},void 0,!0)]),_:3},8,["onStarted","onStopped"]),_(j,{"margin-y":"1rem",center:"","font-face":"circularSTD",scale:"subhead"},{default:y(()=>[U(se(i.caption),1)]),_:1}),_($,{class:"responsive-auto-layout",alignment:"center"},{default:y(()=>[_(E,{onClick:l.switchCamera,"min-width":"192px",responsive:"",size:"huge"},{default:y(()=>[U("Switch camera")]),_:1},8,["onClick"]),_(E,{onClick:l.snapshot,"color-scheme":"primary","min-width":"192px",size:"huge",responsive:""},{default:y(()=>[U(" Capture ")]),_:1},8,["onClick"])]),_:1}),O(v.$slots,"camera-actions",{},void 0,!0)]),_:3}))]),_:3})}s(ve,"_sfc_render");const Q=H(K,[["render",ve],["__scopeId","data-v-42546dd5"]]);K.__docgenInfo={displayName:"CameraWrapper",exportName:"default",description:"",tags:{},props:[{name:"caption",type:{name:"string"}},{name:"showFocusFrame",type:{name:"boolean"}}],events:[{name:"snapped"}],slots:[{name:"preview"},{name:"in-camera"},{name:"camera-actions"}]};const we={parameters:{storySource:{source:`import DCamera from "./DCamera.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Camera",
  component: DCamera,
  argTypes: {
    showFocusFrame: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DCamera },
  setup() {
    return { args };
  },
  template: \`<d-camera v-bind="args" />\`,
});

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}}}}},title:"Camera",component:Q,argTypes:{showFocusFrame:{control:{type:"boolean"}}}},pe=s(v=>({components:{DCamera:Q},setup(){return{args:v}},template:'<d-camera v-bind="args" />'}),"Template"),Ce=pe.bind({}),be=["Default"];export{Ce as Default,be as __namedExportsOrder,we as default};
//# sourceMappingURL=DCamera.stories-ff51aa52.js.map

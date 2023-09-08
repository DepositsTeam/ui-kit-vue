import{N as Q,e as b,b as re,q as oe,g as ie}from"./DWysiwyg-409150b0.js";import{l as N,j as V,k as g,q as h,u as x,_ as se,e as k,N as R,W as D,x as A,p as ce,m as O,t as ue}from"./vue.esm-bundler-d253c880.js";import{a as le,c as de}from"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const X={__name:"CameraFrame",setup(f){return(B,i)=>(N(),V(x(b),{id:"camera_frame_wrapper"},{default:g(()=>[h(x(b),{id:"camera_frame"},{default:g(()=>[h(x(b),{id:"left_top_camera_frame"}),h(x(b),{id:"right_top_camera_frame"}),h(x(b),{id:"left_bottom_camera_frame"}),h(x(b),{id:"right_bottom_camera_frame"})]),_:1})]),_:1}))}},me=Q(X,[["__scopeId","data-v-4e149f8b"]]);X.__docgenInfo={exportName:"default",displayName:"CameraFrame",description:"",tags:{},sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-camera/CameraFrame.vue"]};var q={},ve={get exports(){return q},set exports(f){q=f}};const fe=le(se);(function(f,B){(function(i,c){f.exports=c(fe)})(de,function(i){/*! *****************************************************************************
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
	    ***************************************************************************** */function c(s,v,n,o){function r(e){return e instanceof n?e:new n(function(l){l(e)})}return new(n||(n=Promise))(function(e,l){function y(d){try{t(o.next(d))}catch(E){l(E)}}function S(d){try{t(o.throw(d))}catch(E){l(E)}}function t(d){d.done?e(d.value):r(d.value).then(y,S)}t((o=o.apply(s,v||[])).next())})}function w(s,v){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,r,e,l;return l={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function y(t){return function(d){return S([t,d])}}function S(t){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(e=t[0]&2?r.return:t[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,t[1])).done)return e;switch(r=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,r=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){n.label=t[1];break}if(t[0]===6&&n.label<e[1]){n.label=e[1],e=t;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(t);break}e[2]&&n.ops.pop(),n.trys.pop();continue}t=v.call(s,n)}catch(d){t=[6,d],r=0}finally{o=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var m=i.defineComponent({name:"Camera",components:{},emits:["loading","started","stopped","paused","resumed","camera-change","snapshot","error"],props:{resolution:{type:Object,default:function(){return{width:1920,height:1080}}},facingMode:{type:String,default:"environment"},autoplay:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!0},constraints:{type:Object,required:!1}},setup:function(s,v){var n=this,o=v.emit;i.onMounted(function(){if(!navigator.mediaDevices)throw new Error("Media devices not available");var a=document.getElementById("video");s.playsinline&&a&&a.setAttribute("playsinline",""),s.autoplay&&d()}),i.onUnmounted(function(){return M()});var r=i.ref(),e=i.ref(),l=i.ref(),y=s.constraints||{video:{width:s.resolution.width,height:s.resolution.height,facingMode:s.facingMode,deviceId:{}},audio:!1},S=function(a){return a===void 0&&(a=["audioinput","videoinput"]),c(n,void 0,void 0,function(){var u;return w(this,function(_){switch(_.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:return u=_.sent(),[2,u.filter(function(I){return a.includes(I.kind)})]}})})},t=function(){if(l.value){var a=l.value.getVideoTracks().map(function(u){return u.getSettings().deviceId});if(a.length>0)return a[0]}},d=function(){return c(n,void 0,void 0,function(){var a,u;return w(this,function(_){switch(_.label){case 0:o("loading"),_.label=1;case 1:return _.trys.push([1,3,,4]),a=l,[4,navigator.mediaDevices.getUserMedia(y)];case 2:if(a.value=_.sent(),!r.value)throw new Error("Video ref is null");return r.value.srcObject=l.value,o("started"),[3,4];case 3:return u=_.sent(),o("error",u),[3,4];case 4:return[2]}})})},E=function(a,u,_){var I;if(a===void 0&&(a=s.resolution),u===void 0&&(u="image/png"),!r.value)throw new Error("Video ref is null");if(!e.value)throw new Error("Canvas ref is null");var L=a.width,P=a.height;return e.value.width=L,e.value.height=P,(I=e.value.getContext("2d"))===null||I===void 0||I.drawImage(r.value,0,0,L,P),new Promise(function(ne){var U;(U=e.value)===null||U===void 0||U.toBlob(function(G){o("snapshot",G),ne(G)},u,_)})},ee=function(a){return c(n,void 0,void 0,function(){return w(this,function(u){switch(u.label){case 0:return M(),y.video.deviceId.exact=a,[4,d()];case 1:return u.sent(),o("camera-change",a),[2]}})})},te=function(){var a;(a=r.value)===null||a===void 0||a.play(),o("resumed")},ae=function(){var a;(a=r.value)===null||a===void 0||a.pause(),o("paused")},M=function(){var a;(a=l.value)===null||a===void 0||a.getTracks().forEach(function(u){return u.stop()}),o("stopped")};return{start:d,stop:M,video:r,snapshot:E,canvas:e,devices:S,currentDeviceID:t,pause:ae,resume:te,changeCamera:ee,stream:l}}});const p={id:"camera-container"},C={autoplay:"",ref:"video",id:"video"},T={id:"slot-container"},j={ref:"canvas",id:"canvas"};function F(s,v,n,o,r,e){return i.openBlock(),i.createElementBlock(i.Fragment,null,[i.createElementVNode("div",p,[i.createElementVNode("video",C,null,512),i.createElementVNode("div",T,[i.renderSlot(s.$slots,"default")])]),i.createElementVNode("canvas",j,null,512)],64)}function W(s,v){v===void 0&&(v={});var n=v.insertAt;if(!(!s||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=s:r.appendChild(document.createTextNode(s))}}var z=`
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
`;return W(z),m.render=F,m.__scopeId="data-v-74104ed5",m.__file="src/components/Camera.vue",m})})(ve);const pe=q;const Y={name:"CameraWrapper",emits:["snapped"],components:{DBox:b,DButton:re,DAutoLayout:oe,DText:ie,CameraFrame:me,VCamera:pe},props:{caption:{type:String},showFocusFrame:{type:Boolean}},setup(f,{emit:B}){const i=k(null),c=k(0),w=k(null),m=k(null),p=k(!1),C=k(!1);return{currentSnapshot:w,retakePicture:async()=>{w.value=null},snapshot:async()=>{const s=await i.value.snapshot({width:1920,height:1080});w.value=URL.createObjectURL(s),B("snapped",{image:w.value,blob:s,file:new File([s],"name")})},startCameraFeed:()=>C.value=!0,stopCameraFeed:()=>C.value=!1,switchCamera:async()=>{var v,n;m.value=await((v=i.value)==null?void 0:v.devices(["videoinput"]));const s=await i.value.currentDeviceID();if(!p.value&&s!==m.value[0].deviceId){await i.value.changeCamera(m.value[0].deviceId),p.value=!0;return}if(await R(),m.value&&m.value.length>=2){let o=c.value+1;o>m.value.length-1&&(o=0),c.value=o,await R();const r=m.value[c.value];(n=i.value)==null||n.changeCamera(r.deviceId)}p.value=!0},camera:i,currentCamera:c,devices:m,mounted:p,cameraFeedShowing:C}}};function he(f,B,i,c,w,m){const p=D("d-box"),C=D("camera-frame"),T=D("v-camera"),j=D("d-text"),F=D("d-button"),W=D("d-auto-layout");return N(),V(p,null,{default:g(()=>[c.currentSnapshot?(N(),V(p,{key:0},{default:g(()=>[h(p,{is:"img",width:"100%",height:"auto",src:c.currentSnapshot,alt:"Current Snapshot"},null,8,["src"]),A(f.$slots,"preview",{},void 0,!0)]),_:3})):(N(),V(p,{key:1},{default:g(()=>[h(T,{class:"camera-view",ref:"camera",autoplay:"",onStarted:c.startCameraFeed,onStopped:c.stopCameraFeed,resolution:{height:1920,width:1080}},{default:g(()=>[i.showFocusFrame&&c.cameraFeedShowing?(N(),V(C,{key:0})):ce("",!0),A(f.$slots,"in-camera",{},void 0,!0)]),_:3},8,["onStarted","onStopped"]),h(j,{"margin-y":"1rem",center:"","font-face":"circularSTD",scale:"subhead"},{default:g(()=>[O(ue(i.caption),1)]),_:1}),h(W,{class:"responsive-auto-layout",alignment:"center"},{default:g(()=>[h(F,{onClick:c.switchCamera,"min-width":"192px",responsive:"",size:"huge"},{default:g(()=>[O("Switch camera")]),_:1},8,["onClick"]),h(F,{onClick:c.snapshot,"color-scheme":"primary","min-width":"192px",size:"huge",responsive:""},{default:g(()=>[O(" Capture ")]),_:1},8,["onClick"])]),_:1}),A(f.$slots,"camera-actions",{},void 0,!0)]),_:3}))]),_:3})}const Z=Q(Y,[["render",he],["__scopeId","data-v-42546dd5"]]);Y.__docgenInfo={displayName:"CameraWrapper",exportName:"default",description:"",tags:{},props:[{name:"caption",type:{name:"string"}},{name:"showFocusFrame",type:{name:"boolean"}}],events:[{name:"snapped"}],slots:[{name:"preview"},{name:"in-camera"},{name:"camera-actions"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-camera/DCamera.vue"]};const be={title:"Camera",component:Z,argTypes:{showFocusFrame:{control:{type:"boolean"}}}},_e=f=>({components:{DCamera:Z},setup(){return{args:f}},template:'<d-camera v-bind="args" />'}),$=_e.bind({});var H,J,K;$.parameters={...$.parameters,docs:{...(H=$.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DCamera
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-camera v-bind="args" />\`
})`,...(K=(J=$.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Default"];export{$ as Default,xe as __namedExportsOrder,be as default};
//# sourceMappingURL=DCamera.stories-c347e12e.js.map
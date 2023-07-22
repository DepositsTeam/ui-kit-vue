import{M as h}from"./chunk-PCJTTTQV-d640de6b.js";import{r as x}from"./index-e0ddb630.js";import{u as c}from"./index-a9a8c754.js";import"./iframe-2b034d23.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-724aca61.js";import"./index-356e4a49.js";const g=""+new URL("repo-fb4ece47.svg",import.meta.url).href,u=""+new URL("figma-icon-29081821.svg",import.meta.url).href,f=""+new URL("github-icon-12794390.svg",import.meta.url).href;var e={},b={get exports(){return e},set exports(r){e=r}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=x,k=Symbol.for("react.element"),w=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(r,t,p){var i,s={},a=null,l=null;p!==void 0&&(a=""+p),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)y.call(t,i)&&!v.hasOwnProperty(i)&&(s[i]=t[i]);if(r&&r.defaultProps)for(i in t=r.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:k,type:r,key:a,ref:l,props:s,_owner:_.current}}n.Fragment=w;n.jsx=d;n.jsxs=d;(function(r){r.exports=n})(b);function m(r){const t=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Deposits Vue UI Kit"}),`
`,e.jsx("style",{children:`
      @import url("https://assets.ondeposits.com/fonts/css/HeroNew.css");

    .copy-text {
      line-height: 30px;
    }

      *, .heroNew {
        font-family: "Hero New", sans-serif;
      }
      .subheading {
        --mediumdark: '#999999';
        font-weight: 900;
        font-size: 13px;
        color: #999;
        letter-spacing: 6px;
        line-height: 24px;
        text-transform: uppercase;
        margin-bottom: 12px;
        margin-top: 40px;
      }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(t.h1,{id:"welcome-to-the-deposits-vue-ui-kit",children:"Welcome to the Deposits Vue UI-Kit"}),`
`,e.jsx("p",{className:"copy-text",children:e.jsx(t.p,{children:`The Deposits Vue UI Kit is a collection of reusable, fully themeable and
customizable Vue UI components. It includes a lot of the basics as well as
amazing components tied to Fintech applications that can help drastically
reduce development time. It can help improve development time and increase
consistency in your fintech applications.`})}),`
`,e.jsxs(t.p,{children:["For more information on how to import and use our components, visit our ",e.jsx(t.a,{href:"https://doc.api.deposits.dev/docs/ui-kit/vue/getting-started",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(t.strong,{children:"Getting started guide"})})]}),`
`,e.jsx("div",{className:"subheading",children:"Learn more"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://doc.api.deposits.dev/docs/ui-kit/vue",target:"_blank",children:[e.jsx("img",{src:g,alt:"repo"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Ui-Kit Documentation"}),`
Learn more from our docs`]})})]}),e.jsxs("a",{className:"link-item",href:"https://www.figma.com/file/Wi9wPkCWJIbzyriC0oKAW9/Deposits-UI-Kit%2FDesign-System",target:"_blank",children:[e.jsx("img",{src:u,alt:"direction"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Figma Components"}),`
Check out our design system`]})})]}),e.jsxs("a",{className:"link-item",href:"https://github.com/DepositsTeam/ui-kit-vue",target:"_blank",children:[e.jsx("img",{src:f,alt:"code"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]})]})]})}function D(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,{...r,children:e.jsx(m,{...r})}):m(r)}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const o={title:"Deposits Vue UI Kit",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:D};const M=["__page"];export{M as __namedExportsOrder,E as __page,o as default};
//# sourceMappingURL=Introduction.stories-084b48c2.js.map

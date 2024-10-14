import { y as s, x as l, w as i, h as m } from "./DAccordion-DdDUMQ09.js";
import "./vue.esm-bundler-CUqwZzoc.js";
import "./iframe-DLE62fWz.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
const y = {
    title: "Layouts/Responsive Layout",
    component: s,
    argTypes: {},
    tags: ["autodocs"],
  },
  u = (n) => ({
    components: { DResponsiveLayout: s, DRow: l, DCol: i },
    setup() {
      return { args: n };
    },
    template: `<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :sm="6">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="6">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`,
  }),
  o = u.bind({}),
  b = (n) => ({
    components: { DResponsiveLayout: s, DCol: i, DRow: l, DBox: m },
    setup() {
      return { args: n };
    },
    template: `<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>`,
  }),
  e = b.bind({});
var d, t, r;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((d = o.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `args => ({
  components: {
    DResponsiveLayout,
    DRow,
    DCol
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :sm="6">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="6">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>\`
})`,
      ...((r = (t = o.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : r.source),
    },
  },
};
var a, p, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((a = e.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `args => ({
  components: {
    DResponsiveLayout,
    DCol,
    DRow,
    DBox
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>\`
})`,
      ...((c = (p = e.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const D = ["Default", "EqualCol"];
export { o as Default, e as EqualCol, D as __namedExportsOrder, y as default };

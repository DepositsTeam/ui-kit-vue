import { av as W } from "./DAccordion-DdDUMQ09.js";
import "./vue.esm-bundler-CUqwZzoc.js";
import "./iframe-DLE62fWz.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
const w = {
    title: "Tooltip",
    component: { DTooltip: W },
    argTypes: {
      tooltip: { control: { type: "text" } },
      trigger: {
        control: { type: "select" },
        options: ["click", "hover", "toggle"],
      },
      timeout: { control: { type: "text" }, default: 3 },
      disabled: { control: { type: "boolean" } },
      position: {
        control: { type: "select" },
        options: ["top", "bottom", "right", "left"],
      },
    },
    tags: ["autodocs"],
  },
  t = (L) => ({
    components: { DTooltip: W },
    setup() {
      return { args: L };
    },
    template: '<d-tooltip v-bind="args">I am a test</d-tooltip>',
  }),
  o = t.bind({});
o.args = { tooltip: "I am a test tooltip" };
const e = t.bind({});
e.args = { tooltip: "I am a test tooltip", trigger: "click", timeout: 5 };
const r = t.bind({});
r.args = { tooltip: "I am a test tooltip", trigger: "toggle", timeout: 5 };
const s = t.bind({});
s.args = { tooltip: "I am a test tooltip", trigger: "click", timeout: !1 };
const a = t.bind({});
a.args = { tooltip: "I am a test tooltip", trigger: "hover", timeout: !1 };
const n = t.bind({});
n.args = {
  tooltip: "I am a test tooltip",
  trigger: "hover",
  timeout: 3,
  position: "right",
};
const i = t.bind({});
i.args = {
  tooltip: "I am a test tooltip",
  trigger: "hover",
  timeout: 3,
  position: "left",
};
var p, l, m;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((m = (l = o.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var c, g, d;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((c = e.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((d = (g = e.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var u, T, b;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((u = r.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((b = (T = r.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var v, I, h;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((v = s.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((h = (I = s.parameters) == null ? void 0 : I.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var f, D, k;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((f = a.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((k = (D = a.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var S, y, _;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((S = n.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((_ = (y = n.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : _.source),
    },
  },
};
var x, C, H;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((x = i.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `args => ({
  components: {
    DTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tooltip v-bind="args">I am a test</d-tooltip>\`
})`,
      ...((H = (C = i.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : H.source),
    },
  },
};
const z = [
  "HoverTooltip",
  "ClickTooltip",
  "ToggleTooltip",
  "ClickTooltipWithoutTimeout",
  "HoverTooltipWithoutTimeout",
  "RightTooltip",
  "LeftTooltip",
];
export {
  e as ClickTooltip,
  s as ClickTooltipWithoutTimeout,
  o as HoverTooltip,
  a as HoverTooltipWithoutTimeout,
  i as LeftTooltip,
  n as RightTooltip,
  r as ToggleTooltip,
  z as __namedExportsOrder,
  w as default,
};

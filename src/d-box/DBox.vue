<script>
import { h, onBeforeMount, ref, inject } from "vue";
import allowedCSSProps from "../utils/allowedCSSProps";
import jss from "jss";
import preset from "jss-preset-default";
import uniqueRandomString from "../utils/uniqueRandomString";

export default {
  props: {
    is: {
      type: [String, Object],
      default: "div",
    },
    fontFace: {
      type: String,
      default: "heroNew",
      validator: (value) => ["heroNew", "circularSTD"].includes(value),
    },
    modelValue: {
      type: [Number, String],
    },
    ...allowedCSSProps,
    hoverClass: {
      type: [String, Object, Array],
    },
    darkClass: {
      type: [String, Object, Array],
    },
    lightClass: {
      type: [String, Object, Array],
    },
    id: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: [
    "change",
    "click",
    "input",
    "keydown",
    "keyup",
    "keypress",
    "focus",
    "blur",
    "mouseenter",
    "mouseleave",
    "update:modelValue",
  ],
  setup(props, { slots, emit }) {
    const styleClasses = ref(null);
    const className = uniqueRandomString(20, 8);
    const hovering = ref(false);
    const d__darkMode = inject("d__darkMode", null);
    const forwardableInputTypes = [
      "text",
      "password",
      "email",
      "number",
      "url",
      "color",
      "range",
      "week",
      "time",
      "tel",
      "search",
      "month",
      "date",
      "datetime-local",
    ];

    const manageStyles = () => {
      jss.setup(preset());
      const propKeys = Object.keys(props);
      let cssProps = {
        boxSizing: "border-box",
      };
      const addStylesToCssProps = (propKey) => {
        let cleansedPropKey = propKey
          .replaceAll("light", "")
          .replaceAll("dark", "");
        cleansedPropKey =
          cleansedPropKey[0].toLowerCase() + cleansedPropKey.substring(1);
        switch (cleansedPropKey) {
          case "marginX":
            cssProps.marginLeft = props.marginX;
            cssProps.marginRight = props.marginX;
            break;
          case "marginY":
            cssProps.marginTop = props.marginY;
            cssProps.marginBottom = props.marginY;
            break;
          case "paddingX":
            cssProps.paddingLeft = props.paddingX;
            cssProps.paddingRight = props.paddingX;
            break;
          case "paddingY":
            cssProps.paddingTop = props.paddingY;
            cssProps.paddingBottom = props.paddingY;
            break;
          default:
            cssProps[cleansedPropKey] = props[propKey];
        }
      };
      let regularProps = {};
      propKeys.forEach((propKey) => {
        if (allowedCSSProps[propKey]) {
          if (props[propKey]) {
            if (propKey.startsWith("light")) {
              if (d__darkMode && !d__darkMode.value) {
                addStylesToCssProps(propKey);
              }
            } else if (propKey.startsWith("dark")) {
              if (d__darkMode && d__darkMode.value) {
                addStylesToCssProps(propKey);
              }
            } else {
              addStylesToCssProps(propKey);
            }
          }
        } else {
          regularProps[propKey] = props[propKey];
        }
      });

      const style = {
        [className]: { ...cssProps },
      };

      const { classes } = jss.createStyleSheet(style).attach();

      styleClasses.value = classes;
    };

    onBeforeMount(() => {
      manageStyles();
    });

    return () =>
      h(
        props.is,
        {
          onChange: function (e) {
            if (props.is.toLowerCase() === "select") {
              emit("update:modelValue", e.target.value);
            }
            emit("change", e);
          },
          onFocus: function (e) {
            emit("focus", e);
          },
          onBlur: function (e) {
            emit("blur", e);
          },
          onClick: function (e) {
            emit("click", e);
          },
          onInput: function (e) {
            if (
              props.is.toLowerCase() === "input" &&
              forwardableInputTypes.includes(props.type.toLowerCase())
            ) {
              emit("update:modelValue", e.target.value);
            }
            emit("input", e);
          },
          onKeydown: function (e) {
            emit("keydown", e);
          },
          onKeyup: function (e) {
            emit("keyup", e);
          },
          onKeypress: function (e) {
            emit("keypress", e);
          },
          onMouseenter: function (e) {
            hovering.value = true;
            emit("mouseenter", e);
          },
          onMouseleave: function (e) {
            hovering.value = false;
            emit("mouseleave", e);
          },
          class: {
            [props.fontFace]: props.fontFace,
            [styleClasses.value[className]]: true,
            [props.hoverClass]: hovering.value,
            [props.darkClass]: d__darkMode !== null && d__darkMode.value,
            [props.lightClass]:
              d__darkMode !== null &&
              d__darkMode.value !== null &&
              !d__darkMode.value,
            dark_mode: d__darkMode !== null && d__darkMode.value,
          },
          id: props.id ? props.id : uniqueRandomString(20, 8),
          value:
            typeof props.is === "string" && props.is.toLowerCase() === "input"
              ? props.modelValue
                ? props.modelValue
                : props.value
              : props.value,
          type: props.type,
          disabled: props.disabled,
        },
        {
          default: () => {
            return [...(slots.default ? slots.default() : [])];
          },
        }
      );
  },
};
</script>
<style lang="scss">
@import url("https://assets.deposits.com/fonts/css/CircularSTD.css");
@import url("https://assets.deposits.com/fonts/css/HeroNew.css");

.heroNew {
  font-family: "Hero New", sans-serif;
}

.circularSTD {
  font-family: "Circular Std", sans-serif;
}

.bg-cyan-100 {
  background: #f2fafc;
}

.bg-cyan-200 {
  background: #bdf3fc;
}

.bg-cyan-300 {
  background: #75e2fa;
}

.bg-cyan-400 {
  background: #43d2fa;
}

.bg-cyan-500 {
  background: #0db9e9;
}

.bg-cyan-600 {
  background: #0c9ccc;
}

.bg-cyan-700 {
  background: #0b87b0;
}

.bg-cyan-800 {
  background: #085e7a;
}

.bg-cyan-900 {
  background: #094357;
}

/* green */

.bg-green-100 {
  background: #edfff9;
}

.bg-green-200 {
  background: #c4efdf;
}

.bg-green-300 {
  background: #9bdfc4;
}

.bg-green-400 {
  background: #71d0a7;
}

.bg-green-500 {
  background: #27c079;
}

.bg-green-600 {
  background: #00b058;
}

.bg-green-700 {
  background: #158957;
}

.bg-green-800 {
  background: #1f624a;
}

.bg-green-900 {
  background: #1d3b32;
}

/* orange */

.bg-orange-100 {
  background: #fff8f0;
}

.bg-orange-200 {
  background: #fff0db;
}

.bg-orange-300 {
  background: #ffe5c2;
}

.bg-orange-400 {
  background: #ffd49b;
}

.bg-orange-500 {
  background: #ffb44f;
}

.bg-orange-600 {
  background: #ff9505;
}

.bg-orange-700 {
  background: #e08304;
}

.bg-orange-800 {
  background: #995a06;
}

.bg-orange-900 {
  background: #573302;
}

/* red */

.bg-red-100 {
  background: #fff0f2;
}

.bg-red-200 {
  background: #fcc5ce;
}

.bg-red-300 {
  background: #f99bab;
}

.bg-red-400 {
  background: #e85e75;
}

.bg-red-500 {
  background: #d62f4b;
}

.bg-red-600 {
  background: #ad283d;
}

.bg-red-700 {
  background: #842432;
}

.bg-red-800 {
  background: #5c1e27;
}

.bg-red-900 {
  background: #331418;
}

/* blue */

.bg-blue-100 {
  background: #f7fbff;
}

.bg-blue-200 {
  background: #ddefff;
}

.bg-blue-300 {
  background: #acd7ff;
}

.bg-blue-400 {
  background: #62b2fd;
}

.bg-blue-500 {
  background: #0d7fe9;
}

.bg-blue-600 {
  background: #0059ac;
}

.bg-blue-700 {
  background: #003f79;
}

.bg-blue-800 {
  background: #022a50;
}

.bg-blue-900 {
  background: #051b30;
}

/* neutral */

.bg-white {
  background: #ffffff;
}

.bg-gray-100,
.bg-grey-100 {
  background: #f5f8fa;
}

.bg-gray-200,
.bg-grey-200 {
  background: #e1e7ec;
}

.bg-gray-300,
.bg-grey-300 {
  background: #ced6de;
}

.bg-gray-400,
.bg-grey-400 {
  background: #b8c4ce;
}

.bg-gray-500,
.bg-grey-500 {
  background: #8895a7;
}

.bg-gray-600,
.bg-grey-600 {
  background: #5f6b7a;
}

.bg-gray-700,
.bg-grey-700 {
  background: #212934;
}

.bg-neutral-100 {
  background: #f5f8fa;
}

.bg-neutral-200 {
  background: #e1e7ec;
}

.bg-neutral-300 {
  background: #ced6de;
}

.bg-neutral-400 {
  background: #b8c4ce;
}

.bg-neutral-500 {
  background: #8895a7;
}

.bg-neutral-600 {
  background: #6d7786;
}

.bg-neutral-700 {
  background: #525964;
}

.bg-neutral-800 {
  background: #363c43;
}

.bg-neutral-900 {
  background: #1b1e21;
}

.bg-black {
  background: #000000;
}

/* text d-color */

/* cyan */

.text-cyan-100 {
  color: #f2fafc;
}

.text-cyan-200 {
  color: #bdf3fc;
}

.text-cyan-300 {
  color: #75e2fa;
}

.text-cyan-400 {
  color: #43d2fa;
}

.text-cyan-500 {
  color: #0db9e9;
}

.text-cyan-600 {
  color: #0c9ccc;
}

.text-cyan-700 {
  color: #0b87b0;
}

.text-cyan-800 {
  color: #085e7a;
}

.text-cyan-900 {
  color: #094357;
}

/* green */

.text-green-100 {
  color: #edfff9;
}

.text-green-200 {
  color: #c4efdf;
}

.text-green-300 {
  color: #9bdfc4;
}

.text-green-400 {
  color: #71d0a7;
}

.text-green-500 {
  color: #27c079;
}

.text-green-600 {
  color: #00b058;
}

.text-green-700 {
  color: #158957;
}

.text-green-800 {
  color: #1f624a;
}

.text-green-900 {
  color: #1d3b32;
}

/* orange */

.text-orange-100 {
  color: #fff8f0;
}

.text-orange-200 {
  color: #fff0db;
}

.text-orange-300 {
  color: #ffe5c2;
}

.text-orange-400 {
  color: #ffd49b;
}

.text-orange-500 {
  color: #ffb44f;
}

.text-orange-600 {
  color: #ff9505;
}

.text-orange-700 {
  color: #e08304;
}

.text-orange-800 {
  color: #995a06;
}

.text-orange-900 {
  color: #573302;
}

/* red */

.text-red-100 {
  color: #fff0f2;
}

.text-red-200 {
  color: #fcc5ce;
}

.text-red-300 {
  color: #f99bab;
}

.text-red-400 {
  color: #e85e75;
}

.text-red-500 {
  color: #d62f4b;
}

.text-red-600 {
  color: #ad283d;
}

.text-red-700 {
  color: #842432;
}

.text-red-800 {
  color: #5c1e27;
}

.text-red-900 {
  color: #331418;
}

/* blue */

.text-blue-100 {
  color: #f7fbff;
}

.text-blue-200 {
  color: #ddefff;
}

.text-blue-300 {
  color: #acd7ff;
}

.text-blue-400 {
  color: #62b2fd;
}

.text-blue-500 {
  color: #0d7fe9;
}

.text-blue-600 {
  color: #0059ac;
}

.text-blue-700 {
  color: #003f79;
}

.text-blue-800 {
  color: #022a50;
}

.text-blue-900 {
  color: #051b30;
}

/* neutral */

.text-white {
  color: #ffffff;
}

.text-gray-100,
.text-grey-100 {
  color: #f5f8fa;
}

.text-gray-200,
.text-grey-200 {
  color: #e1e7ec;
}

.text-gray-300,
.text-grey-300 {
  color: #ced6de;
}

.text-gray-400,
.text-grey-400 {
  color: #b8c4ce;
}

.text-gray-500,
.text-grey-500 {
  color: #8895a7;
}

.text-gray-600,
.text-grey-600 {
  color: #5f6b7a;
}

.text-gray-700,
.text-grey-700 {
  color: #212934;
}

.text-neutral-100 {
  color: #f5f8fa;
}

.text-neutral-200 {
  color: #e1e7ec;
}

.text-neutral-300 {
  color: #ced6de;
}

.text-neutral-400 {
  color: #b8c4ce;
}

.text-neutral-500 {
  color: #8895a7;
}

.text-neutral-600 {
  color: #6d7786;
}

.text-neutral-700 {
  color: #525964;
}

.text-neutral-800 {
  color: #363c43;
}

.text-neutral-900 {
  color: #1b1e21;
}

.text-black {
  color: #000000;
}

@for $i from 1 through 9 {
  .font-weight-#{$i * 100} {
    font-weight: $i * 100;
  }
}
.w-100 {
  width: 100%;
}
.text-center {
  text-align: center;
}
@for $i from 0 through 12 {
  .mt-#{$i} {
    margin-top: calc(8px * #{$i});
  }
  .mb-#{$i} {
    margin-bottom: calc(8px * #{$i});
  }
  .pt-#{$i} {
    padding-top: calc(8px * #{$i});
  }
  .pb-#{$i} {
    padding-bottom: calc(8px * #{$i});
  }
  .my-#{$i} {
    margin-bottom: calc(8px * #{$i});
    margin-top: calc(8px * #{$i});
  }
  .py-#{$i} {
    padding-top: calc(8px * #{$i});
    padding-bottom: calc(8px * #{$i});
  }
  .ml-#{$i} {
    margin-left: calc(8px * #{$i});
  }
  .mr-#{$i} {
    margin-right: calc(8px * #{$i});
  }
  .pl-#{$i} {
    padding-left: calc(8px * #{$i});
  }
  .pr-#{$i} {
    padding-right: calc(8px * #{$i});
  }
  .mx-#{$i} {
    margin-left: calc(8px * #{$i});
    margin-right: calc(8px * #{$i});
  }
  .px-#{$i} {
    padding-left: calc(8px * #{$i});
    padding-right: calc(8px * #{$i});
  }
  .my-#{$i} {
    margin-top: calc(8px * #{$i});
    margin-bottom: calc(8px * #{$i});
  }
  .py-#{$i} {
    padding-top: calc(8px * #{$i});
    padding-bottom: calc(8px * #{$i});
  }
}
.text-no-underline {
  text-decoration: none;
}
</style>

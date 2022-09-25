<script>
import { h, inject, computed, onMounted } from "vue";
import allowedCSSProps from "../utils/allowedCSSProps";
import uniqueRandomString from "../utils/uniqueRandomString";
import { defaultThemeVars } from "../providers/default-theme";

const unitizeValue = (value) =>
  parseFloat(value) == value ? `${value}px` : value;

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
    value: {
      type: [Number, String],
    },
    ...Object.assign({}, allowedCSSProps),
    cursor: {
      type: String,
    },
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
    const darkMode = inject("d__darkMode");
    const d__theme = inject("d__theme", defaultThemeVars);
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
    const computedType = computed(() => {
      if (typeof props.is === "string" && props.is.toLowerCase() === "input") {
        return props.type ? props.type.toLowerCase() : "text";
      } else {
        return undefined;
      }
    });
    const computedValue = computed(() => {
      if (props.modelValue !== undefined) {
        return props.modelValue;
      } else if (props.value !== undefined) {
        return props.value;
      } else {
        return undefined;
      }
    });
    const svgWidth = computed(() => {
      if (
        typeof props.is === "string" &&
        props.is.toLowerCase() === "svg" &&
        props.width
      ) {
        return props.width;
      } else {
        return undefined;
      }
    });
    const svgHeight = computed(() => {
      if (
        typeof props.is === "string" &&
        props.is.toLowerCase() === "svg" &&
        props.height
      ) {
        return props.height;
      } else {
        return undefined;
      }
    });

    const darkModeIsEnabled = computed(
      () => darkMode !== null && darkMode !== undefined && darkMode.value
    );

    const uniqueID = "auto_generated" + uniqueRandomString(20);
    const uniqueClass = "auto_generated" + uniqueRandomString(20);

    const convertCssProps = (str) =>
      str
        .split(/\.?(?=[A-Z])/)
        .join("-")
        .toLowerCase();

    const addStylesToCssProps = (propKey, cssProps) => {
      let cleansedPropKey = propKey
        .replaceAll("light", "")
        .replaceAll("dark", "");
      cleansedPropKey =
        cleansedPropKey[0].toLowerCase() + cleansedPropKey.substring(1);
      switch (cleansedPropKey) {
        case "marginX":
          cssProps["margin-left"] = unitizeValue(props[propKey]);
          cssProps["margin-right"] = unitizeValue(props[propKey]);
          break;
        case "marginY":
          cssProps["margin-top"] = unitizeValue(props[propKey]);
          cssProps["margin-bottom"] = unitizeValue(props[propKey]);
          break;
        case "paddingX":
          cssProps["padding-left"] = unitizeValue(props[propKey]);
          cssProps["padding-right"] = unitizeValue(props[propKey]);
          break;
        case "paddingY":
          cssProps["padding-top"] = unitizeValue(props[propKey]);
          cssProps["padding-bottom"] = unitizeValue(props[propKey]);
          break;
        case "width":
        case "height":
          cssProps[propKey] = unitizeValue(props[propKey]);
          break;
        default:
          cssProps[convertCssProps(cleansedPropKey)] = props[propKey];
      }
    };

    const generateClassProps = () => {
      const savedCss = {};
      for (let prop in props) {
        if (allowedCSSProps[prop]) {
          if (props[prop]) {
            if (prop.startsWith("light") && !darkModeIsEnabled.value) {
              addStylesToCssProps(prop, savedCss);
            } else if (prop.startsWith("dark") && darkModeIsEnabled.value) {
              addStylesToCssProps(prop, savedCss);
            } else {
              addStylesToCssProps(prop, savedCss);
            }
          }
        }
      }
      const savedCssEntries = Object.entries(savedCss);
      let cssRules = "box-sizing: border-box;";
      if (savedCssEntries.length) {
        cssRules += savedCssEntries.map(([k, v]) => `${k}:${v}`).join(";");
      }
      const styleTag = document.createElement("style");
      styleTag.id = uniqueID;
      styleTag.setAttribute("type", "text/css");
      styleTag.innerHTML = `.${uniqueClass}{${cssRules}}`;
      document.head.appendChild(styleTag);
    };

    onMounted(() => {
      generateClassProps();
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
              forwardableInputTypes.includes(computedType.value)
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
          id: props.id ? props.id : uniqueID,
          ...(computedType.value ? { type: computedType.value } : {}),
          ...(computedValue.value ? { value: computedValue.value } : {}),
          disabled: props.disabled,
          class: {
            // [styleClasses.value[uniqueClass]]: true,
            [uniqueClass]: true,
            [props.darkClass]: darkModeIsEnabled.value && props.darkClass,
            [props.lightClass]: !darkModeIsEnabled.value && props.lightClass,
            [props.fontFace]: props.fontFace,
            dark_mode: darkModeIsEnabled.value,
          },
          ...(svgWidth.value ? { width: svgWidth.value } : {}),
          ...(svgHeight.value ? { height: svgHeight.value } : {}),
          style: {
            ...d__theme,
          },
        },
        slots.default ? slots.default() : undefined
      );
  },
};
</script>
<style lang="scss">
@import url("https://assets.ondeposits.com/fonts/css/CircularSTD.css");
@import url("https://assets.ondeposits.com/fonts/css/HeroNew.css");

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

.text-primary-light-100 {
  color: var(--light-primary-100);
}

.text-primary-light-200 {
  color: var(--light-primary-200);
}

.text-primary-light-300 {
  color: var(--light-primary-300);
}

.text-primary-light-400 {
  color: var(--light-primary-400);
}

.text-primary-light-500 {
  color: var(--light-primary-500);
}

.text-primary-light-600 {
  color: var(--light-primary-600);
}

.text-primary-light-700 {
  color: var(--light-primary-700);
}

.text-primary-light-800 {
  color: var(--light-primary-800);
}

.text-primary-light-900 {
  color: var(--light-primary-900);
}

.text-primary-dark-100 {
  color: var(--dark-primary-100);
}

.text-primary-dark-200 {
  color: var(--dark-primary-200);
}

.text-primary-dark-300 {
  color: var(--dark-primary-300);
}

.text-primary-dark-400 {
  color: var(--dark-primary-400);
}

.text-primary-dark-500 {
  color: var(--dark-primary-500);
}

.text-primary-dark-600 {
  color: var(--dark-primary-600);
}

.text-primary-dark-700 {
  color: var(--dark-primary-700);
}

.text-primary-dark-800 {
  color: var(--dark-primary-800);
}

.text-primary-dark-900 {
  color: var(--dark-primary-900);
}

.text-secondary-light-100 {
  color: #f7fbff;
}

.text-secondary-light-200 {
  color: #ddefff;
}

.text-secondary-light-300 {
  color: #acd7ff;
}

.text-secondary-light-400 {
  color: #62b2fd;
}

.text-secondary-light-500 {
  color: #0d7fe9;
}

.text-secondary-light-600 {
  color: #0059ac;
}

.text-secondary-light-700 {
  color: #003f79;
}

.text-secondary-light-800 {
  color: #022a50;
}

.text-secondary-light-900 {
  color: #051b30;
}

.text-secondary-dark-100 {
  color: #a1bcde;
}

.text-secondary-dark-200 {
  color: #91b2dc;
}

.text-secondary-dark-300 {
  color: #7da7db;
}

.text-secondary-dark-400 {
  color: #62b2fd;
}

.text-secondary-dark-500 {
  color: #418be1;
}

.text-secondary-dark-600 {
  color: #1879db;
}

.text-secondary-dark-700 {
  color: #2967ad;
}

.text-secondary-dark-800 {
  color: #2a4c76;
}

.text-secondary-dark-900 {
  color: #141b24;
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
  color: #525964;
}

.text-neutral-900 {
  color: #1b1e21;
}

.text-cool-grey-100 {
  color: #f1f5f9;
}

.text-cool-grey-200 {
  color: #e2e8f0;
}

.text-cool-grey-300 {
  color: #cbd5e1;
}

.text-cool-grey-400 {
  color: #94a3b8;
}

.text-cool-grey-500 {
  color: #64748b;
}

.text-cool-grey-600 {
  color: #4f627d;
}

.text-cool-grey-700 {
  color: #384860;
}

.text-cool-grey-800 {
  color: #202b3c;
}

.text-cool-grey-900 {
  color: #121a26;
}

.text-caution-light-100 {
  color: #fff8f0;
}

.text-caution-light-200 {
  color: #fff0db;
}

.text-caution-light-300 {
  color: #ffe5c2;
}

.text-caution-light-400 {
  color: #ffd49b;
}

.text-caution-light-500 {
  color: #ffb44f;
}

.text-caution-light-600 {
  color: #ff9505;
}

.text-caution-light-700 {
  color: #e08304;
}

.text-caution-light-800 {
  color: #995a06;
}

.text-caution-light-900 {
  color: #573302;
}

.text-caution-dark-100 {
  color: #fca835;
}

.text-caution-dark-200 {
  color: #fb9810;
}

.text-caution-dark-300 {
  color: #ef8c04;
}

.text-caution-dark-400 {
  color: #dc8104;
}

.text-caution-dark-500 {
  color: #c87503;
}

.text-caution-dark-600 {
  color: #b06703;
}

.text-caution-dark-700 {
  color: #935703;
}

.text-caution-dark-800 {
  color: #6e4102;
}

.text-caution-dark-900 {
  color: #271701;
}

.text-success-light-100 {
  color: #edfff9;
}

.text-success-light-200 {
  color: #c4efdf;
}

.text-success-light-300 {
  color: #9bdfc4;
}

.text-success-light-400 {
  color: #71d0a7;
}

.text-success-light-500 {
  color: #27c079;
}

.text-success-light-600 {
  color: #00b058;
}

.text-success-light-700 {
  color: #158957;
}

.text-success-light-800 {
  color: #1f624a;
}

.text-success-light-900 {
  color: #1d3b32;
}

.text-success-dark-100 {
  color: #53d091;
}

.text-success-dark-200 {
  color: #36c77d;
}

.text-success-dark-300 {
  color: #32ba75;
}

.text-success-dark-400 {
  color: #2eab6c;
}

.text-success-dark-500 {
  color: #2a9b62;
}

.text-success-dark-600 {
  color: #2a9b62;
}

.text-success-dark-700 {
  color: #1f7348;
}

.text-success-dark-800 {
  color: #175636;
}

.text-success-dark-900 {
  color: #081e13;
}

.text-info-light-100 {
  color: #f7fbff;
}

.text-info-light-200 {
  color: #ddefff;
}

.text-info-light-300 {
  color: #acd7ff;
}

.text-info-light-400 {
  color: #62b2fd;
}

.text-info-light-500 {
  color: #0d7fe9;
}

.text-info-light-600 {
  color: #0059ac;
}

.text-info-light-700 {
  color: #003f79;
}

.text-info-light-800 {
  color: #022a50;
}

.text-info-light-900 {
  color: #051b30;
}

.text-info-dark-100 {
  color: #a1bcde;
}

.text-info-dark-200 {
  color: #91b2dc;
}

.text-info-dark-300 {
  color: #7da7db;
}

.text-info-dark-400 {
  color: #62b2fd;
}

.text-info-dark-500 {
  color: #418be1;
}

.text-info-dark-600 {
  color: #1879db;
}

.text-info-dark-700 {
  color: #2967ad;
}

.text-info-dark-800 {
  color: #2a4c76;
}

.text-info-dark-900 {
  color: #141b24;
}

.text-warning-light-100 {
  color: #fff0f2;
}

.text-warning-light-200 {
  color: #fcc5ce;
}

.text-warning-light-300 {
  color: #f99bab;
}

.text-warning-light-400 {
  color: #e85e75;
}

.text-warning-light-500 {
  color: #d62f4b;
}

.text-warning-light-600 {
  color: #ad283d;
}

.text-warning-light-700 {
  color: #842432;
}

.text-warning-light-800 {
  color: #5c1e27;
}

.text-warning-light-900 {
  color: #331418;
}

.text-warning-dark-100 {
  color: #eea7b3;
}

.text-warning-dark-200 {
  color: #eb98a6;
}

.text-warning-dark-300 {
  color: #e88898;
}

.text-warning-dark-400 {
  color: #e47588;
}

.text-warning-dark-500 {
  color: #df5e74;
}

.text-warning-dark-600 {
  color: #d93f59;
}

.text-warning-dark-700 {
  color: #c12640;
}

.text-warning-dark-800 {
  color: #911c30;
}

.text-warning-dark-900 {
  color: #350a12;
}

.bg-primary-light-100 {
  background-color: var(--light-primary-100);
}

.bg-primary-light-200 {
  background-color: var(--light-primary-200);
}

.bg-primary-light-300 {
  background-color: var(--light-primary-300);
}

.bg-primary-light-400 {
  background-color: var(--light-primary-400);
}

.bg-primary-light-500 {
  background-color: var(--light-primary-500);
}

.bg-primary-light-600 {
  background-color: var(--light-primary-600);
}

.bg-primary-light-700 {
  background-color: var(--light-primary-700);
}

.bg-primary-light-800 {
  background-color: var(--light-primary-800);
}

.bg-primary-light-900 {
  background-color: var(--light-primary-900);
}

.bg-primary-dark-100 {
  background-color: var(--dark-primary-100);
}

.bg-primary-dark-200 {
  background-color: var(--dark-primary-200);
}

.bg-primary-dark-300 {
  background-color: var(--dark-primary-300);
}

.bg-primary-dark-400 {
  background-color: var(--dark-primary-400);
}

.bg-primary-dark-500 {
  background-color: var(--dark-primary-500);
}

.bg-primary-dark-600 {
  background-color: var(--dark-primary-600);
}

.bg-primary-dark-700 {
  background-color: var(--dark-primary-700);
}

.bg-primary-dark-800 {
  background-color: var(--dark-primary-800);
}

.bg-primary-dark-900 {
  background-color: var(--dark-primary-900);
}

.bg-secondary-light-100 {
  background-color: #f7fbff;
}

.bg-secondary-light-200 {
  background-color: #ddefff;
}

.bg-secondary-light-300 {
  background-color: #acd7ff;
}

.bg-secondary-light-400 {
  background-color: #62b2fd;
}

.bg-secondary-light-500 {
  background-color: #0d7fe9;
}

.bg-secondary-light-600 {
  background-color: #0059ac;
}

.bg-secondary-light-700 {
  background-color: #003f79;
}

.bg-secondary-light-800 {
  background-color: #022a50;
}

.bg-secondary-light-900 {
  background-color: #051b30;
}

.bg-secondary-dark-100 {
  background-color: #a1bcde;
}

.bg-secondary-dark-200 {
  background-color: #91b2dc;
}

.bg-secondary-dark-300 {
  background-color: #7da7db;
}

.bg-secondary-dark-400 {
  background-color: #62b2fd;
}

.bg-secondary-dark-500 {
  background-color: #418be1;
}

.bg-secondary-dark-600 {
  background-color: #1879db;
}

.bg-secondary-dark-700 {
  background-color: #2967ad;
}

.bg-secondary-dark-800 {
  background-color: #2a4c76;
}

.bg-secondary-dark-900 {
  background-color: #141b24;
}

.bg-neutral-100 {
  background-color: #f5f8fa;
}

.bg-neutral-200 {
  background-color: #e1e7ec;
}

.bg-neutral-300 {
  background-color: #ced6de;
}

.bg-neutral-400 {
  background-color: #b8c4ce;
}

.bg-neutral-500 {
  background-color: #8895a7;
}

.bg-neutral-600 {
  background-color: #6d7786;
}

.bg-neutral-700 {
  background-color: #525964;
}

.bg-neutral-800 {
  background-color: #525964;
}

.bg-neutral-900 {
  background-color: #1b1e21;
}

.bg-cool-grey-100 {
  background-color: #f1f5f9;
}

.bg-cool-grey-200 {
  background-color: #e2e8f0;
}

.bg-cool-grey-300 {
  background-color: #cbd5e1;
}

.bg-cool-grey-400 {
  background-color: #94a3b8;
}

.bg-cool-grey-500 {
  background-color: #64748b;
}

.bg-cool-grey-600 {
  background-color: #4f627d;
}

.bg-cool-grey-700 {
  background-color: #384860;
}

.bg-cool-grey-800 {
  background-color: #202b3c;
}

.bg-cool-grey-900 {
  background-color: #121a26;
}

.bg-caution-light-100 {
  background-color: #fff8f0;
}

.bg-caution-light-200 {
  background-color: #fff0db;
}

.bg-caution-light-300 {
  background-color: #ffe5c2;
}

.bg-caution-light-400 {
  background-color: #ffd49b;
}

.bg-caution-light-500 {
  background-color: #ffb44f;
}

.bg-caution-light-600 {
  background-color: #ff9505;
}

.bg-caution-light-700 {
  background-color: #e08304;
}

.bg-caution-light-800 {
  background-color: #995a06;
}

.bg-caution-light-900 {
  background-color: #573302;
}

.bg-caution-dark-100 {
  background-color: #fca835;
}

.bg-caution-dark-200 {
  background-color: #fb9810;
}

.bg-caution-dark-300 {
  background-color: #ef8c04;
}

.bg-caution-dark-400 {
  background-color: #dc8104;
}

.bg-caution-dark-500 {
  background-color: #c87503;
}

.bg-caution-dark-600 {
  background-color: #b06703;
}

.bg-caution-dark-700 {
  background-color: #935703;
}

.bg-caution-dark-800 {
  background-color: #6e4102;
}

.bg-caution-dark-900 {
  background-color: #271701;
}

.bg-success-light-100 {
  background-color: #edfff9;
}

.bg-success-light-200 {
  background-color: #c4efdf;
}

.bg-success-light-300 {
  background-color: #9bdfc4;
}

.bg-success-light-400 {
  background-color: #71d0a7;
}

.bg-success-light-500 {
  background-color: #27c079;
}

.bg-success-light-600 {
  background-color: #00b058;
}

.bg-success-light-700 {
  background-color: #158957;
}

.bg-success-light-800 {
  background-color: #1f624a;
}

.bg-success-light-900 {
  background-color: #1d3b32;
}

.bg-success-dark-100 {
  background-color: #53d091;
}

.bg-success-dark-200 {
  background-color: #36c77d;
}

.bg-success-dark-300 {
  background-color: #32ba75;
}

.bg-success-dark-400 {
  background-color: #2eab6c;
}

.bg-success-dark-500 {
  background-color: #2a9b62;
}

.bg-success-dark-600 {
  background-color: #2a9b62;
}

.bg-success-dark-700 {
  background-color: #1f7348;
}

.bg-success-dark-800 {
  background-color: #175636;
}

.bg-success-dark-900 {
  background-color: #081e13;
}

.bg-info-light-100 {
  background-color: #f7fbff;
}

.bg-info-light-200 {
  background-color: #ddefff;
}

.bg-info-light-300 {
  background-color: #acd7ff;
}

.bg-info-light-400 {
  background-color: #62b2fd;
}

.bg-info-light-500 {
  background-color: #0d7fe9;
}

.bg-info-light-600 {
  background-color: #0059ac;
}

.bg-info-light-700 {
  background-color: #003f79;
}

.bg-info-light-800 {
  background-color: #022a50;
}

.bg-info-light-900 {
  background-color: #051b30;
}

.bg-info-dark-100 {
  background-color: #a1bcde;
}

.bg-info-dark-200 {
  background-color: #91b2dc;
}

.bg-info-dark-300 {
  background-color: #7da7db;
}

.bg-info-dark-400 {
  background-color: #62b2fd;
}

.bg-info-dark-500 {
  background-color: #418be1;
}

.bg-info-dark-600 {
  background-color: #1879db;
}

.bg-info-dark-700 {
  background-color: #2967ad;
}

.bg-info-dark-800 {
  background-color: #2a4c76;
}

.bg-info-dark-900 {
  background-color: #141b24;
}

.bg-warning-light-100 {
  background-color: #fff0f2;
}

.bg-warning-light-200 {
  background-color: #fcc5ce;
}

.bg-warning-light-300 {
  background-color: #f99bab;
}

.bg-warning-light-400 {
  background-color: #e85e75;
}

.bg-warning-light-500 {
  background-color: #d62f4b;
}

.bg-warning-light-600 {
  background-color: #ad283d;
}

.bg-warning-light-700 {
  background-color: #842432;
}

.bg-warning-light-800 {
  background-color: #5c1e27;
}

.bg-warning-light-900 {
  background-color: #331418;
}

.bg-warning-dark-100 {
  background-color: #eea7b3;
}

.bg-warning-dark-200 {
  background-color: #eb98a6;
}

.bg-warning-dark-300 {
  background-color: #e88898;
}

.bg-warning-dark-400 {
  background-color: #e47588;
}

.bg-warning-dark-500 {
  background-color: #df5e74;
}

.bg-warning-dark-600 {
  background-color: #d93f59;
}

.bg-warning-dark-700 {
  background-color: #c12640;
}

.bg-warning-dark-800 {
  background-color: #911c30;
}

.bg-warning-dark-900 {
  background-color: #350a12;
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

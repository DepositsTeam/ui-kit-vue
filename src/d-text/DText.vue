<template>
  <d-box
    class="ui-text"
    :font-face="computedFontFace"
    :class="{
      [scale]: scale,
      uppercase,
      'equal-line-height': equalLineHeight,
      center,
      my0,
      mt0,
      mb0,
      mx0,
      ml0,
      mr0,
      customFontWeight: fontWeight,
      customFontSize: fontSize,
      customLineHeight: lineHeight,
    }"
    :is="is"
    v-bind="{ ...$props, ...$attrs }"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { inject, computed, unref } from "vue";

const defaultFontFace = inject("defaultFontFace", null);

const props = defineProps({
  is: {
    type: [String, Object],
    validator: (value) => {
      if (typeof value !== "object") {
        return ["p", "span", "small", "sub", "sup", "subhead", "a"].includes(
          value
        );
      } else {
        return true;
      }
    },
    default: "p",
  },
  fontFace: {
    type: String,
    validator: (value) => ["heroNew", "circularSTD"].includes(value),
  },
  scale: {
    type: String,
    validator: (value) =>
      [
        "body",
        "p-16",
        "subhead",
        "p-18",
        "overline",
        "footnote",
        "overline",
        "footnote-caps",
      ].includes(value),
  },
  uppercase: {
    type: Boolean,
  },
  equalLineHeight: {
    type: Boolean,
  },
  lineHeight: {
    type: [Number, String],
  },
  fontSize: {
    type: [Number, String],
  },
  fontWeight: {
    type: [Number, String],
  },
  my0: {
    type: Boolean,
  },
  mt0: {
    type: Boolean,
  },
  mb0: {
    type: Boolean,
  },
  mx0: {
    type: Boolean,
  },
  ml0: {
    type: Boolean,
  },
  mr0: {
    type: Boolean,
  },
  center: {
    type: Boolean,
  },
  lightClass: {
    type: String,
    default: "",
  },
  darkClass: {
    type: String,
    default: "text-neutral-600",
  },
});

const computedFontFace = computed(() => {
  return props.fontFace || unref(defaultFontFace)
    ? unref(defaultFontFace)
    : "circularSTD";
});
</script>

<style lang="scss">
.uppercase {
  text-transform: uppercase;
}

.ui-text {
  b,
  strong {
    &:not(.customFontWeight) {
      font-weight: 700;
    }
  }
  &.center {
    text-align: center;
  }
  &.my0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  &.mt0 {
    margin-top: 0;
  }
  &.mb0 {
    margin-bottom: 0;
  }
  &.body,
  &.p-16 {
    &:not(.customFontSize) {
      font-size: 16px;
    }
    &:not(.customLineHeight) {
      line-height: 24px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 16px;
      }
    }
  }

  &.p-18 {
    &:not(.customFontSize) {
      font-size: 18px;
    }
    &:not(.customLineHeight) {
      line-height: 30px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 18px;
      }
    }
  }

  &.subhead {
    &:not(.customFontSize) {
      font-size: 14px;
    }
    &:not(.customLineHeight) {
      line-height: 24px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 14px;
      }
    }
  }

  &.overline {
    &:not(.customFontSize) {
      font-size: 10px;
    }
    &:not(.customLineHeight) {
      line-height: 12px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 10px;
      }
    }
  }

  &.footnote {
    &:not(.customFontSize) {
      font-size: 12px;
    }
    &:not(.customLineHeight) {
      line-height: 16px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 12px;
      }
    }
  }

  &.footnote-caps {
    &:not(.customFontSize) {
      font-size: 12px;
    }
    &:not(.customLineHeight) {
      line-height: 16px;
    }
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>

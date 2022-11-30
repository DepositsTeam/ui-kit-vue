<template>
  <d-box
    class="ui-heading"
    :font-face="computedFontFace"
    :class="{
      [scale]: scale && !level,
      [is]: is,
      uppercase,
      'equal-line-height': equalLineHeight,
      center,
      my0,
      [`h${level}`]: level,
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
import { computed, inject, unref } from "vue";

const defaultFontFace = inject("defaultFontFace", null);

const props = defineProps({
  is: {
    type: [String, Object],
    default: "p",
    validator: (value) => {
      if (typeof value !== "object") {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(value);
      } else {
        return true;
      }
    },
  },
  scale: {
    type: String,
    validator: (value) =>
      ["subtitle-1", "subtitle-2", "subhead"].includes(value),
  },
  fontFace: {
    type: String,
    validator: (value) => ["heroNew", "circularSTD"].includes(value),
  },
  fontWeight: {
    type: [String, Number],
  },
  fontSize: {
    type: [String, Number],
  },
  lineHeight: {
    type: [String, Number],
  },
  uppercase: {
    type: Boolean,
  },
  equalLineHeight: {
    type: Boolean,
  },
  my0: {
    type: Boolean,
  },
  center: {
    type: Boolean,
  },
  level: {
    type: [String, Number],
  },
  lightClass: {
    type: String,
  },
  darkClass: {
    type: String,
    default: "text-neutral-300",
  },
});

const computedFontFace = computed(() => {
  return props.fontFace || unref(defaultFontFace)
    ? unref(defaultFontFace)
    : "heroNew";
});
</script>

<style lang="scss">
.ui-heading {
  &:not(.customFontWeight) {
    font-weight: bold;
  }

  &.center {
    text-align: center;
  }
  &.my0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  &.h1 {
    &:not(.customFontSize) {
      font-size: 64px;
    }
    &:not(.customLineHeight) {
      line-height: 68px;
    }
    letter-spacing: -0.32px;

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 64px;
      }
    }
  }

  &.h2 {
    &:not(.customFontSize) {
      font-size: 48px;
    }
    &:not(.customLineHeight) {
      line-height: 50px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 48px;
      }
    }
  }

  &.h3 {
    &:not(.customFontSize) {
      font-size: 36px;
    }
    &:not(.customLineHeight) {
      line-height: 40px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 36px;
      }
    }
  }

  &.h4 {
    &:not(.customFontSize) {
      font-size: 28px;
    }
    &:not(.customLineHeight) {
      line-height: 32px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 28px;
      }
    }
  }

  &.h5 {
    &:not(.customFontSize) {
      font-size: 20px;
    }
    &:not(.customLineHeight) {
      line-height: 24px;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 20px;
      }
    }
  }

  &.h6 {
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

  &.subtitle-1 {
    font-family: "Circular Std", sans-serif;
    &:not(.customFontSize) {
      font-size: 16px;
    }
    &:not(.customLineHeight) {
      line-height: 24px;
    }
    &:not(.customFontWeight) {
      font-weight: 500;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 16px;
      }
    }
  }

  &.subtitle-2,
  &.subhead {
    font-family: "Circular Std", sans-serif;
    &:not(.customFontSize) {
      font-size: 14px;
    }
    &:not(.customLineHeight) {
      line-height: 20px;
    }
    &:not(.customFontWeight) {
      font-weight: 500;
    }

    &.equal-line-height {
      &:not(.customLineHeight) {
        line-height: 14px;
      }
    }
  }
}
</style>

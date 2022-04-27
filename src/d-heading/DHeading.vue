<template>
  <d-box
    class="ui-heading"
    :class="{
      [scale]: scale,
      [is]: is,
      uppercase,
      'equal-line-height': equalLineHeight,
      my0,
    }"
    :is="is"
  >
    <slot></slot>
  </d-box>
</template>

<script>
import { I } from "../../storybook-static/assets/vendor.d9bc8a8b";
import DBox from "../d-box/DBox.vue";
export default {
  name: "DHeading",
  props: {
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
    uppercase: {
      type: Boolean,
    },
    equalLineHeight: {
      type: Boolean,
    },
    my0: {
      type: Boolean,
    },
  },
  components: {
    DBox,
  },
};
</script>

<style lang="scss">
.ui-heading {
  font-weight: bold;
  font-family: "Hero New", sans-serif;
  &.my0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  &.h1 {
    font-size: 64px;
    line-height: 68px;
    letter-spacing: -0.32px;

    &.equal-line-height {
      line-height: 64px;
    }
  }

  &.h2 {
    font-size: 48px;
    line-height: 50px;

    &.equal-line-height {
      line-height: 48px;
    }
  }

  &.h3 {
    font-size: 36px;
    line-height: 40px;

    &.equal-line-height {
      line-height: 36px;
    }
  }

  &.h4 {
    font-size: 28px;
    line-height: 32px;

    &.equal-line-height {
      line-height: 28px;
    }
  }

  &.h5 {
    font-size: 20px;
    line-height: 24px;

    &.equal-line-height {
      line-height: 20px;
    }
  }

  &.h6 {
    font-size: 16px;
    line-height: 24px;

    &.equal-line-height {
      line-height: 16px;
    }
  }

  &.subtitle-1 {
    font-family: "Circular Std", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    &.equal-line-height {
      line-height: 16px;
    }
  }

  &.subtitle-2,
  &.subhead {
    font-family: "Circular Std", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    &.equal-line-height {
      line-height: 14px;
    }
  }
}
</style>

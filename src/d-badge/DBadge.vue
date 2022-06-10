<template>
  <d-box
    :class="{
      [`color-scheme__${colorScheme}`]: true,
      subtle,
      [`size__${size}`]: true,
    }"
    class="ui-badge"
  >
    <d-text
      :equalLineHeight="size === 'large' ? true : false"
      class="ui-badge__text"
      :scale="size === 'large' ? 'footnote' : 'overline'"
    >
      <span v-if="text">{{ text }}</span>
      <slot v-else></slot>
    </d-text>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
export default {
  name: "DBadge",
  components: {
    DBox,
    DText,
  },
  props: {
    colorScheme: {
      type: String,
      validator: (value) =>
        ["neutral", "green", "red", "yellow", "cyan", "blue"].includes(value),
      default: "neutral",
    },
    subtle: {
      type: Boolean,
    },
    size: {
      type: String,
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-badge {
  display: inline-block;
  border-radius: 900000000px;
  padding: 2px 8px;
  color: white;
}

.ui-badge__text {
  margin: 0;
}

.ui-badge {
  &.size__small {
    padding: 2px 8px;
  }

  &.size__medium,
  &.size__large {
    padding: 4px 8px;
  }

  &.color-scheme__neutral {
    background: #8895a7;
  }

  &.color-scheme__green {
    background: #00b058;
  }

  &.color-scheme__red {
    background: #d62f4b;
  }

  &.color-scheme__yellow {
    background: #ff9505;
  }

  &.color-scheme__cyan {
    background: #0c9ccc;
  }

  &.color-scheme__blue {
    background: #0d7fe9;
  }

  &.subtle {
    &.color-scheme__neutral {
      color: #212934;
      background: #e1e7ec;
    }

    &.color-scheme__green {
      color: #158957;
      background: #c4efdf;
    }

    &.color-scheme__red {
      color: #842432;
      background: #fcc5ce;
    }

    &.color-scheme__yellow {
      color: #e08304;
      background: #fff0db;
    }

    &.color-scheme__cyan {
      color: #0b87b0;
      background: #bdf3fc;
    }

    &.color-scheme__blue {
      color: #0059ac;
      background: #ddefff;
    }
  }
}
</style>

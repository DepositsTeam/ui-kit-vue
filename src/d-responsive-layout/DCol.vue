<template>
  <d-box
    class="ui-responsive__col"
    :class="{
      [`ui-responsive__col-xs-${computedXS}`]: computedXS,
      [`ui-responsive__col-sm-${computedSM}`]: computedSM,
      [`ui-responsive__col-md-${computedMD}`]: computedMD,
      [`ui-responsive__col-lg-${computedLG}`]: computedLG,
      [`ui-responsive__col-xl-${computedXL}`]: computedXL,
      [`ui-responsive__col-xxl-${computedXXL}`]: computedXXL,
      [`ui-responsive__offset-xs-${computedOffsetXS}`]: computedOffsetXS,
      [`ui-responsive__offset-sm-${computedOffsetSM}`]: computedOffsetSM,
      [`ui-responsive__offset-md-${computedOffsetMD}`]: computedOffsetMD,
      [`ui-responsive__offset-lg-${computedOffsetLG}`]: computedOffsetLG,
      [`ui-responsive__offset-xl-${computedOffsetXL}`]: computedOffsetXL,
      [`ui-responsive__offset-xxl-${computedOffsetXXL}`]: computedOffsetXXL,
      [`ui-responsive__order-xs-${computedOrderXS}`]: computedOrderXS,
      [`ui-responsive__order-sm-${computedOrderSM}`]: computedOrderSM,
      [`ui-responsive__order-md-${computedOrderMD}`]: computedOrderMD,
      [`ui-responsive__order-lg-${computedOrderLG}`]: computedOrderLG,
      [`ui-responsive__order-xl-${computedOrderXL}`]: computedOrderXL,
      [`ui-responsive__order-xxl-${computedOrderXXL}`]: computedOrderXXL,
    }"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { computed } from "vue";

const props = defineProps({
  xs: {
    type: [Number, Object],
    default: 12,
  },
  sm: {
    type: [Number, Object],
    default: 12,
  },
  md: {
    type: [Number, Object],
    default: 12,
  },
  lg: {
    type: [Number, Object],
  },
  xl: {
    type: [Number, Object],
  },
  xxl: {
    type: [Number, Object],
  },
  offsetXs: {
    type: [Number, Object],
  },
  offsetSm: {
    type: [Number, Object],
  },
  offsetMd: {
    type: [Number, Object],
  },
  offsetLg: {
    type: [Number, Object],
  },
  offsetXl: {
    type: [Number, Object],
  },
  offsetXxl: {
    type: [Number, Object],
  },
  orderXs: {
    type: [Number, Object],
  },
  orderSm: {
    type: [Number, Object],
  },
  orderMd: {
    type: [Number, Object],
  },
  orderLg: {
    type: [Number, Object],
  },
  orderXl: {
    type: [Number, Object],
  },
  orderXxl: {
    type: [Number, Object],
  },
});

const computedXS = computed(() =>
  props.xs
    ? typeof props.xs === "object"
      ? props.xs.span
      : props.xs
    : undefined
);

const computedSM = computed(() =>
  props.sm
    ? typeof props.sm === "object"
      ? props.sm.span
      : props.sm
    : undefined
);

const computedMD = computed(() =>
  props.md
    ? typeof props.md === "object"
      ? props.md.span
      : props.md
    : undefined
);

const computedLG = computed(() =>
  props.lg
    ? typeof props.lg === "object"
      ? props.lg.span
      : props.lg
    : undefined
);

const computedXL = computed(() =>
  props.xl
    ? typeof props.xl === "object"
      ? props.xl.span
      : props.xl
    : undefined
);

const computedXXL = computed(() =>
  props.xxl
    ? typeof props.xxl === "object"
      ? props.xxl.span
      : props.xxl
    : undefined
);

const computedOffsetXS = computed(() =>
  props.offsetXs
    ? props.offsetXs
    : props.xs && props.xs.offset
    ? props.xs.offset
    : undefined
);

const computedOffsetSM = computed(() =>
  props.offsetSm
    ? props.offsetSm
    : props.sm && props.sm.offset
    ? props.sm.offset
    : undefined
);

const computedOffsetMD = computed(() =>
  props.offsetMd
    ? props.offsetMd
    : props.md && props.md.offset
    ? props.md.offset
    : undefined
);

const computedOffsetLG = computed(() =>
  props.offsetLg
    ? props.offsetLg
    : props.lg && props.lg.offset
    ? props.lg.offset
    : undefined
);

const computedOffsetXL = computed(() =>
  props.offsetXl
    ? props.offsetXl
    : props.xl && props.xl.offset
    ? props.xl.offset
    : undefined
);

const computedOffsetXXL = computed(() =>
  props.offsetXxl
    ? props.offsetXxl
    : props.xxl && props.xxl.offset
    ? props.xxl.offset
    : undefined
);

const computedOrderXS = computed(() =>
  props.orderXs
    ? props.orderXs
    : props.xs && props.xs.order
    ? props.xs.order
    : undefined
);

const computedOrderSM = computed(() =>
  props.orderSm
    ? props.orderSm
    : props.sm && props.sm.order
    ? props.sm.order
    : undefined
);

const computedOrderMD = computed(() =>
  props.orderMd
    ? props.orderMd
    : props.md && props.md.order
    ? props.md.order
    : undefined
);

const computedOrderLG = computed(() =>
  props.orderLg
    ? props.orderLg
    : props.lg && props.lg.order
    ? props.lg.order
    : undefined
);

const computedOrderXL = computed(() =>
  props.orderXl
    ? props.orderXl
    : props.xl && props.xl.order
    ? props.xl.order
    : undefined
);

const computedOrderXXL = computed(() =>
  props.orderXxl
    ? props.orderXxl
    : props.xxl && props.xxl.order
    ? props.xxl.order
    : undefined
);
</script>

<style lang="scss">
@use "sass:map";
@import "../scss/variables";

$breakpoints: "xs", "sm", "md", "lg", "xl", "xxl";

.ui-responsive__col {
  display: flex;
  flex-direction: column;

  flex: 1 0 0%;
  max-width: 100%;
  padding-left: 0;
  margin-left: 0;
  margin-right: 0;
  padding-right: 0;
  padding-bottom: var(--d-gutter-y);

  @each $breakpoint in $breakpoints {
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, $breakpoint)) {
      @for $i from 1 through 12 {
        &.ui-responsive__col-#{$breakpoint}-#{$i} {
          flex: 0 0 auto;
        }
        &.ui-responsive__offset-#{$breakpoint}-#{$i} {
          margin-left: calc($i / 12 * 100%);
        }
        &.ui-responsive__order-#{$breakpoint}-#{$i} {
          order: #{$i};
        }
        &.ui-responsive__order-first {
          order: -1;
        }
        &.ui-responsive__offset-last {
          order: 13;
        }
        @if $i == 12 {
          &.ui-responsive__col-#{$breakpoint}-#{$i} {
            width: calc($i / 12 * 100%);
          }
        } @else {
          &.ui-responsive__col-#{$breakpoint}-#{$i} {
            width: calc($i / 12 * 100% - (var(--d-gutter-x) * 0.5));
          }
        }
      }
    }
  }
  //@for $i from 1 through 12 {
  //  &.ui-responsive__col-xs-#{$i} {
  //    flex: 0 0 calc($i / 12 * 100%);
  //  }
  //  &.ui-responsive__offset-xs-#{$i} {
  //    margin-left: calc($i / 12 * 100%);
  //  }
  //}
  //@media only screen and (min-width: map.get($responsive-layout-breakpoints, "sm")) {
  //  @for $i from 1 through 12 {
  //    &.ui-responsive__col-sm-#{$i} {
  //      flex: 0 0 calc($i / 12 * 100%);
  //      padding-left: var(--gutter-x);
  //      padding-right: var(--gutter-x);
  //    }
  //  }
  //}
  //@media only screen and (min-width: map.get($responsive-layout-breakpoints, "md")) {
  //  @for $i from 1 through 12 {
  //    &.ui-responsive__col-md-#{$i} {
  //      flex: 0 0 calc($i / 12 * 100%);
  //      padding-left: var(--gutter-x);
  //      padding-right: var(--gutter-x);
  //    }
  //  }
  //}
  //@media only screen and (min-width: map.get($responsive-layout-breakpoints, "lg")) {
  //  @for $i from 1 through 12 {
  //    &.ui-responsive__col-lg-#{$i} {
  //      flex: 0 0 calc($i / 12 * 100%);
  //      padding-left: var(--gutter-x);
  //      padding-right: var(--gutter-x);
  //    }
  //  }
  //}
  //@media only screen and (min-width: map.get($responsive-layout-breakpoints, "xl")) {
  //  @for $i from 1 through 12 {
  //    &.ui-responsive__col-xl-#{$i} {
  //      flex: 0 0 calc($i / 12 * 100%);
  //      padding-left: var(--gutter-x);
  //      padding-right: var(--gutter-x);
  //    }
  //  }
  //}
  //@media only screen and (min-width: map.get($responsive-layout-breakpoints, "xxl")) {
  //  @for $i from 1 through 12 {
  //    &.ui-responsive__col-xxl-#{$i} {
  //      flex: 0 0 calc($i / 12 * 100%);
  //      padding-left: var(--gutter-x);
  //      padding-right: var(--gutter-x);
  //    }
  //  }
  //}
}
</style>

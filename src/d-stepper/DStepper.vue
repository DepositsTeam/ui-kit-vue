<template>
  <d-box
    class="ui-stepper"
    :style="{
      '--spacing': props.spacing,
      '--indicator-size': props.indicatorSize,
      ...d__theme,
    }"
  >
    <d-box
      v-for="(step, index) in steps"
      :key="`step-${index}`"
      class="ui-step"
      :class="{
        active: currentStep === index,
        completed: currentStep > index,
        todo: currentStep < index,
        last: index === steps.length - 1,
      }"
    >
      <d-box
        class="ui-step__indicator"
        :class="{
          active: currentStep === index,
          completed: currentStep > index,
          todo: currentStep < index,
          last: index === steps.length - 1,
        }"
      >
        <check-outline-icon class="indicator-icon" v-if="currentStep > index" />
      </d-box>
      <slot :name="`step.${index}`">
        <d-text margin-y="0" :font-size="fontSize">{{
          typeof step === "string" ? step : step.text
        }}</d-text>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, CheckOutlineIcon } from "../main";
import { inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
const d__theme = inject("d__theme", defaultThemeVars);

const props = defineProps({
  steps: {
    type: Array,
  },
  currentStep: {
    type: Number,
    default: 0,
  },
  fontSize: {
    type: String,
    default: "14px",
  },
  spacing: {
    type: String,
    default: "50px",
  },
  indicatorSize: {
    type: String,
    default: "20px",
  },
});
</script>

<style lang="scss" scoped>
.ui-stepper {
  .ui-step {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing);
    .ui-step__indicator {
      display: flex;
      border: 1.5px solid #bdf3fc;
      background: #f2fafc;
      height: var(--indicator-size);
      width: var(--indicator-size);
      border-radius: 50%;
      margin-right: 12px;
      position: relative;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      &.dark_mode {
        background: var(--dark-input-background-color);
        border-color: var(--dark-primary-800);
      }
      &.active {
        &::before {
          content: "";
          height: 8px;
          width: 8px;
          display: flex;
          border-radius: 50%;
          background: var(--light-primary-action-color);
        }
      }
      &.completed {
        color: var(--light-primary-action-color);
        .indicator-icon {
          height: 12px;
          width: 12px;
        }
      }
      &:not(.last) {
        &::after {
          content: "";
          height: var(--spacing);
          width: 1px;
          background: #e1e7ec;
          left: calc(var(--indicator-size) / 2 - 2px);
          top: calc(var(--indicator-size) - 1px);
          position: absolute;
        }
        &.dark_mode {
          &::after {
            background: #202b3c;
          }
        }
      }
    }
    .ui-text {
      font-weight: 500;
      &.dark_mode {
        color: #cbd5e1;
      }
    }
    &.todo {
      .ui-text {
        color: #8895a7;
        font-weight: 400;
        &.dark_mode {
          color: #64748b;
        }
      }
    }
    &.completed {
      .ui-text {
        color: #8895a7;
        font-weight: 400;
        &.dark_mode {
          color: #64748b;
        }
      }
    }
  }
}
</style>

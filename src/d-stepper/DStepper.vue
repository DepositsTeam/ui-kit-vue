<template>
  <d-box
    class="ui-stepper"
    :style="{
      '--spacing': spacing,
      '--indicator-size': indicatorSize,
      '--indicator-color': activeColorSpectrum['500'],
      '--indicator-color-border': activeColorSpectrum['200'],
      '--indicator-color-bg': activeColorSpectrum['100'],
      '--indicator-inactive-color': activeColorSpectrum['300'],
    }"
    :class="{ [scheme]: scheme }"
  >
    <d-box
      v-for="(step, index) in steps"
      :key="`step-${index}`"
      class="ui-step"
      :class="{
        active: !stepMode || currentStep === index,
        completed: stepMode && currentStep > index,
        todo: stepMode && currentStep < index,
        last: index === steps.length - 1,
        [scheme]: scheme,
      }"
    >
      <slot
        name="step-indicator"
        v-bind="typeof step === 'object' ? step : { step: step }"
      >
        <d-box
          class="ui-step__indicator"
          :class="{
            active: !stepMode || currentStep === index,
            completed: stepMode && currentStep > index,
            todo: stepMode && currentStep < index,
            last: index === steps.length - 1,
            [scheme]: scheme,
            activeColor,
          }"
        >
          <check-outline-icon
            class="indicator-icon"
            v-if="currentStep > index"
          />
        </d-box>
      </slot>

      <d-box class="ui-step__content">
        <slot name="step" v-bind="typeof step === 'object' ? step : {}">
          <d-text
            class="ui-step__content-title"
            margin-bottom="4px"
            margin-top="0"
            :font-size="fontSize"
            >{{ typeof step === "string" ? step : step.text }}
          </d-text>
          <d-text
            margin-y="0"
            scale="footnote"
            v-if="typeof step !== 'string' && step.description"
            color="#878B9A"
            font-weight="450"
            v-html="step.description"
          >
          </d-text>
        </slot>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { CheckOutlineIcon, DBox, DText } from "../main";
import { generateColorSpectrum } from "@/utils/colorManager";
import { computed } from "vue";

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
  scheme: {
    type: String,
    validator: (value) => ["variant-1", "variant-2"].includes(value),
    default: "variant-1",
  },
  activeColor: {
    type: String,
    default: "#2A2E33",
  },
  stepMode: {
    type: Boolean,
    default: true,
  },
  hideTicks: {
    type: Boolean,
    default: false,
  },
});

const activeColorSpectrum = computed(() =>
  generateColorSpectrum(props.activeColor, "")
);
</script>

<style lang="scss" scoped>
.ui-transaction-timeline {
  display: flex;
  flex-direction: column;

  .ui-step {
    display: inline-flex;
    align-items: flex-start;
    padding-bottom: 30px;
    min-height: var(--spacing);
    position: relative;

    &:not(.last) {
      &::after {
        content: "";
        height: calc(100% - var(--indicator-size) - 16px);
        width: 1px;
        background: #e1e7ec;
        left: calc((var(--indicator-size) / 2 - 1px));
        top: calc(var(--indicator-size) + 8px);
        position: absolute;
      }

      &.variant-2 {
        &::after {
          background: repeating-linear-gradient(
            to bottom,
            #e1e7ec 0px 3px,
            transparent 6px 9px
          );
        }

        &.dark_mode::after {
          background: repeating-linear-gradient(
            to bottom,
            #202b3c 0px 3px,
            transparent 6px 9px
          );
        }
      }

      &.dark_mode {
        &::after {
          background: #202b3c;
        }
      }
    }

    .ui-step__indicator {
      display: inline-flex;
      border: 1.5px solid var(--indicator-color-border);
      flex-grow: 0;
      flex-shrink: 0;
      background: var(--indicator-color-bg);
      height: var(--indicator-size);
      width: var(--indicator-size);
      border-radius: 50%;
      margin-right: 12px;
      position: relative;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      z-index: 15;

      &.variant-2 {
        background: var(--indicator-color-bg);
        border: none;

        &::before {
          content: "";
          height: 8px;
          width: 8px;
          background: var(--indicator-inactive-color);
          border-radius: 50%;
        }

        &.completed {
          &::before {
            display: none;
          }
        }
      }

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
          background: var(--indicator-color);
        }

        &.activeColor {
          background: var(--indicator-color-bg);

          &::before {
            background: var(--indicator-color);
          }
        }
      }

      &.completed {
        color: var(--light-primary-action-color);

        &.activeColor {
          color: var(--indicator-color);
        }

        .indicator-icon {
          height: 13px;
          width: 13px;
        }
      }
    }

    .ui-text.ui-step__content-title {
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

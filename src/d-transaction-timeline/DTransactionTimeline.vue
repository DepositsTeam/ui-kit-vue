<template>
  <d-box
    class="ui-transaction-timeline"
    :style="{
      '--spacing': spacing,
      '--indicator-size': indicatorSize,
    }"
  >
    <d-box
      v-for="(step, index) in timeline"
      :key="`step-${index}`"
      class="ui-step"
      :class="{
        inactive: stepStatus(step) === 'inactive',
        completed: stepStatus(step) === 'completed',
        active: stepStatus(step) === 'active',
        successful: stepStatus(step) === 'successful',
        failed: stepStatus(step) === 'failed',
        pending: stepStatus(step) === 'pending',
        last: index === timeline.length - 1,
        dotted:
          index !== timeline.length - 1
            ? stepStatus(timeline[index + 1]) === 'inactive'
            : false,
      }"
    >
      <slot
        name="step-indicator"
        v-bind="typeof step === 'object' ? step : { step: step }"
      >
        <d-box
          class="ui-step__indicator"
          :class="{
            inactive: stepStatus(step) === 'inactive',
            completed: stepStatus(step) === 'completed',
            active: stepStatus(step) === 'active',
            successful: stepStatus(step) === 'successful',
            failed: stepStatus(step) === 'failed',
            pending: stepStatus(step) === 'pending',
            last: index === timeline.length - 1,
          }"
        >
          <check-outline-icon
            class="indicator-icon"
            v-if="
              stepStatus(step) === 'completed' ||
              stepStatus(step) === 'successful'
            "
          />
          <close-icon
            class="indicator-icon"
            v-if="stepStatus(step) === 'failed'"
          />
          <clock-filled-icon
            class="indicator-icon"
            v-if="stepStatus(step) === 'pending'"
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
            >{{ typeof step === "string" ? step : step.text }}</d-text
          >
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
import {
  DBox,
  DText,
  CheckOutlineIcon,
  CloseIcon,
  ClockFilledIcon,
} from "../main";
import { generateColorSpectrum } from "@/utils/colorManager";
import { computed } from "vue";

defineProps({
  timeline: {
    type: Array,
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

const validStatuses = [
  "active",
  "inactive",
  "failed",
  "successful",
  "pending",
  "completed",
];

const stepStatus = (step) => {
  if (step.status) {
    if (validStatuses.includes(step.status)) {
      return step.status;
    } else {
      return "inactive";
    }
  }
  return "inactive";
};
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

    &.inactive {
      .ui-text.ui-step__content-title {
        color: #6d7786;
      }
    }

    &.successful {
      .ui-text.ui-step__content-title {
        color: #00b058;
      }
    }

    &.failed {
      .ui-text.ui-step__content-title {
        color: #d62f4b;
      }
    }

    &.pending {
      .ui-text.ui-step__content-title {
        color: #6d7786;
      }
    }

    &:not(.last) {
      &::after {
        content: "";
        height: calc(100% - var(--indicator-size) - 16px);
        width: 1px;
        background: #00b058;
        left: calc((var(--indicator-size) / 2 - 1px));
        top: calc(var(--indicator-size) + 8px);
        position: absolute;
      }
      &.dotted {
        &::after {
          background: repeating-linear-gradient(
            to bottom,
            #e1e7ec 0px 3px,
            transparent 6px 9px
          );
        }
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

      .indicator-icon {
        height: 13px;
        width: 13px;
      }

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
      &.inactive {
        &::before {
          content: "";
          height: 8px;
          width: 8px;
          display: flex;
          border-radius: 50%;
          background: #b8c4ce;
        }
        background: #f5f8fa;
        border: none;
      }
      &.active {
        &::before {
          content: "";
          height: 8px;
          width: 8px;
          display: flex;
          border-radius: 50%;
          background: #00b058;
        }
        background: #dff6ee;
        border: none;
      }
      &.completed {
        background: #dff6ee;
        border: none;
        color: #00b058;
      }
      &.successful {
        background: #00b058;
        border: none;
        color: #fff;
      }
      &.failed {
        background: #d62f4b;
        border: none;
        color: #fff;
      }
      &.pending {
        background: #ffb44f;
        border: none;
        color: #fff;
      }
    }
    .ui-text.ui-step__content-title {
      font-weight: 500;

      &.dark_mode {
        color: #cbd5e1;
      }
    }
  }
}
</style>

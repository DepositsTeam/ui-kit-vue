<template>
  <d-box class="ui-action-list">
    <d-box class="ui-action-list__body__wrapper">
      <slot name="body">
        <d-box class="ui-action-list__body">
          <d-box class="ui-action-list__header__left">
            <slot name="title">
              <d-text
                font-face="heroNew"
                color="#000000"
                font-size="15px"
                margin-bottom="0"
                >{{ title }}
              </d-text>
            </slot>
            <slot name="description">
              <d-text font-size="13px" font-face="circularSTD"
                >{{ description }}
              </d-text>
            </slot>
          </d-box>
          <d-box class="ui-action-list__header__right">
            <slot name="subtitle">
              <d-text
                class="ui-action-list__subtitle-text"
                font-face="circularSTD"
                v-if="subtitle"
                >{{ subtitle }}
              </d-text>
            </slot>
            <slot name="list-action">
              <slot name="buttons">
                <d-button
                  colorScheme="neutral"
                  @click="emit('clicked')"
                  :size="buttonSize"
                  :smart-color="buttonSmartColor"
                  :color-scheme="buttonColorScheme"
                >
                  {{ buttonText }}
                </d-button>
              </slot>
            </slot>
          </d-box>
        </d-box>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DButton } from "@/main";

const emit = defineEmits(["clicked"]);
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonSize: {
    type: String,
    default: "large",
  },
  buttonColorScheme: {
    type: String,
  },
  buttonSmartColor: {
    type: String,
  },
});
</script>

<style scoped>
.ui-action-list {
  .ui-action-list__header__left {
    color: #8c97a7;
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: normal;
  }

  .ui-action-list__body__wrapper {
    .ui-action-list__body {
      display: flex;
      padding: 16px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border: 0.5px solid #e2e8f0;
      background: #fff;

      .ui-action-list__header__right {
        display: flex;
        align-items: center;
        gap: 16px;
        //flex-direction: column;

        .ui-action-list__subtitle-text {
          color: #8c97a7;
          font-size: 14px;
          font-style: normal;
          font-weight: 450;
          line-height: 24px; /* 171.429% */
        }
      }
    }
  }
}
</style>

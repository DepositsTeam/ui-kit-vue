<template>
  <d-box class="ui-action-list">
    <d-box class="ui-action-list__body__wrapper">
      <slot name="body">
        <d-box class="ui-action-list__body">
          <d-box
            class="ui-action-list__header__left"
            display="flex"
            align-items="center"
            gap="10px"
          >
            <slot name="icon">
              <d-box
                v-if="logo"
                class="ui-action-list__logo"
                is="img"
                :src="logo"
                :alt="title"
              ></d-box>
            </slot>
            <d-box>
              <slot name="title">
                <d-text
                  my0
                  font-face="circularSTD"
                  data-test="title"
                  color="#000000"
                  font-size="15px"
                  margin-bottom="0"
                  >{{ title }}
                </d-text>
              </slot>
              <slot name="description">
                <d-text
                  v-if="description"
                  font-size="13px"
                  margin-top="5px"
                  my0
                  data-test="description"
                  font-face="circularSTD"
                  >{{ description }}
                </d-text>
              </slot>
            </d-box>
          </d-box>
          <d-box class="ui-action-list__header__right">
            <slot name="subtitle">
              <d-text
                class="ui-action-list__subtitle-text"
                font-face="circularSTD"
                data-test="subtitle"
                v-if="subtitle"
                >{{ subtitle }}
              </d-text>
            </slot>
            <slot name="action">
              <d-button
                v-if="buttonText"
                @click="emit('clicked')"
                :size="buttonSize"
                :smart-color="buttonSmartColor"
                :color-scheme="buttonColorScheme"
              >
                {{ buttonText }}
              </d-button>
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
  logo: {
    type: String,
  },
  description: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  buttonText: {
    type: String,
  },
  buttonSize: {
    type: String,
    default: "large",
  },
  buttonColorScheme: {
    type: String,
    default: "default",
  },
  buttonSmartColor: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
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
        /**
        flex-direction: column;
         **/

        .ui-action-list__subtitle-text {
          color: #8c97a7;
          font-size: 14px;
          font-style: normal;
          font-weight: 450;
          line-height: 24px; /* 171.429% */
        }
      }

      .ui-action-list__logo {
        height: 32px;
        border-radius: 50%;
      }
    }
  }
}
</style>

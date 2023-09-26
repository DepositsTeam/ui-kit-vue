<template>
  <d-box class="ui-application__card">
    <d-box class="ui-header">
      <d-box class="ui-left">
        <d-text font-face="circularSTD">{{ label }}</d-text>
      </d-box>
      <d-box class="ui-right">
        <d-button
          colorScheme="primary"
          :left-icon="AddIcon"
          :size="size"
          @click="emit('newConnectionClicked')"
        >
          New connection
        </d-button>
      </d-box>
    </d-box>
    <d-box class="ui-body">
      <slot name="body">
        <d-box
          class="ui-card__body"
          v-for="(application, index) in applications"
          :key="`application__${index}`"
        >
          <d-box class="ui-left">
            <slot name="icon" v-bind="application">
              <d-box
                class="ui-logo"
                is="img"
                :src="application.logo"
                :alt="application.applicationName"
              ></d-box>
            </slot>
            <d-text>{{ application.applicationName }}</d-text>
          </d-box>
          <d-box class="ui-right">
            <d-text
              class="ui-text"
              font-face="circularSTD"
              v-if="application.dateConnected"
              >{{ application.dateConnected }}
            </d-text>
            <d-button
              colorScheme="neutral"
              @click="revokeAccess(application)"
              :size="size"
            >
              Revoke Access
            </d-button>
          </d-box>
        </d-box>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DButton, AddIcon } from "@/main";

const emit = defineEmits(["newConnectionClicked", "revokeAccessClicked"]);
defineProps({
  label: {
    type: String,
    required: true,
  },
  applications: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    default: "large",
  },
});

const revokeAccess = (application) => {
  emit("revokeAccessClicked", application);
};
</script>

<style scoped>
.ui-application__card {
  .ui-header {
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    border-radius: 8px 8px 0 0;
    border: 0.5px solid #e1e7ec;
    background: #fff;
    align-self: stretch;

    .ui-left {
      color: #8c97a7;
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
    }
  }

  .ui-body {
    .ui-card__body {
      display: flex;
      padding: 16px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border: 0.5px solid #e2e8f0;
      background: #fff;

      &:last-child {
        border-radius: 0 0 8px 8px;
      }

      .ui-left {
        display: flex;
        align-items: center;
        gap: 8px;

        .ui-logo {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .ui-right {
        display: flex;
        align-items: center;
        gap: 16px;

        .ui-text {
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

<template>
  <d-box class="action__card">
    <d-box class="header">
      <d-text class="title" font-face="circularSTD">Unpaid Invoices</d-text>
      <d-button color-scheme="outline" size="large">See all</d-button>
    </d-box>
    <d-box class="body">
      <d-box class="left">
        <d-text class="title" font-face="circularSTD">Overdue</d-text>
        <d-text class="text" font-face="circularSTD">16 ($41,350.56)</d-text>
      </d-box>
      <d-box class="right">
        <d-avatar
          :subtle="true"
          size="huge"
          :avatars="avatars"
          :stacked="true"
          :visible-avatars="4"
        ></d-avatar>
      </d-box>
    </d-box>
    <d-box class="footer">
      <d-button color-scheme="primary" size="large">
        Send reminder

        <template #rightIcon>
          <d-box class="right__icon">
            <setting2-filled-icon />
          </d-box>
        </template>
      </d-button>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAvatar, Setting2FilledIcon, DButton } from "@/main";
import copy from "copy-to-clipboard";
import { reactive, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  helperText: {
    type: String,
  },
  size: {
    type: String,
  },
});

const avatars = ref([
  {
    name: "John",
  },
  {
    name: "Nelly",
  },
  {
    name: "Saviour",
  },
  {
    name: "June",
  },
  {
    name: "Dave",
  },
  {
    name: "Nora",
  },
  {
    name: "Presh",
  },
  {
    name: "Master",
  },
]);
</script>

<style scoped>
.action__card {
  display: flex;
  padding: 11px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(63, 63, 68, 0.1);

  .header {
    display: flex;
    padding: 8px 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-bottom: 1px solid #e2e8f0;

    .title {
      color: #4f627d;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      text-transform: uppercase;
    }
  }

  .body {
    display: flex;
    padding: 0px 32px 16px 32px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    border-bottom: 0.5px solid #e1e7ec;

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .title {
        color: #8c97a7;
        font-size: 16px;
        font-style: normal;
        font-weight: 450;
        line-height: normal;
      }

      .text {
        color: #2a2e33;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }

  .footer {
    display: flex;
    padding: 10px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .right__icon {
      display: flex;
      height: 100%;
      width: 48px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      border-radius: 0px 6px 6px 0px;
      //border: 1px solid rgba(0, 0, 0, 0.05);
      //background: linear-gradient(
      //    0deg,
      //    rgba(0, 0, 0, 0.15) 0%,
      //    rgba(0, 0, 0, 0.15) 100%
      //  ),
      //  var(--light);
      //box-shadow: 0px 1px 0px 0px rgba(27, 31, 35, 0.05);
    }
  }
}

p {
  margin: 0;
}
</style>
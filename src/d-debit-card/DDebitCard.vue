<template>
  <d-box class="ui-d-debitcard__wrapper">
    <d-box
      class="ui-d-debitcard"
      :style="{ '--width': width }"
      @click="toggleHidden"
    >
      <d-box height="100%" display="flex" justify-content="space-between">
        <d-box
          display="flex"
          flex-direction="column"
          justify-content="space-between"
        >
          <d-box>
            <d-box is="img" class="ui-d-debitcard__logo" :src="logo" alt="" />
          </d-box>
          <d-box>
            <d-box is="img" class="ui-d-debitcard__rfid" :src="rfid" alt="" />
          </d-box>
          <d-box>
            <d-text class="ui-d-debitcard__cardno ocrb" my0>{{
              computedCardNo
            }}</d-text>
            <d-box class="card__row" display="flex">
              <d-text class="ui-d-debitcard__exp ocrb" my0
                >EXP: {{ computedExp }}</d-text
              >
              <d-text class="ui-d-debitcard__cvv ocrb" my0
                >CVV: {{ computedCVV }}</d-text
              >
            </d-box>
            <d-text class="ui-d-debitcard__name ocrb" uppercase my0>{{
              name
            }}</d-text>
          </d-box>
        </d-box>
        <d-box class="ui-d-debitcard__column">
          <d-box class="ui-d-debitcard__brand" is="img" :src="cardBrand" />
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import rfid from "./rfid.svg";
import debitCardProps from "@/utils/props/debitCardProps";

import { useDebitCard } from "@/utils/composables/useDebitCard";

const props = defineProps({
  ...debitCardProps,
  width: {
    type: String,
    default: "336px",
  },
  enableHiding: {
    type: Boolean,
    default: true,
  },
});

const { computedCardNo, computedExp, computedCVV, cardBrand, toggleHidden } =
  useDebitCard(props);
</script>

<style scoped lang="scss">
@import url("https://assets.ondeposits.com/fonts/css/Ocrb.css");
.ui-d-debitcard__wrapper {
  .ui-d-debitcard {
    background: linear-gradient(112.27deg, #0c258f 0.01%, #2843b4 98.37%);
    backdrop-filter: blur(4px);
    aspect-ratio: 25 / 16;
    width: var(--width);
    border-radius: 18px;
    padding: 17px;
    cursor: pointer;
    .ui-d-debitcard__logo {
      height: calc(((var(--width) / 1.5625) / 100) * 8);
    }
    .ui-d-debitcard__rfid {
      height: calc(((var(--width) / 1.5625) / 100) * 16);
      height: calc(((var(--width) / 1.5625) / 100) * 16);
    }
  }
  .ui-d-debitcard__brand {
    width: calc((var(--width) / 100) * 18);
  }
  .ui-d-debitcard__column {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .ocrb {
    font-family: "Ocrb", sans-serif;
  }
  .ui-d-debitcard__cardno {
    font-size: 16px;
    margin-bottom: 8px;
    color: white;
    letter-spacing: 1px;
  }
  .ui-d-debitcard__exp,
  .ui-d-debitcard__cvv {
    font-size: 12px;
    color: white;
  }
  .ui-d-debitcard__name {
    font-size: 14px;
    color: white;
  }
  .card__row {
    margin-bottom: 16px;
    & > :first-child {
      margin-right: 8px;
    }
  }
}
</style>

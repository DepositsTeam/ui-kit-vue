<template>
  <d-box
    class="d-debit-card-balance"
    :class="[`theme__${theme}`]"
    :style="{ '--width': width }"
    @click="toggleHidden"
  >
    <d-box
      padding="20px 24px"
      display="flex"
      justify-content="space-between"
      align-items="center"
    >
      <d-text
        my0
        uppercase
        font-size="14px"
        class="d-debit-card-balance__name ocrb"
        >{{ name }}</d-text
      >
      <d-box
        class="d-debit-card-balance__logo"
        is="img"
        :src="computedLogo"
        alt=""
      />
    </d-box>
    <d-box padding-x="24px">
      <d-text
        font-face="circularSTD"
        font-weight="600"
        class="d-debit-card-balance__balance"
        my0
        >{{ computedBalance }}</d-text
      >
      <d-text
        my0
        font-size="11px"
        letter-spacing="0.5px"
        font-face="circularSTD"
        class="d-debit-card-balance__available-balance"
        font-weight="400"
        >Available Balance</d-text
      >
    </d-box>
    <d-box
      display="flex"
      justify-content="space-between"
      align-items="center"
      padding-x="24px"
      border-top="1px solid"
      :border-color="theme === 'light' ? '#F1F5F9' : '#202B3C'"
    >
      <d-box>
        <d-text class="d-debit-card-balance__detail">Card number</d-text>
        <d-text class="d-debit-card-balance__detail-value">{{
          computedCardNo
        }}</d-text>
      </d-box>
      <d-box>
        <d-text class="d-debit-card-balance__detail">Exp</d-text>
        <d-text class="d-debit-card-balance__detail-value">{{
          computedExp
        }}</d-text>
      </d-box>
      <d-box>
        <d-text class="d-debit-card-balance__detail">CVV</d-text>
        <d-text class="d-debit-card-balance__detail-value">{{
          computedCVV
        }}</d-text>
      </d-box>
      <d-box>
        <d-box
          class="d-debit-card-balance__card-brand"
          is="img"
          :src="cardBrand"
          alt=""
        />
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { CardBrands } from "../utils/debitCardUtils";
import { computed } from "vue";
import { useDebitCard } from "../utils/composables/useDebitCard";
import number_format from "../utils/number_format";

const props = defineProps({
  logo: {
    type: String,
  },
  cardNo: {
    type: String,
    default: "5399415874124589",
  },
  exp: {
    type: String,
    default: "10/25",
  },
  cvv: {
    type: String,
    default: "123",
  },
  name: {
    type: String,
    default: "Eric Aprioku",
  },
  brand: {
    type: String,
    validator: (value) => CardBrands.includes(value),
    default: "mastercard",
  },
  width: {
    type: String,
    default: "336px",
  },
  balance: {
    type: [Number, String],
    default: 12680,
  },
  theme: {
    type: String,
    validator: (value) => ["dark", "light"].includes(value),
    default: "light",
  },
});

const computedLogo = computed(() => {
  if (props.logo) return props.logo;
  else {
    return `https://assets.ondeposits.com/img/logo/renapay/svg/logo_all_${
      props.theme === "light" ? "dark" : "white"
    }.svg`;
  }
});

const { computedCardNo, computedExp, computedCVV, cardBrand, toggleHidden } =
  useDebitCard(props);

const computedBalance = computed(() => {
  return `$${number_format(props.balance, 2)}`;
});
</script>

<style scoped lang="scss">
@import url("https://assets.ondeposits.com/fonts/css/Ocrb.css");
.d-debit-card-balance {
  width: var(--width);
  aspect-ratio: 25 / 16;
  border-radius: 18px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &.theme__light {
    background: #fefefe;
    border: 0.5px solid #f1f5f9;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    .d-debit-card-balance__name {
      color: #64748b;
    }
    .d-debit-card-balance__balance {
      color: #121a26;
    }
    .d-debit-card-balance__available-balance {
      color: #8895a7;
    }
    .d-debit-card-balance__detail {
      color: #525964;
    }
  }
  &.theme__dark {
    background: #121a26;
    border: 0.5px solid #202b3c;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    .ui-text {
      color: white;
    }
    .d-debit-card-balance__name {
      color: #94a3b8;
    }
    .d-debit-card-balance__balance {
      color: #fff;
    }
    .d-debit-card-balance__available-balance {
      color: #8895a7;
    }
    .d-debit-card-balance__detail {
      color: #8895a7;
    }
  }
  .ocrb {
    font-family: "Ocrb", sans-serif;
  }
  .d-debit-card-balance__logo {
    height: 18px;
  }
  .d-debit-card-balance__balance {
    font-size: 28px;
  }
  .d-debit-card-balance__detail {
    font-size: 11px;
    letter-spacing: 0.5px;
    color: #8895a7;
    margin-bottom: 4px;
    font-family: "Circular Std", sans-serif;
  }
  .d-debit-card-balance__detail-value {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
    margin-top: 0;
    font-family: "Circular Std", sans-serif;
  }
  .d-debit-card-balance__card-brand {
    width: 32px;
  }
}
</style>

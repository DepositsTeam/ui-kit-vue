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
import { ref, computed } from "vue";
import rfid from "./rfid.svg";
import logo from "./Logo.svg";
import { BRAND_ALIAS } from "../d-card-input-field/card-brands";
import CardBrands from "./CardBrands";

const hidden = ref(true);
const props = defineProps({
  logo: {
    type: String,
    default: logo,
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
});

const toggleHidden = () => (hidden.value = !hidden.value);

const formatCardNo = (e) => {
  const value = e.replace(/\s/g, "");
  const parse = (type) => {
    let pseudoValue = "";
    for (let i = 0; i < value.length; i++) {
      pseudoValue += value.charAt(i);
      let strippedPseudoValue = pseudoValue.replace(/\s/g, "");
      if (type === BRAND_ALIAS.AMEX) {
        if (strippedPseudoValue.length === 4) {
          pseudoValue += " ";
        }
        if (strippedPseudoValue.length === 10) {
          pseudoValue += " ";
        }
      } else {
        if (strippedPseudoValue.length % 4 === 0) {
          pseudoValue += " ";
        }
      }
    }
    return pseudoValue.trim();
  };
  switch (value.charAt(0)) {
    case "5":
      return parse(BRAND_ALIAS.MASTERCARD);
    case "3":
      if (value.length >= 2) {
        if (value.charAt(1) == "4" || value.charAt(1) == "7") {
          return parse(BRAND_ALIAS.AMEX);
        } else {
          return parse(BRAND_ALIAS.NOCARD);
        }
      } else {
        return parse(BRAND_ALIAS.AMEX);
      }
    case "6":
      return parse(BRAND_ALIAS.DISCOVER);
    case "4":
      return parse(BRAND_ALIAS.VISACARD);
    default:
      return parse(BRAND_ALIAS.NOCARD);
  }
};

const starifyCard = (cardNo) => {
  const middle = cardNo.slice(4, -4).replace(/./g, "*");
  const first = cardNo.substring(0, 4);
  const last = cardNo.substring(cardNo.length - 4);
  return first + middle + last;
};

const computedCardNo = computed(() => {
  if (hidden.value) {
    return formatCardNo(starifyCard(props.cardNo));
  } else {
    return formatCardNo(props.cardNo);
  }
});

const computedExp = computed(() => {
  if (hidden.value) {
    return props.exp
      .split("/")
      .map((item) => item.replace(/./g, "*"))
      .join("/");
  } else {
    return props.exp;
  }
});

const computedCVV = computed(() => {
  if (hidden.value) {
    return props.cvv.replace(/./g, "*");
  } else {
    return props.cvv;
  }
});

const cardBrand = computed(() => {
  return `https://assets.ondeposits.com/img/debit-card-brands/svg/${props.brand}_light.svg`;
});
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

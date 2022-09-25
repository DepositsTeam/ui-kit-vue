<template>
  <d-box :class="`size__${size}`" class="ui-text-field__wrapper heroNew">
    <d-box
      is="label"
      :class="labelClass"
      :font-face="labelFontFace"
      class="ui-text-field__label"
      scale="subhead"
    >
      <d-text class="ui-card-input-field__label" scale="subhead">{{
        label
      }}</d-text>
    </d-box>
    <d-box class="ui-card-input-field__input-wrapper">
      <d-box
        class="ui-card-input-field__pseudo-input"
        :class="{ focus: pseudoCardInputIsFocused, hasError: errorMessage }"
        ref="pseudoInput"
      >
        <d-box>
          <CardIcon
            :smart-color="d__theme['--light-primary-action-color']"
            class="ui-card-input-field__left-icon"
            v-if="selectedCard === -1"
            width="24"
            height="24"
          />
          <img
            v-else
            :src="CardBrands[selectedCard].src"
            :alt="CardBrands[selectedCard].brand"
            class="ui-card-input-field__left-icon"
          />
        </d-box>

        <d-box class="ui-card-input-field__inputs">
          <d-box
            is="input"
            class="ui-card-input-field__card-no has-left-icon has-right-icon"
            placeholder="0000 0000 0000 0000"
            maxlength="19"
            :value="cardNoDisplay"
            @focus="handleCardNoFocus"
            @blur="handleCardNoBlur"
            @keypress="handleCardNoKeyPress"
            @keydown="handleCardNoKeyDown"
            @change="handleCardNoChange"
            @input="handleCardNoInput"
            ref="cardNoInput"
          />
          <d-box class="ui-card-input__pushed-right">
            <d-box
              is="input"
              class="ui-card-input-field__exp"
              placeholder="MM/YY"
              maxlength="5"
              :value="cardExp"
              @focus="handleCardExpFocus"
              @blur="handleCardExpBlur"
              @keypress="allowOnlyNumbers"
              @input="handleCardExpInput"
              ref="cardExpInput"
            />
            <d-box
              is="input"
              class="ui-card-input-field__cvv"
              maxlength="3"
              placeholder="CVV"
              @input="$emit('update:cardCvv', $event.target.value)"
              :value="cardCvv"
              @focus="handleCardCVVFocus"
              @blur="handleCardCVVBlur"
              ref="cardCVCInput"
            />
            <ScanCardIcon
              smart-color="#B8C4CE"
              class="ui-card-input-field__right-icon"
            />
          </d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="errorMessage" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
      <d-text
        class="ui-card-input-field__error-text"
        scale="subhead"
        font-face="circularSTD"
      >
        {{ errorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, ScanCardIcon, CardIcon, ErrorIcon } from "../main";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import CardBrands, { BRAND_ALIAS } from "./card-brands";
import inputProps from "../utils/inputProps";
import { ref, inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";

const d__theme = inject("d__theme", defaultThemeVars);

const props = defineProps({
  ...inputProps,
  cardCvv: {
    type: String,
    default: "",
  },
  cardExp: {
    type: String,
    default: "",
  },
  cardNo: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:cardNo", "update:cardCvv", "update:cardExp"]);

const cardExpInput = ref(null);
const pseudoInput = ref(null);
const cardNoInput = ref(null);
const cardCVCInput = ref(null);

const selectedCard = ref(-1);
const cardNoDisplay = ref("");
const targetPosition = ref(null);
const pseudoCardInputIsFocused = ref(false);

const handleCardCVVBlur = () => (pseudoCardInputIsFocused.value = false);

const handleCardCVVFocus = () => (pseudoCardInputIsFocused.value = true);

const handleCardExpBlur = () => (pseudoCardInputIsFocused.value = false);

const handleCardExpFocus = () => (pseudoCardInputIsFocused.value = true);

const handleCardExpInput = (e) => {
  emit("update:cardExp", e.target.value);
  const value = e.target.value;
  if (value.length === 2) {
    if (value > 12 || !isFinite(value)) {
      e.preventDefault();
      return;
    } else {
      emit("update:cardExp", `${value}/`);
      e.target.value = `${value}/`;
      return;
    }
  }
  if (value.length === 3) {
    if (value.charAt(2) !== "/" || value.substring(0, 2) > 12) {
      e.preventDefault();
      emit("update:cardExp", e.target.value.substring(0, 2));
      e.target.value = e.target.value.substring(0, 2);
      return;
    }
  }
  if (value.length === 1 && value === "/") {
    emit("update:cardExp", "");
    e.target.value = "";
  }
  if (value.length === 5) {
    e.preventDefault();
    cardCVCInput.value.$el.focus();
    return;
  }
};

const handleCardNoBlur = (e) => {
  e.preventDefault();
  pseudoCardInputIsFocused.value = false;
  const stringCardNo = props.cardNo + "";
  const strippedCardNo = stringCardNo.replace(/\s/g, "");
  if (selectedCard.value == BRAND_ALIAS.AMEX) {
    if (strippedCardNo.length === 15) {
      cardNoDisplay.value = `**** ${stringCardNo.substring(
        stringCardNo.length - 4
      )}`;
    }
  } else {
    if (strippedCardNo.length >= 16) {
      cardNoDisplay.value = `**** ${stringCardNo.substring(
        stringCardNo.length - 4
      )}`;
    }
  }
};

const handleCardNoChange = () => {
  setTimeout(() => {
    if (targetPosition.value !== null) {
      const position =
        targetPosition.value !== null
          ? targetPosition.value.key == "Backspace"
            ? targetPosition.value.pos - 1
            : targetPosition.value.pos
          : props.cardNo.length;
      cardNoInput.value.current.selectionStart =
        targetPosition.value !== null ? position : this.cardNo.length;
      cardNoInput.value.current.selectionEnd =
        targetPosition.value !== null ? position : this.cardNo.length;
      targetPosition.value = null;
    }
  });
};

const handleCardNoFocus = () => {
  pseudoCardInputIsFocused.value = true;
  cardNoDisplay.value = props.cardNo;
};

const handleCardNoInput = (e) => {
  const value = e.target.value.replace(/\s/g, "");
  const parse = (type) => {
    switch (type) {
      case BRAND_ALIAS.AMEX:
        cardNoInput.value.$el.setAttribute("maxlength", 17);
        cardCVCInput.value.$el.setAttribute("maxlength", 4);
        break;
      default:
        cardNoInput.value.$el.setAttribute("maxlength", 19);
        cardCVCInput.value.$el.setAttribute("maxlength", 3);
        break;
    }
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
      selectedCard.value = BRAND_ALIAS.MASTERCARD;
      emit("update:cardNo", parse(BRAND_ALIAS.MASTERCARD));
      cardNoDisplay.value = parse(BRAND_ALIAS.MASTERCARD);

      break;
    case "3":
      if (value.length >= 2) {
        if (value.charAt(1) == "4" || value.charAt(1) == "7") {
          selectedCard.value = BRAND_ALIAS.AMEX;
        } else {
          selectedCard.value = BRAND_ALIAS.NOCARD;
        }
      } else {
        selectedCard.value = BRAND_ALIAS.AMEX;
      }
      emit("update:cardNo", parse(BRAND_ALIAS.AMEX));
      cardNoDisplay.value = parse(BRAND_ALIAS.AMEX);

      break;
    case "6":
      selectedCard.value = BRAND_ALIAS.DISCOVER;
      emit("update:cardNo", parse(BRAND_ALIAS.DISCOVER));
      cardNoDisplay.value = parse(BRAND_ALIAS.DISCOVER);

      break;
    case "4":
      selectedCard.value = BRAND_ALIAS.VISACARD;
      emit("update:cardNo", parse(BRAND_ALIAS.VISACARD));
      cardNoDisplay.value = parse(BRAND_ALIAS.VISACARD);

      break;
    default:
      selectedCard.value = BRAND_ALIAS.NOCARD;
      emit("update:cardNo", parse(BRAND_ALIAS.NOCARD));
      cardNoDisplay.value = parse(null);
  }
};

const handleCardNoKeyDown = (e) => {
  if (e.key == "Backspace" || e.key == "Delete") {
    if (cardNoDisplay.value.length != e.target.selectionStart) {
      targetPosition.value = { pos: e.target.selectionStart, key: e.key };
    }
  }
};

const handleCardNoKeyPress = (e) => {
  allowOnlyNumbers(e);
  const strippedCardNo = cardNoDisplay.value.replace(/\s/g, "");

  if (
    e.key != "Backspace" &&
    e.key != "Delete" &&
    e.key != "ArrowUp" &&
    e.key != "ArrowLeft" &&
    e.key != "ArrowDown" &&
    e.key != "ArrowRight"
  ) {
    if (selectedCard.value === BRAND_ALIAS.AMEX) {
      if (strippedCardNo.length === 15) {
        e.preventDefault();
        cardNoInput.value.$el.blur();
        cardExpInput.value.$el.focus();
        return;
      }
    } else {
      if (strippedCardNo.length >= 16) {
        e.preventDefault();
        cardNoInput.value.$el.blur();
        cardExpInput.value.$el.focus();
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-card-input-field__wrapper {
  display: flex;
  flex-direction: column;
}
.ui-card-input-field__pseudo-input {
  background: #fff;
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
  border: 1px solid #ced6de;
  border-radius: 4px;
  font-family: "Circular Std", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 16px;
  color: #212934;
  display: flex;
  align-items: center;
  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }
  & * {
    font-family: "Circular Std", sans-serif;
    font-size: 16px;
  }
  &.hasError,
  &.hasError input {
    background: #fff0f2;
    border-color: #d62f4b;
  }
  &.focus:not(.hasError) {
    border-color: var(--light-primary-action-color);
    box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
  }
  &:hover:not(.hasError) {
    border-color: var(--light-primary-action-color);
  }
}
.ui-card-input-field__inputs {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.ui-card-input__pushed-right {
  display: flex;
}
.ui-card-input-field__pseudo-input input {
  border: none;
  &::placeholder {
    color: #b8c4ce;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &.dark_mode {
    background: transparent;
    color: #fff;
    &::placeholder {
      color: var(--dark-input-label-color);
    }
  }
}
.ui-card-input-field__cvv,
.ui-card-input-field__exp {
  width: 60px;
  background: transparent;
}
.ui-card-input-field__cvv {
  @media only screen and (max-width: 375px) {
    width: 40px;
  }
}
.ui-card-input-field__card-no {
  margin-right: 8px;
  @media only screen and (max-width: 500px) {
    width: 142px;
  }
  @media only screen and (max-width: 450px) {
    width: 122px;
  }
  @media only screen and (max-width: 400px) {
    width: 92px;
  }
  @media only screen and (min-width: 500px) {
    flex: 1;
  }
}
.ui-card-input-field__left-icon {
  margin-right: 8px;
  height: 24px;
}
.ui-card-input-field__right-icon {
  @media only screen and (max-width: 500px) {
    height: 24px;
  }
  @media only screen and (max-width: 375px) {
    height: 20px;
  }
  @media only screen and (max-width: 350px) {
    display: none;
  }
}
</style>

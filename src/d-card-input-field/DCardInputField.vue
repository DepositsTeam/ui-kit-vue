<template>
  <d-box
    :class="`size__${computedInputSize}`"
    class="ui-text-field__wrapper ui-card-input-field__wrapper heroNew"
  >
    <slot name="label">
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
    </slot>
    <d-box
      class="ui-card-input-field__input-wrapper"
      :class="`size__${computedInputSize}`"
    >
      <d-box
        class="ui-card-input-field__pseudo-input"
        :class="{
          focus: pseudoCardInputIsFocused,
          hasError: computedCardErrorMessage,
        }"
        ref="pseudoInput"
      >
        <d-box>
          <CardIcon
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
              @paste="handleCardExpInput"
              @change="handleCardExpInput"
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
              @keypress="allowOnlyNumbers"
              ref="cardCVCInput"
            />
            <ScanCardIcon
              v-if="!hideScanIcon"
              smart-color="#B8C4CE"
              class="ui-card-input-field__right-icon"
            />
          </d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="computedCardErrorMessage" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
      <d-text
        class="ui-card-input-field__error-text"
        scale="subhead"
        font-face="circularSTD"
        margin-y="0px"
      >
        {{ computedCardErrorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, ScanCardIcon, CardIcon, ErrorIcon } from "../main";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import CardBrands, { BRAND_ALIAS } from "./card-brands";
import inputProps from "../utils/inputProps";
import { ref, computed } from "vue";
import cardValidator from "card-validator";
import { useInputSize } from "../utils/composables/useInputSize";

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
  allowExpiredCardDateInExp: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "variant-1",
    validator: (value) => ["variant-1", "variant-2"].includes(value),
  },
  hideScanIcon: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:cardNo", "update:cardCvv", "update:cardExp"]);

const { computedInputSize } = useInputSize(props);

const cardExpInput = ref(null);
const pseudoInput = ref(null);
const cardNoInput = ref(null);
const cardCVCInput = ref(null);

const selectedCard = ref(-1);
const cardNoDisplay = ref("");
const targetPosition = ref(null);
const pseudoCardInputIsFocused = ref(false);

const cardNoError = ref(null);
const cardExpError = ref(null);
const cardCVCError = ref(null);

const handleCardCVVBlur = () => (pseudoCardInputIsFocused.value = false);

const handleCardCVVFocus = () => {
  if (cardNoError.value) {
    cardNoInput.value.$el.focus();
  } else if (cardExpError.value) {
    cardExpInput.value.$el.focus();
  } else {
    pseudoCardInputIsFocused.value = true;
  }
};

const handleCardExpBlur = () => (pseudoCardInputIsFocused.value = false);

const handleCardExpFocus = () => {
  if (cardNoError.value) {
    cardNoInput.value.$el.focus();
  } else if (cardCVCError.value) {
    cardCVCInput.value.$el.focus();
  } else {
    pseudoCardInputIsFocused.value = true;
  }
};

const handleCardExpInput = (e) => {
  let value;
  cardExpError.value = null;

  if (cardNoError.value) {
    cardNoInput.value.$el.focus();
  } else if (cardCVCError.value) {
    cardCVCInput.value.$el.focus();
  } else {
    if (e.type.toLowerCase() === "paste") {
      e.preventDefault();
      value = (e.clipboardData || window.clipboardData).getData("text");
    } else {
      // emit("update:cardExp", e.target.value);
      value = e.target.value;
    }

    const validateCompleteExp = (value) => {
      const month = value.substring(0, 2);
      const year = value.substring(3);
      const currentYear = new Date().getFullYear().toString().substring(2);
      const currentMonth = new Date().getMonth() + 1;

      if (month > 12) {
        cardExpError.value =
          "Please enter a valid month in the card expiry field";
        cardExpInput.value.$el.value = month;
      } else if (value.charAt(2) !== "/") {
        cardExpInput.value.$el.value = month + "/";
      } else if (!props.allowExpiredCardDateInExp && year < currentYear) {
        cardExpError.value = "You've entered an expired card";
      } else if (
        month < currentMonth &&
        year == currentYear &&
        !props.allowExpiredCardDateInExp
      ) {
        cardExpError.value = "You've entered an expired card";
      } else {
        cardExpInput.value.$el.value = value;
        emit("update:cardExp", value);
        cardCVCInput.value.$el.focus();
      }
    };

    if (value.length < 5) {
      if (value.length === 1 && value != 0 && value != 1) {
        cardExpError.value =
          "Please enter a valid month in the card expiry field";
      } else if (
        (value.length >= 2 && value.substring(0, 2) > 12) ||
        !isFinite(Number(value.substring(0, 2)))
      ) {
        e.preventDefault();
        cardExpError.value =
          "Please enter a valid month in the card expiry field";
        e.target.value = !isFinite(value) ? "" : value.substring(0, 2);
      } else if (value.length >= 3 && value.charAt(2) !== "/") {
        e.target.value = value.substring(0, 2) + "/";
      } else {
        if (value.length === 2) {
          if (
            e.inputType &&
            e.inputType !== "deleteContentBackward" &&
            e.inputType !== "deleteContentForward"
          ) {
            e.target.value = value + "/";
            emit("update:cardExp", value + "/");
          }
        } else {
          emit("update:cardExp", value);
        }
      }
    } else if (value.length === 5) {
      validateCompleteExp(value);
    } else {
      e.target.value = "";
    }
  }
};

const handleCardNoBlur = (e) => {
  e.preventDefault();
  pseudoCardInputIsFocused.value = false;
  const stringCardNo = props.cardNo ? props.cardNo + "" : cardNoDisplay.value;
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
  if (cardExpError.value) {
    cardExpInput.value.$el.focus();
  } else if (cardCVCError.value) {
    cardCVCInput.value.$el.focus();
  } else {
    pseudoCardInputIsFocused.value = true;
    cardNoDisplay.value = props.cardNo;
  }
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
      validateCardNo(value);

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
      validateCardNo(value);

      break;
    case "6":
      selectedCard.value = BRAND_ALIAS.DISCOVER;
      emit("update:cardNo", parse(BRAND_ALIAS.DISCOVER));
      cardNoDisplay.value = parse(BRAND_ALIAS.DISCOVER);
      validateCardNo(value);

      break;
    case "4":
      selectedCard.value = BRAND_ALIAS.VISACARD;
      emit("update:cardNo", parse(BRAND_ALIAS.VISACARD));
      cardNoDisplay.value = parse(BRAND_ALIAS.VISACARD);
      validateCardNo(value);

      break;
    default:
      selectedCard.value = BRAND_ALIAS.NOCARD;
      emit("update:cardNo", parse(BRAND_ALIAS.NOCARD));
      cardNoDisplay.value = parse(null);
  }
};

const validateCardNo = (cardNo) => {
  cardNoError.value = null;
  const validatedCardNo = cardValidator.number(cardNo.replaceAll(" ", ""));
  console.log(validatedCardNo);
  if (validatedCardNo && validatedCardNo.card) {
    cardNoInput.value.$el.setAttribute(
      "maxlength",
      validatedCardNo.card.lengths[validatedCardNo.card.lengths.length - 1] +
        validatedCardNo.card.gaps.length
    );
    cardCVCInput.value.$el.setAttribute(
      "maxlength",
      validatedCardNo.card.code.size
    );
  }

  if (!validatedCardNo.isPotentiallyValid && validatedCardNo.card) {
    cardNoError.value = `Please enter a valid ${validatedCardNo.card.niceType} card number`;
  } else {
    cardNoError.value = null;
  }
};

const handleCardNoKeyDown = (e) => {
  if (e.key == "Backspace" || e.key == "Delete") {
    if (cardNoDisplay.value.length != e.target.selectionStart) {
      targetPosition.value = { pos: e.target.selectionStart, key: e.key };
    }
  }
};

const computedCardErrorMessage = computed(() => {
  if (cardNoError.value) {
    return cardNoError.value;
  } else if (cardExpError.value) {
    return cardExpError.value;
  } else if (cardCVCError.value) {
    return cardCVCError.value;
  } else if (props.errorMessage) {
    return props.errorMessage;
  } else {
    return false;
  }
});

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
  &.size__massive {
    height: 64px;
    .ui-card-input-field__pseudo-input {
      height: 64px;
    }
  }
  &.size__huge {
    height: 56px;
    .ui-card-input-field__pseudo-input {
      height: 56px;
    }
  }
  &.size__xlarge {
    height: 48px;
    .ui-card-input-field__pseudo-input {
      height: 48px;
    }
  }
  &.size__large {
    height: 40px;
    .ui-card-input-field__pseudo-input {
      height: 40px;
    }
  }
  &.size__medium {
    height: 32px;
    .ui-card-input-field__pseudo-input {
      height: 32px;
    }
  }
  &.size__small {
    height: 24px;
    .ui-card-input-field__pseudo-input {
      height: 24px;
      padding: 8px 16px;
      input {
        height: 20px;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
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
  align-items: center;
}
.ui-card-input__pushed-right {
  display: flex;
  align-items: center;
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
  width: 70px;
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
  color: var(--light-primary-action-color);
  &.dark_mode {
    color: var(--dark-primary-action-color);
  }
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

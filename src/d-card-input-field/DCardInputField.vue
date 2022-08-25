<template>
  <d-box
    :class="`size__${size}`"
    class="ui-text-field__wrapper heroNew"
    :style="{ ...d__theme }"
  >
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
            :smart-color="d__theme['--lightPrimaryActionColor']"
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

<script>
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import ScanCardIcon from "../icons/ScanCardIcon.vue";
import CardIcon from "../icons/CardIcon.vue";
import CardBrands, { BRAND_ALIAS } from "./card-brands";
import ErrorIcon from "../icons/ErrorIcon.vue";
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import { inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";

export default {
  name: "DCreditCardInput",
  components: {
    ScanCardIcon,
    CardIcon,
    ErrorIcon,
    DBox,
    DText,
  },
  props: {
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
  },
  data: () => ({
    selectedCard: -1,
    cardNoDisplay: "",
    targetPosition: null,
    pseudoCardInputIsFocused: false,
  }),
  methods: {
    allowOnlyNumbers,
    handleCardCVVBlur: function () {
      this.pseudoCardInputIsFocused = false;
    },
    handleCardCVVFocus: function () {
      this.pseudoCardInputIsFocused = true;
    },
    handleCardExpBlur: function () {
      this.pseudoCardInputIsFocused = false;
    },
    handleCardExpFocus: function () {
      this.pseudoCardInputIsFocused = true;
    },
    handleCardExpInput: function (e) {
      this.$emit("update:cardExp", e.target.value);
      const value = e.target.value;
      if (value.length === 2) {
        if (value > 12 || !isFinite(value)) {
          e.preventDefault();
          return;
        } else {
          this.$emit("update:cardExp", `${value}/`);
          e.target.value = `${value}/`;
          return;
        }
      }
      if (value.length === 3) {
        if (value.charAt(2) !== "/" || value.substring(0, 2) > 12) {
          e.preventDefault();
          this.$emit("update:cardExp", e.target.value.substring(0, 2));
          e.target.value = e.target.value.substring(0, 2);
          return;
        }
      }
      if (value.length === 1 && value === "/") {
        this.$emit("update:cardExp", "");
        e.target.value = "";
      }
      if (value.length === 5) {
        e.preventDefault();
        this.$refs.cardCVCInput.$el.focus();
        return;
      }
    },
    handleCardNoBlur: function (e) {
      e.preventDefault();
      this.pseudoCardInputIsFocused = false;
      const stringCardNo = this.cardNo + "";
      const strippedCardNo = stringCardNo.replace(/\s/g, "");
      if (this.selectedCard == BRAND_ALIAS.AMEX) {
        if (strippedCardNo.length === 15) {
          this.cardNoDisplay = `**** ${stringCardNo.substring(
            stringCardNo.length - 4
          )}`;
        }
      } else {
        if (strippedCardNo.length >= 16) {
          this.cardNoDisplay = `**** ${stringCardNo.substring(
            stringCardNo.length - 4
          )}`;
        }
      }
    },
    handleCardNoChange: function () {
      setTimeout(() => {
        if (this.targetPosition !== null) {
          const position =
            this.targetPosition !== null
              ? this.targetPosition.key == "Backspace"
                ? this.targetPosition.pos - 1
                : this.targetPosition.pos
              : this.cardNo.length;
          this.$refs.cardNoInput.current.selectionStart =
            this.targetPosition !== null ? position : this.cardNo.length;
          this.$refs.cardNoInput.current.selectionEnd =
            this.targetPosition !== null ? position : this.cardNo.length;
          this.targetPosition = null;
        }
      });
    },
    handleCardNoFocus: function () {
      this.pseudoCardInputIsFocused = true;
      this.cardNoDisplay = this.cardNo;
    },
    handleCardNoInput: function (e) {
      const value = e.target.value.replace(/\s/g, "");
      const parse = (type) => {
        switch (type) {
          case BRAND_ALIAS.AMEX:
            this.$refs.cardNoInput.$el.setAttribute("maxlength", 17);
            this.$refs.cardCVCInput.$el.setAttribute("maxlength", 4);
            break;
          default:
            this.$refs.cardNoInput.$el.setAttribute("maxlength", 19);
            this.$refs.cardCVCInput.$el.setAttribute("maxlength", 3);
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
          this.selectedCard = BRAND_ALIAS.MASTERCARD;
          this.$emit("update:cardNo", parse(BRAND_ALIAS.MASTERCARD));
          this.cardNoDisplay = parse(BRAND_ALIAS.MASTERCARD);

          break;
        case "3":
          if (value.length >= 2) {
            if (value.charAt(1) == "4" || value.charAt(1) == "7") {
              this.selectedCard = BRAND_ALIAS.AMEX;
            } else {
              this.selectedCard = BRAND_ALIAS.NOCARD;
            }
          } else {
            this.selectedCard = BRAND_ALIAS.AMEX;
          }
          this.$emit("update:cardNo", parse(BRAND_ALIAS.AMEX));
          this.cardNoDisplay = parse(BRAND_ALIAS.AMEX);

          break;
        case "6":
          this.selectedCard = BRAND_ALIAS.DISCOVER;
          this.$emit("update:cardNo", parse(BRAND_ALIAS.DISCOVER));
          this.cardNoDisplay = parse(BRAND_ALIAS.DISCOVER);

          break;
        case "4":
          this.selectedCard = BRAND_ALIAS.VISACARD;
          this.$emit("update:cardNo", parse(BRAND_ALIAS.VISACARD));
          this.cardNoDisplay = parse(BRAND_ALIAS.VISACARD);

          break;
        default:
          this.selectedCard = BRAND_ALIAS.NOCARD;
          this.$emit("update:cardNo", parse(BRAND_ALIAS.NOCARD));
          this.cardNoDisplay = parse(null);
      }
    },
    handleCardNoKeyDown: function (e) {
      if (e.key == "Backspace" || e.key == "Delete") {
        if (this.cardNoDisplay.length != e.target.selectionStart) {
          this.targetPosition = { pos: e.target.selectionStart, key: e.key };
        }
      }
    },
    handleCardNoKeyPress: function (e) {
      allowOnlyNumbers(e);
      const strippedCardNo = this.cardNoDisplay.replace(/\s/g, "");

      if (
        e.key != "Backspace" &&
        e.key != "Delete" &&
        e.key != "ArrowUp" &&
        e.key != "ArrowLeft" &&
        e.key != "ArrowDown" &&
        e.key != "ArrowRight"
      ) {
        if (this.selectedCard === BRAND_ALIAS.AMEX) {
          if (strippedCardNo.length === 15) {
            e.preventDefault();
            this.$refs.cardNoInput.$el.blur();
            this.$refs.cardExpInput.$el.focus();
            return;
          }
        } else {
          if (strippedCardNo.length >= 16) {
            e.preventDefault();
            this.$refs.cardNoInput.$el.blur();
            this.$refs.cardExpInput.$el.focus();
            return;
          }
        }
      }
    },
    refreshMaskedCardNo: function () {
      this.cardNoDisplay = `**** ${this.cardNo.substring(
        this.cardNo.length - 4
      )}`;
    },
  },
  emits: ["update:cardNo", "update:cardCvv", "update:cardExp"],
  setup() {
    const d__theme = inject("d__theme", defaultThemeVars);
    return { d__theme, CardBrands };
  },
};
</script>

<style lang="sass" scoped>
.ui-card-input-field__wrapper
  display: flex
  flex-direction: column

.ui-card-input-field__pseudo-input
  background: #fff
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1)
  border: 1px solid #CED6DE
  border-radius: 4px
  font-family: "Circular Std", sans-serif
  font-size: 16px
  font-weight: 400
  padding: 16px
  color: #212934
  display: flex
  align-items: center
  & *
    font-family: "Circular Std", sans-serif
    font-size: 16px

  &.hasError, &.hasError input
    background: #fff0f2
    border-color: #d62f4b

  &.focus:not(.hasError)
    border-color: var(--lightPrimaryActionColor)
    box-shadow: 0 0 0 3px var(--lightPrimaryActionBoxShadowColor)
  &:hover:not(.hasError)
    border-color: var(--lightPrimaryActionColor)

.ui-card-input-field__inputs
  display: flex
  justify-content: space-between
  flex: 1

.ui-card-input__pushed-right
  display: flex

.ui-card-input-field__pseudo-input input
  border: none

  &::placeholder
    color: #B8C4CE

  &:focus
    border: none
    outline: none

.ui-card-input-field__cvv, .ui-card-input-field__exp
  width: 60px
  background: transparent
.ui-card-input-field__cvv
  @media only screen and (max-width: 375px)
    width: 40px

.ui-card-input-field__card-no
  margin-right: 8px
  @media only screen and (max-width: 500px)
    width: 142px
  @media only screen and (max-width: 450px)
    width: 122px
  @media only screen and (max-width: 400px)
    width: 92px
  @media only screen and (min-width: 500px)
    flex: 1

.ui-card-input-field__left-icon
  margin-right: 8px
  height: 24px

.ui-card-input-field__right-icon
  @media only screen and (max-width: 500px)
    height: 24px
  @media only screen and (max-width: 375px)
    height: 20px
  @media only screen and (max-width: 350px)
    display: none
</style>

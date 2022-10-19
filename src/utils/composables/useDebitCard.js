import { computed, ref } from "vue";
import {
  asteriskCardNo,
  asteriskCvv,
  asteriskExp,
  formatCardNo,
} from "../debitCardUtils";

export const useDebitCard = (props) => {
  const hidden = ref(true);

  const computedCardNo = computed(() => {
    if (hidden.value) {
      return formatCardNo(asteriskCardNo(props.cardNo));
    } else {
      return formatCardNo(props.cardNo);
    }
  });

  const computedExp = computed(() => {
    if (hidden.value) {
      return asteriskExp(props.exp);
    } else {
      return props.exp;
    }
  });

  const computedCVV = computed(() => {
    if (hidden.value) {
      return asteriskCvv(props.cvv);
    } else {
      return props.cvv;
    }
  });

  const cardBrand = computed(() => {
    return `https://assets.ondeposits.com/img/debit-card-brands/svg/${props.brand}_light.svg`;
  });

  const toggleHidden = () => (hidden.value = !hidden.value);

  return {
    hidden,
    computedCardNo,
    computedExp,
    computedCVV,
    cardBrand,
    toggleHidden,
  };
};

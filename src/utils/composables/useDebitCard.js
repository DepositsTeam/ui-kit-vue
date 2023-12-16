import { computed, ref, onMounted } from "vue";
import {
  asteriskCardNo,
  asteriskCvv,
  asteriskExp,
  CardBrands,
  formatCardNo,
} from "../debitCardUtils";

export const useDebitCard = (props) => {
  const hidden = ref(true);

  onMounted(() => {
    if (!props.enableHiding) {
      hidden.value = false;
    }
  });

  const computedCardNo = computed(() => {
    if (props.lastFourCardNo) {
      if (props.firstFourCardNo) {
        if (props.brand && CardBrands.includes(props.brand)) {
          if (props.brand === "amex") {
            return props.firstFourCardNo + " ******  *" + props.lastFourCardNo;
          } else {
            return props.firstFourCardNo + " **** **** " + props.lastFourCardNo;
          }
        } else {
          return props.firstFourCardNo + " **** **** " + props.lastFourCardNo;
        }
      } else {
        return "**** **** **** " + props.lastFourCardNo;
      }
    } else {
      if (hidden.value) {
        return formatCardNo(asteriskCardNo(props.cardNo));
      } else {
        return formatCardNo(props.cardNo);
      }
    }
  });

  const computedExp = computed(() => {
    let processedExp;

    /**
     * Possible formats:
     * - MM/YY
     * - MM-YY
     * - MM/YYYY
     * - YYYY/MM
     * - YYYY-MM
     * - MM-YYYY
     */

    if (props.exp.length === 7) {
      // Handle YYYY-MM & YYYY/MM
      if (props.exp.indexOf("-") === 4 || props.exp.indexOf("/") === 4) {
        processedExp =
          props.exp.substring(5, 7) + "/" + props.exp.substring(2, 4);
      }
      // Handle MM-YYYY & MM/YYYY
      else if (props.exp.indexOf("-") === 2 || props.exp.indexOf("/") === 2) {
        processedExp =
          props.exp.substring(0, 2) + "/" + props.exp.substring(5, 7);
      } else {
        processedExp = props.exp;
      }
    } else if (props.exp.length === 5) {
      // Handle MM-YY & MM/YY
      if (props.exp.indexOf("-") === 2 || props.exp.indexOf("/") === 2) {
        processedExp =
          props.exp.substring(0, 2) + "/" + props.exp.substring(3, 5);
      } else {
        processedExp = props.exp;
      }
    } else {
      processedExp = props.exp;
    }

    if (hidden.value) {
      return asteriskExp(processedExp);
    } else {
      return processedExp;
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

  const toggleHidden = () => {
    if (props.enableHiding) {
      hidden.value = !hidden.value;
    }
  };

  return {
    hidden,
    computedCardNo,
    computedExp,
    computedCVV,
    cardBrand,
    toggleHidden,
  };
};

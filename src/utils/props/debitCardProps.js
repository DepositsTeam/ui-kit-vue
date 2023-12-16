import { CardBrands } from "@/utils/debitCardUtils";

export default {
  logo: {
    type: String,
    default:
      "https://assets.ondeposits.com/img/logo/your-brand/svg/logo_all_white.svg",
  },
  firstFourCardNo: {
    type: String,
  },
  lastFourCardNo: {
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
};

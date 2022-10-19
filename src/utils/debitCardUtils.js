export const BRAND_ALIAS = {
  AMEX: 0,
  DISCOVER: 1,
  MASTERCARD: 2,
  VISACARD: 3,
  NOCARD: -1,
};

export const formatCardNo = (e) => {
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

export const asteriskCardNo = (cardNo) => {
  const middle = cardNo.slice(4, -4).replace(/./g, "*");
  const first = cardNo.substring(0, 4);
  const last = cardNo.substring(cardNo.length - 4);
  return first + middle + last;
};

export const asteriskCvv = (cvv) => cvv.replace(/./g, "*");

export const asteriskExp = (exp) =>
  exp
    .split("/")
    .map((item) => item.replace(/./g, "*"))
    .join("/");

export const CardBrands = [
  "mastercard",
  "visa",
  "amex",
  "discover",
  "verve",
  "jcb",
];

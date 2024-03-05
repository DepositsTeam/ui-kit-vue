import cardValidator from "card-validator";

export const BRAND_ALIAS = {
  AMEX: 0,
  DISCOVER: 1,
  MASTERCARD: 2,
  VISACARD: 3,
  NOCARD: -1,
};

export const getCardBrandFromPan = (pan) => {
  const value = pan.replace(/\s/g, "");

  switch (value.charAt(0)) {
    case "5":
      return {
        alias: BRAND_ALIAS.MASTERCARD,
        name: "MASTERCARD",
      };
    case "3":
      if (value.length >= 2) {
        if (value.charAt(1) == "4" || value.charAt(1) == "7") {
          return {
            alias: BRAND_ALIAS.AMEX,
            name: "AMERICAN EXPRESS",
          };
        } else {
          return {
            alias: BRAND_ALIAS.NOCARD,
            name: "invalid",
          };
        }
      } else {
        return {
          alias: BRAND_ALIAS.AMEX,
          name: "AMERICAN EXPRESS",
        };
      }
    case "6":
      return {
        alias: BRAND_ALIAS.DISCOVER,
        name: "DISCOVER",
      };
    case "4":
      return {
        alias: BRAND_ALIAS.VISACARD,
        name: "VISA",
      };
    default:
      return {
        alias: BRAND_ALIAS.NOCARD,
        name: "invalid",
      };
  }
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

  return parse(getCardBrandFromPan(value).alias);
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

export const isValidCardPan = (pan) => {
  const validatedCardNo = cardValidator.number(pan.replaceAll(" ", ""));

  return !!(!validatedCardNo.isPotentiallyValid && validatedCardNo.card);
};

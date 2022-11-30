export function formatPercentage(percentage) {
  let noSymbol = percentage.replaceAll("%", "");
  if (noSymbol.length >= 2 && noSymbol.charAt(0) === "0") {
    noSymbol = noSymbol.substring(1);
  }
  if (new RegExp(/^\d+(\.\d*)?$/).test(noSymbol)) {
    return noSymbol;
  } else {
    throw Error("Invalid percentage value");
  }
}

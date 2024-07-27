export const formatCurrencyForDisplay = (value, symbol, decimals) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) return "";
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const stripFormatting = (value) => {
  return value.replaceAll(",", "");
};

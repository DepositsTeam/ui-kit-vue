export const allowOnlyNumbers = (e, allowPeriod = false) => {
  const isNumber = isFinite(parseFloat(e.key));
  const value = e.key;
  if (value !== ".") {
    if (!isNumber && value !== "Delete" && value !== "Backspace") {
      e.preventDefault();
      return;
    }
  } else {
    if (!allowPeriod) {
      e.preventDefault();
      return;
    }
  }
};

export const currencies = (e) => {
  const isNumber = isFinite(parseFloat(e.key));
  const value = e.key;
  if (
    !isNumber &&
    value !== "Delete" &&
    value !== "Backspace" &&
    value !== "."
  ) {
    e.preventDefault();
    return;
  }
};

export const allowOnlyNumbers = (e, allowPeriod = false) => {
  const isNumber = isFinite(parseFloat(e.key));
  const value = e.key;
  if (value !== ".") {
    console.log(value);
    if (
      !isNumber &&
      value !== "Delete" &&
      value !== "Backspace" &&
      value !== "Tab" &&
      value !== "Meta" &&
      value !== "Control" &&
      value !== "v" &&
      value !== "a" &&
      value !== "ArrowRight" &&
      value !== "ArrowLeft" &&
      value !== "ArrowUp" &&
      value !== "ArrowDown" &&
      value !== "Shift"
    ) {
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
    value !== "Tab" &&
    value !== "."
  ) {
    e.preventDefault();
    return;
  }
};

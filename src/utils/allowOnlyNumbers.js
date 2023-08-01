export const allowOnlyNumbers = (e, allowPeriod = false) => {
  // Allow: Ctrl+A, Ctrl+C, Ctrl+V
  if (
    (e.ctrlKey || e.metaKey || e.shiftKey) &&
    ["a", "c", "v"].includes(e.key.toLowerCase())
  ) {
    return; // allow the event to continue processing
  }

  // Allow: navigation keys
  if (
    [
      "Delete",
      "Backspace",
      "Tab",
      "Meta",
      "Control",
      "ArrowRight",
      "ArrowLeft",
      "ArrowUp",
      "ArrowDown",
      "Shift",
    ].includes(e.key)
  ) {
    return; // allow the event to continue processing
  }

  // Allow: numeric keys and decimal point
  const isNumberKey = e.key >= "0" && e.key <= "9";
  const isDecimalPoint = e.key === ".";

  if (!isNumberKey && (!isDecimalPoint || !allowPeriod)) {
    e.preventDefault(); // prevent non-numeric key input
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

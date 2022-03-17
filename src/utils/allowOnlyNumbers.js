export const allowOnlyNumbers = (e) => {
  const isNumber = isFinite(parseFloat(e.key));
  const value = e.key;
  if (!isNumber && value !== "Delete" && value !== "Backspace") {
    e.preventDefault();
    return;
  }
};

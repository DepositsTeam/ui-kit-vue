export default (min, max, inclusive = true) => {
  if (!inclusive) {
    min += 1;
    max -= 1;
  }
  return Array.from({ length: max - min + 1 }, (v, i) => min + i);
};

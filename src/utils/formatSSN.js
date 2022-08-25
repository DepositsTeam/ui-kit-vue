export function formatSSN(ssn) {
  // remove all non-dash and non-numerals
  var val = ssn.replace(/[^\d-]/g, "");

  // add the first dash if number from the second group appear
  val = val.replace(/^(\d{3})-?(\d{1,2})/, "$1-$2");

  // add the second dash if numbers from the third group appear
  val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, "$1-$2-$3");

  // remove misplaced dashes
  val = val
    .split("")
    .filter((val, idx) => {
      return val !== "-" || idx === 3 || idx === 6;
    })
    .join("");

  // enforce max length
  return val.substring(0, 11);
}

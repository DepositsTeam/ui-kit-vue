export default (length = 20, type = 0) => {
  let permittedCharacters;
  const time = `${new Date().getTime()}`;
  switch (type) {
    case 1:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
      break;
    case 2:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz-_";
      break;
    case 3:
      permittedCharacters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
    case 4:
      permittedCharacters = "0123456789-_";
      break;
    case 5:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      break;
    case 6:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 7:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz";
      break;
    case 8:
      permittedCharacters = "abcdefghijklmnopqrstuvwxyz";
      break;
    default:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
  }
  let string = "";

  let randomLength = length - time.length;
  for (let i = 0; i < randomLength; i++) {
    string +=
      permittedCharacters[
        Math.floor(Math.random() * permittedCharacters.length)
      ];
  }
  let index = Math.floor(Math.random() * randomLength) + 1;
  let end = string.substr(index);
  let start = string.substr(3, index);
  let finalString = start + time + end;
  return finalString;
};

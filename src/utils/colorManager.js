export function getTextColor(hex, opposites = false) {
  const hexCode = hex.charAt(0) === "#" ? hex.substr(1, 6) : hex;

  const hexR = parseInt(hexCode.substr(0, 2), 16);
  const hexG = parseInt(hexCode.substr(2, 2), 16);
  const hexB = parseInt(hexCode.substr(4, 2), 16);
  // Gets the average value of the colors
  const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

  return contrastRatio >= 0.5
    ? opposites
      ? "#ffffff"
      : "#212934"
    : opposites
    ? "#ffffff"
    : "#212934";
}

export function hexToRgbA(hex, alpha = 1) {
  if (alpha > 1) alpha = 1;
  if (alpha < 0) alpha = 0;
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      alpha +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

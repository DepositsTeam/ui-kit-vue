import tinycolor from "tinycolor2";

function handleChannelOverlay(front, alpha, back = 0) {
  return back + ((front - back) * alpha) / 255;
}

function overlayWithBlack(color, alpha) {
  const rgb = color.toRgb();

  return tinycolor({
    r: handleChannelOverlay(rgb.r, alpha),
    g: handleChannelOverlay(rgb.g, alpha),
    b: handleChannelOverlay(rgb.b, alpha),
  });
}

function overlayWithWhite(color, alpha) {
  const rgb = color.toRgb();

  return tinycolor({
    r: handleChannelOverlay(rgb.r, alpha, 255),
    g: handleChannelOverlay(rgb.g, alpha, 255),
    b: handleChannelOverlay(rgb.b, alpha, 255),
  });
}

export function generateColorSpectrum(color, prefix = "--light-primary-") {
  const hexColor = `${color.toLowerCase()}`;
  const mapper = [
    {
      level: "100",
      darken: false,
      isOriginal: false,
      darkLightFactor: 0,
      alpha: 28,
      brighten: 0,
      saturate: 0,
      original: "#F2FAFC",
    },
    {
      level: "200",
      darken: false,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 1,
      alpha: 70,
      saturate: 0,
      original: "#BDF3FC",
    },
    {
      level: "300",
      darken: false,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 0,
      alpha: 130,
      saturate: 0,
      original: "#75E2FA",
    },
    {
      level: "400",
      darken: false,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 0,
      alpha: 198,
      saturate: 0,
      original: "#43D2FA",
    },
    {
      level: "500",
      darken: true,
      isOriginal: true,
      darkLightFactor: 0,
    },
    {
      level: "600",
      darken: true,
      isOriginal: false,
      darkLightFactor: 3,
      brighten: 1,
      alpha: 233,
      saturate: 1.5,
      original: "#0C9CCC",
    },
    {
      level: "700",
      darken: true,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 0.5,
      alpha: 186,
      saturate: -0.5,
      original: "#0B87B0",
    },
    {
      level: "800",
      darken: true,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 0,
      alpha: 130,
      saturate: -2,
      original: "#085E7A",
    },
    {
      level: "900",
      darken: true,
      isOriginal: false,
      darkLightFactor: 0,
      brighten: 0,
      alpha: 90,
      saturate: -12,
      original: "#094357",
    },
  ];
  const returnedSpectrum = {};
  mapper.forEach((item) => {
    let hex = hexColor;
    if (!item.isOriginal) {
      let color = tinycolor(hex);
      color = item.darken
        ? color.darken(item.darkLightFactor)
        : color.lighten(item.darkLightFactor);
      color = color.brighten(item.brighten);
      color =
        item.saturate > 0
          ? color.saturate(item.saturate)
          : color.desaturate(Math.abs(item.saturate));

      color = item.darken
        ? overlayWithBlack(color, item.alpha)
        : overlayWithWhite(color, item.alpha);

      returnedSpectrum[`${prefix}${item.level}`] = color.toHexString();
    } else {
      returnedSpectrum[`${prefix}500`] = hex;
    }
  });
  return returnedSpectrum;
}

export function getTextColor(hex, light = "#ffffff", dark = "#212934") {
  if (!hex) {
    return "";
  }
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return "";
  }
  const hexCode = hex.charAt(0) === "#" ? hex.substr(1, 6) : hex;

  const hexR = parseInt(hexCode.substr(0, 2), 16);
  const hexG = parseInt(hexCode.substr(2, 2), 16);
  const hexB = parseInt(hexCode.substr(4, 2), 16);
  // Gets the average value of the colors
  const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

  return contrastRatio >= 0.5 ? dark : light;
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

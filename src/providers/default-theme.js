import convertObjToVars from "../utils/convertObjToVars";

const defaultTheme = {
  // "--primarycolor": "#0db9e9",
  // "--primaryfontcolor": "#212934",
  // "--primaryhovercolor": "#43d2fa",
  // "--primarytexthovercolor": "#fff",
  // "--primarydisabledcolor": "#f5f8fa",
  // "--primarydisabledbtncolor": "#bdf3fc",
  // "--primarytextdisabledcolor": "#ced6de",
  // "--primaryboxshadowcolor": "rgba(67, 210, 250, 0.25)",
  // "--outlinecolor": "#0d7fe9",
  // "--outlinedisabledcolor": "#acd7ff",
  // "--outlinetextdisabledcolor": "#acd7ff",
  // "--outlineboxshadowcolor": "rgba(27, 92, 224, 0.2)",
  // "--inputbackgroundcolor": "#ffffff",
  // "--darkmodebackground": "#121A26",

  lightPrimaryActionColor: "#0db9e9",
  lightPrimaryActionTextColor: "#212934",
  lightTextColor: "#212934",
  lightPrimaryActionHoverColor: "#43d2fa",
  lightPrimaryActionTextHoverColor: "#ffffff",
  lightPrimaryActionDisabledColor: "#bdf3fc",
  // lightPrimaryActionDisabledTextColor: "",
  lightPrimaryActionBoxShadowColor: "rgba(67, 210, 250, 0.25)",
  lightSecondaryActionColor: "",
  lightSubtleTextColor: "#ced6de",
  lightSecondaryActionDisabledColor: "",
  lightInputBackgroundColor: "#ffffff",
  lightBackgroundColor: "#ffffff",
  lightOutlineActionColor: "#0d7fe9",
  lightOutlineActionDisabledColor: "#acd7ff",
  lightOutlineActionBoxShadowColor: "rgba(27, 92, 224, 0.2)",

  darkPrimaryActionColor: "#0db9e9",
  darkTextColor: "#212934",
  darkPrimaryActionHoverColor: "#43d2fa",
  darkPrimaryActionDisabledColor: "#bdf3fc",
  darkPrimaryActionBoxShadowColor: "rgba(67, 210, 250, 0.25)",
  darkSecondaryActionColor: "",
  darkSubtleTextColor: "#ced6de",
  darkSecondaryActionDisabledColor: "",
  darkInputBackgroundColor: "#1F2B3B",
  darkInputLabelColor: "#94A3B8",
  darkInputBorderColor: "#384860",
  darkInputIconColor: "#94A3B8",
  darkBackgroundColor: "#121A26",
  darkInputDisabledTextColor: "rgba(148, 163, 184, 0.8)",
};

export const defaultThemeVars = convertObjToVars(defaultTheme);

export default defaultTheme;

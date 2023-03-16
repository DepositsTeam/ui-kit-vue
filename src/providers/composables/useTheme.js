import { inject, isRef } from "vue";
import defaultTheme from "../default-theme";
import { convertVarsToObj } from "@/utils/convertObjToVars";

export const useTheme = () => {
  const injectedTheme = inject("d__theme");
  const injectedUpdateTheme = inject("d__updateTheme");

  const updateTheme = (theme) => {
    if (injectedUpdateTheme && typeof injectedUpdateTheme === "function") {
      return injectedUpdateTheme(theme);
    } else {
      throw Error(
        "The `updateTheme` function is not enabled. You probably omitted the ThemeProvider."
      );
    }
  };

  return {
    theme: isRef(injectedTheme)
      ? convertVarsToObj(injectedTheme.value)
      : defaultTheme,
    updateTheme,
  };
};

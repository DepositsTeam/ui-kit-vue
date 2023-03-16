import { inject, isRef } from "vue";
import defaultTheme from "../default-theme";

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
    theme: isRef(injectedTheme) ? injectedTheme.value : defaultTheme,
    updateTheme,
  };
};

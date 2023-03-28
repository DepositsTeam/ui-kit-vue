import { inject } from "vue";
import { defaultThemeVars } from "../default-theme";

export const useTheme = () => {
  const returnedTheme = inject("d__theme", defaultThemeVars);
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
    theme: returnedTheme,
    updateTheme,
  };
};

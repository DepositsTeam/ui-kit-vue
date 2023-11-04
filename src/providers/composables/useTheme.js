import { inject } from "vue";
import { defaultThemeVars } from "../default-theme";

export const useTheme = () => {
  const returnedTheme = inject("d__theme", defaultThemeVars);
  const injectedUpdateTheme = inject("d__updateTheme");

  const updateTheme = (theme) => {
    if (injectedUpdateTheme && typeof injectedUpdateTheme === "function") {
      return injectedUpdateTheme(theme);
    } else {
      // TODO: Update this error message with a link to the documentation
      throw Error(
        "The `updateTheme` function is not enabled. You need to wrap your application with `ThemeProvider` to enable the `updateTheme` function."
      );
    }
  };

  return {
    theme: returnedTheme,
    updateTheme,
  };
};

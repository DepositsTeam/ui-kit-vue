import { inject, isRef, ref, unref, watch } from "vue";
import defaultTheme from "../default-theme";
import { convertVarsToObj } from "@/utils/convertObjToVars";

export const useTheme = () => {
  const injectedTheme = inject("d__theme");
  const injectedUpdateTheme = inject("d__updateTheme");
  const returnedTheme = ref(defaultTheme);

  watch(injectedTheme, () => {
    if (isRef(injectedTheme)) {
      returnedTheme.value = convertVarsToObj(injectedTheme.value);
    }
  });

  const updateTheme = (theme) => {
    console.log("RETURNED_THEME", returnedTheme);
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

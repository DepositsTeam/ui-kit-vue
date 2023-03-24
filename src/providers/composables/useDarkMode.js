import { inject, isRef } from "vue";

export const useDarkMode = () => {
  const darkMode = inject("d__darkMode");
  const updateDarkMode = inject("d__updateDarkMode");

  const toggleDarkMode = (value) => {
    if (updateDarkMode && typeof updateDarkMode === "function") {
      updateDarkMode(value);
    } else {
      throw Error(
        "The `toggleDarkMode` function is not enabled. You probably omitted the DarkModeProvider."
      );
    }
  };

  return {
    isDarkModeEnabled: darkMode,
    toggleDarkMode,
  };
};

<template>
  <slot></slot>
</template>

<script>
import { provide, ref, onBeforeMount } from "vue";
export default {
  name: "DarkThemeProvider",
  setup() {
    const darkMode = ref(null);
    onBeforeMount(() => {
      const localStorageDarkMode = localStorage.getItem("dark_mode");
      if (localStorageDarkMode) {
        darkMode.value = localStorageDarkMode === "enabled";
      } else {
        darkMode.value =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    });

    const $updateDarkMode = (value) => {
      alert("I got clicked biatch")
      darkMode.value = value;
      localStorage.setItem("dark_mode", value ? "enabled" : "disabled");
    };

    provide("darkMode", darkMode);
    provide("updateDarkMode", $updateDarkMode);
  },
};
</script>

<style scoped></style>

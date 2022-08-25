<template>
  <slot></slot>
</template>

<script>
import { provide, ref, onBeforeMount } from "vue";
export default {
  name: "DarkModeProvider",
  props: {
    darkMode: {
      type: Boolean,
      default: null,
    },
  },
  setup(props) {
    const darkMode = ref(null);
    onBeforeMount(() => {
      if (props.darkMode !== null) {
        darkMode.value = props.darkMode;
      } else {
        const localStorageDarkMode = localStorage.getItem("dark_mode");
        if (localStorageDarkMode) {
          darkMode.value = localStorageDarkMode === "enabled";
        } else {
          darkMode.value =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
      }
    });

    const updateDarkMode = (value) => {
      darkMode.value = value;
      localStorage.setItem("dark_mode", value ? "enabled" : "disabled");
    };

    provide("___darkMode", darkMode);
    provide("d__darkMode", darkMode);
    provide("d__updateDarkMode", updateDarkMode);
    provide("___updateDarkMode", updateDarkMode);
  },
};
</script>

<style scoped></style>

<template>
  <slot></slot>
</template>
<script setup>
import { provide, watch, ref } from "vue";
import colorManager, { getTextColor, hexToRgbA } from "../utils/colorManager";

const theme = ref({});

const themeVars = ref({
  "--primarycolor": "#0db9e9",
  "--primaryfontcolor": "#212934",
  "--primaryhovercolor": "#43d2fa",
  "--primarytexthovercolor": "#fff",
  "--primarydisabledcolor": "#f5f8fa",
  "--primarytextdisabledcolor": "#ced6de",
  "--primaryboxshadowcolor": "rgba(67, 210, 250, 0.25)",
  "--outlinecolor": "#0d7fe9",
  "--outlinedisabledcolor": "#acd7ff",
  "--outlinetextdisabledcolor": "#acd7ff",
  "--outlineboxshadowcolor": "rgba(27, 92, 224, 0.2)",
});

const updateTheme = (newTheme) => {
  theme.value = newTheme;
};

// onMounted(() => {
//   let storedTheme =
//     localStorage.getItem("theme") || sessionStorage.getItem("theme");
//   theme.value = storedTheme || null;
//   console.log(storedTheme);
//   theme.value.primaryTextColor = hexToRgb(theme.value.primaryFill);
// });

provide("updateTheme", updateTheme);
provide("theme", themeVars);

watch(theme, (val) => {
  theme.value.primaryTextColor = getTextColor(theme.value.primaryColor);
  theme.value.primaryHoverColor = colorManager(0.1, theme.value.primaryColor);
  theme.value.primaryTextHoverColor = getTextColor(
    theme.value.primaryHoverColor
  );
  theme.value.primaryDisabledColor = colorManager(
    0.7,
    theme.value.primaryColor
  );
  theme.value.primaryTextDisabledColor = getTextColor(
    theme.value.primaryDisabledColor,
    true
  );
  theme.value.primaryBoxShadowColor = hexToRgbA(theme.value.primaryColor, 0.2);
  if (!theme || !theme.value || !theme.value.primaryColor) {
    themeVars.value = {
      "--primarycolor": "#0db9e9",
      "--primaryfontcolor": "#212934",
      "--primaryhovercolor": "#43d2fa",
      "--primarytexthovercolor": "#fff",
      "--primarydisabledcolor": "#BDF3FC",
      "--primarytextdisabledcolor": "#ced6de",
      "--primaryboxshadowcolor": "rgba(67, 210, 250, 0.25)",
      "--outlinecolor": "#0d7fe9",
      "--outlinedisabledcolor": "#acd7ff",
      "--outlinetextdisabledcolor": "#acd7ff",
      "--outlineboxshadowcolor": "rgba(27, 92, 224, 0.2)",

    };
  } else {
    themeVars.value = {
      "--primarycolor": theme.value.primaryColor,
      "--primaryfontcolor": theme.value.primaryTextColor,
      "--primaryhovercolor": theme.value.primaryHoverColor,
      "--primarytexthovercolor": theme.value.primaryTextHoverColor,
      "--primarydisabledcolor": theme.value.primaryDisabledColor,
      "--primarytextdisabledcolor": theme.value.primaryTextDisabledColor,
      "--primaryboxshadowcolor": theme.value.primaryBoxShadowColor,
      "--outlinecolor": theme.value.primaryColor,
      "--outlinedisabledcolor": theme.value.primaryDisabledColor,
      "--outlinetextdisabledcolor": theme.value.primaryTextDisabledColor,
      "--outlineboxshadowcolor": theme.value.primaryBoxShadowColor,
    };
  }
});
</script>

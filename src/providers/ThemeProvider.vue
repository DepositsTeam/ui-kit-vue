<template>
  <slot></slot>
</template>
<script setup>
import { provide, watch, onMounted, ref } from "vue";
import { getTextColor, hexToRgbA } from "../utils/colorManager";
import convertObjToVars from "../utils/convertObjToVars";
import defaultTheme from "./default-theme";
import tinycolor from "tinycolor2";

const theme = ref({});

const themeVars = ref({
  ...defaultTheme,
});

const updateTheme = (newTheme) => {
  theme.value = newTheme;
};

const hydrateTheme = () => {
  const computedTheme = { ...defaultTheme, ...theme.value };

  // Depends on light primary action color
  computedTheme.lightPrimaryActionTextColor = getTextColor(
    computedTheme.lightPrimaryActionColor
  );
  computedTheme.lightPrimaryActionHoverColor = `#${tinycolor(
    computedTheme.lightPrimaryActionColor
  )
    .lighten(15)
    .toHex()}`;
  computedTheme.lightPrimaryActionDisabledColor = `#${tinycolor(
    computedTheme.lightPrimaryActionColor
  )
    .lighten(38)
    .toHex()}`;
  computedTheme.lightPrimaryActionDisabledTextColor = getTextColor(
    computedTheme.lightPrimaryActionDisabledColor,
    true
  );
  computedTheme.lightPrimaryActionTextHoverColor = getTextColor(
    computedTheme.lightPrimaryActionHoverColor
  );
  computedTheme.lightPrimaryActionBoxShadowColor = hexToRgbA(
    computedTheme.lightPrimaryActionColor,
    0.2
  );

  // Depends on dark primary action color
  computedTheme.darkPrimaryActionTextColor = getTextColor(
    computedTheme.darkPrimaryActionColor
  );
  computedTheme.darkPrimaryActionHoverColor = `#${tinycolor(
    computedTheme.darkPrimaryActionColor
  )
    .lighten(15)
    .toHex()}`;
  computedTheme.darkPrimaryActionDisabledColor = `#${tinycolor(
    computedTheme.darkPrimaryActionColor
  )
    .lighten(38)
    .toHex()}`;
  computedTheme.darkPrimaryActionDisabledTextColor = getTextColor(
    computedTheme.darkPrimaryActionDisabledColor,
    true
  );
  computedTheme.darkPrimaryActionTextHoverColor = getTextColor(
    computedTheme.darkPrimaryActionHoverColor
  );
  computedTheme.darkPrimaryActionBoxShadowColor = hexToRgbA(
    computedTheme.darkPrimaryActionColor,
    0.2
  );

  // Depends on dark background color
  computedTheme.darkInputBackgroundColor = `#${tinycolor(
    computedTheme.darkBackgroundColor
  )
    .lighten(8)
    .toHex()}`;
  computedTheme.darkInputBorderColor = `#${tinycolor(
    computedTheme.darkInputBackgroundColor
  )
    .lighten(23)
    .toHex()}`;
  computedTheme.darkInputLabelColor = `#${tinycolor(
    computedTheme.darkInputBackgroundColor
  )
    .lighten(58)
    .toHex()}`;
  computedTheme.darkInputDisabledColor = `#${tinycolor(
    computedTheme.darkInputBackgroundColor
  )
    .lighten(2)
    .toHex()}`;
  computedTheme.darkInputDisabledTextColor = hexToRgbA(
    computedTheme.darkInputLabelColor,
    0.8
  );
  computedTheme.darkInputIconColor = `#${tinycolor(
    computedTheme.darkInputBackgroundColor
  )
    .lighten(58)
    .toHex()}`;

  themeVars.value = {
    ...convertObjToVars(computedTheme),
  };
};

provide("___updateTheme", updateTheme);
provide("___theme", themeVars);
provide("d__theme", themeVars);
provide("d__updateTheme", updateTheme);

onMounted(hydrateTheme);

watch(theme, hydrateTheme);
</script>

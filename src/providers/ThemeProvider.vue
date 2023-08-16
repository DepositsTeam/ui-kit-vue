
<template>
  <slot></slot>
</template>
<script setup>
import { provide, watch, onMounted, ref } from "vue";
import {
  getTextColor,
  hexToRgbA,
  generateColorSpectrum,
} from "../utils/colorManager";
import convertObjToVars from "../utils/convertObjToVars";
import defaultTheme, { insertThemeToPage } from "./default-theme";
import tinycolor from "tinycolor2";

const props = defineProps({
  initialTheme: {
    type: Object,
    default: null,
  },
});

const theme = ref({});

const defaultFontFace = ref(null);

const defaultInputSize = ref(null);

provide("defaultFontFace", defaultFontFace);
provide("defaultInputSize", defaultInputSize);

const themeVars = ref({
  ...defaultTheme,
});

const updateTheme = (newTheme) => {
  theme.value = newTheme;
};

const hydrateTheme = () => {
  let initialTheme = { ...defaultTheme };
  if (props.initialTheme) {
    initialTheme = { ...defaultTheme, ...props.initialTheme };
  }
  const computedTheme = { ...initialTheme, ...theme.value };
  let primaryColor;
  if (computedTheme.primaryColor) {
    primaryColor = computedTheme.primaryColor;
  } else {
    primaryColor = computedTheme["primary-color"];
  }

  let backgroundColor;
  if (computedTheme.backgroundColor) {
    backgroundColor = computedTheme.backgroundColor;
  } else {
    backgroundColor = computedTheme["background-color"];
  }

  if (backgroundColor) {
    computedTheme["light-background-color"] = backgroundColor;
    computedTheme["dark-background-color"] = backgroundColor;
  }

  if (primaryColor) {
    computedTheme["light-primary-action-color"] = primaryColor;
    computedTheme["dark-primary-action-color"] = primaryColor;
    computedTheme["light-primary-color"] = primaryColor;
    computedTheme["dark-primary-color"] = primaryColor;
    computedTheme["primarycolor"] = primaryColor;
  }

  // Depends on light primary action color
  // Configure the light primary themes whenever we hydrate the themes
  computedTheme["light-primary-action-text-color"] = getTextColor(
    computedTheme["light-primary-action-color"]
  );

  computedTheme["light-primary-color"] =
    computedTheme["light-primary-action-color"];

  computedTheme["light-primary-action-hover-color"] = `#${tinycolor(
    computedTheme["light-primary-action-color"]
  )
    .lighten(15)
    .toHex()}`;

  computedTheme["light-primary-action-disabled-color"] = `#${tinycolor(
    computedTheme["light-primary-action-color"]
  )
    .lighten(38)
    .toHex()}`;

  computedTheme["light-primary-action-disabled-text-color"] = getTextColor(
    computedTheme["light-primary-action-disabled-color"],
    true
  );

  computedTheme["light-primary-action-text-hover-color"] = getTextColor(
    computedTheme["light-primary-action-hover-color"]
  );

  computedTheme["light-primary-action-box-shadow-color"] = hexToRgbA(
    computedTheme["light-primary-action-color"],
    0.2
  );

  // Configure the semantic color text and boxshadow colors whenever we hydrate the theme
  computedTheme["light-danger-box-shadow-color"] = hexToRgbA(
    computedTheme["light-danger-color"],
    0.2
  );

  computedTheme["light-warning-box-shadow-color"] = hexToRgbA(
    computedTheme["light-warning-color"],
    0.2
  );

  computedTheme["light-success-box-shadow-color"] = hexToRgbA(
    computedTheme["light-success-color"],
    0.2
  );

  computedTheme["dark-danger-box-shadow-color"] = hexToRgbA(
    computedTheme["dark-danger-color"],
    0.2
  );

  computedTheme["dark-warning-box-shadow-color"] = hexToRgbA(
    computedTheme["dark-warning-color"],
    0.2
  );

  computedTheme["dark-success-box-shadow-color"] = hexToRgbA(
    computedTheme["dark-success-color"],
    0.2
  );

  computedTheme["light-danger-text-color"] = getTextColor(
    computedTheme["light-danger-color"]
  );

  computedTheme["dark-danger-text-color"] = getTextColor(
    computedTheme["dark-danger-color"]
  );

  computedTheme["light-success-text-color"] = getTextColor(
    computedTheme["light-success-color"]
  );

  computedTheme["dark-success-text-color"] = getTextColor(
    computedTheme["dark-success-color"]
  );

  computedTheme["light-warning-text-color"] = getTextColor(
    computedTheme["light-warning-color"]
  );

  computedTheme["dark-warning-text-color"] = getTextColor(
    computedTheme["dark-warning-color"]
  );

  // Depends on dark primary action color
  computedTheme["dark-primary-action-text-color"] = getTextColor(
    computedTheme["dark-primary-action-color"]
  );

  computedTheme["light-primary-color"] =
    computedTheme["light-primary-action-color"];

  computedTheme["dark-primary-action-hover-color"] = `#${tinycolor(
    computedTheme["dark-primary-action-color"]
  )
    .lighten(15)
    .toHex()}`;

  computedTheme["dark-primary-action-disabled-color"] = `#${tinycolor(
    computedTheme["dark-primary-action-color"]
  )
    .lighten(38)
    .toHex()}`;

  computedTheme["dark-primary-action-disabled-text-color"] = getTextColor(
    computedTheme["dark-primary-action-disabled-color"],
    true
  );

  computedTheme["dark-primary-action-text-hover-color"] = getTextColor(
    computedTheme["dark-primary-action-hover-color"]
  );

  computedTheme["dark-primary-action-box-shadow-color"] = hexToRgbA(
    computedTheme["dark-primary-action-color"],
    0.2
  );

  // Depends on dark background color
  computedTheme["dark-input-background-color"] = `#${tinycolor(
    computedTheme["dark-background-color"]
  )
    .lighten(8)
    .toHex()}`;

  computedTheme["dark-input-border-color"] = `#${tinycolor(
    computedTheme["dark-input-background-color"]
  )
    .lighten(23)
    .toHex()}`;

  computedTheme["dark-input-label-color"] = `#${tinycolor(
    computedTheme["dark-input-background-color"]
  )
    .lighten(58)
    .toHex()}`;

  computedTheme["dark-input-disabled-color"] = `#${tinycolor(
    computedTheme["dark-input-background-color"]
  )
    .lighten(2)
    .toHex()}`;

  computedTheme["dark-input-disabled-text-color"] = hexToRgbA(
    computedTheme["dark-input-label-color"],
    0.8
  );

  computedTheme["dark-input-icon-color"] = `#${tinycolor(
    computedTheme["dark-input-background-color"]
  )
    .lighten(58)
    .toHex()}`;

  if (computedTheme["default-font-face"]) {
    defaultFontFace.value = computedTheme["default-font-face"];
  } else {
    defaultFontFace.value = null;
  }

  if (computedTheme["default-input-size"]) {
    defaultInputSize.value = computedTheme["default-input-size"];
  } else if (computedTheme.defaultInputSize) {
    defaultInputSize.value = computedTheme.defaultInputSize;
  } else {
    defaultInputSize.value = "huge";
  }

  themeVars.value = {
    ...convertObjToVars(computedTheme),
    ...generateColorSpectrum(computedTheme["light-primary-action-color"]),
    ...generateColorSpectrum(
      computedTheme["dark-primary-action-color"],
      "--dark-primary-"
    ),
    ...generateColorSpectrum(
      computedTheme["dark-background-color"],
      "--dark-background-"
    ),
    ...generateColorSpectrum(
      computedTheme["light-danger-color"],
      "--light-danger-"
    ),
    ...generateColorSpectrum(
      computedTheme["dark-danger-color"],
      "--dark-danger-"
    ),
    ...generateColorSpectrum(
      computedTheme["light-success-color"],
      "--light-success-"
    ),
    ...generateColorSpectrum(
      computedTheme["dark-success-color"],
      "--dark-success-"
    ),
    ...generateColorSpectrum(
      computedTheme["light-warning-color"],
      "--light-warning-"
    ),
    ...generateColorSpectrum(
      computedTheme["dark-warning-color"],
      "--dark-warning-"
    ),
  };

  insertThemeToPage(themeVars.value);
};

provide("___updateTheme", updateTheme);
provide("___theme", themeVars);
provide("d__theme", themeVars);
provide("d__updateTheme", updateTheme);

onMounted(hydrateTheme);

watch(theme, hydrateTheme);
</script>

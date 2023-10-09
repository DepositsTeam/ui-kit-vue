<template>
  <d-box
    class="ui-static__stats"
    :class="{ hasSmartColor: !!smartColor }"
    @click="clickHandler"
    :style="{
      '--smart-color': colorSpectrumRef.color,
      '--smart-color-background': colorSpectrumRef.background,
    }"
  >
    <slot name="iconContainer">
      <d-box
        class="ui-card__icon__section"
        :class="{
          [variant]: variant,
          hasSmartColor: !!smartColor,
        }"
      >
        <slot name="icon">
          <component :is="icon" class="ui-icon"></component>
        </slot>
      </d-box>
    </slot>
    <d-box display="flex" flex-direction="column" gap="6px">
      <d-text class="ui-static__stats__heading" font-face="heroNew"
        >{{ label }}
      </d-text>
      <d-text class="ui-static__stats__text" font-face="circularSTD"
        >{{ text }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "@/main";
import { generateColorSpectrum } from "@/utils/colorManager";
import { onMounted, ref, watch } from "vue";
import defaultTheme from "@/providers/default-theme";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    validator: (value) => ["outline", "filled"].includes(value),
    default: "filled",
  },
  smartColor: {
    type: String,
    default: defaultTheme["light-primary-action-color"],
  },
});

const hydrateSmartColor = () => {
  if (props.smartColor) {
    const spectrum = generateColorSpectrum(props.smartColor, "smart_color_");
    colorSpectrumRef.value = {
      background: spectrum.smart_color_100,
      color: spectrum.smart_color_500,
    };
  } else {
    colorSpectrumRef.value = {
      color: "",
      background: "",
    };
  }
};

const colorSpectrumRef = ref({
  color: "",
  background: "",
});

onMounted(() => {
  hydrateSmartColor();
});

watch(
  () => props.smartColor,
  (value) => {
    hydrateSmartColor();
  }
);

const emit = defineEmits(["click"]);

const clickHandler = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
.ui-static__stats {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 24px 20px;
  gap: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(174, 174, 192, 0.1);
  border-radius: 8px;

  .ui-card__icon__section {
    width: 48px;
    height: 48px;
    mix-blend-mode: normal;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;

    .ui-icon {
      width: 25.714px;
      height: 25.714px;
      flex-shrink: 0;
    }

    &.filled {
      &.hasSmartColor {
        background: var(--smart-color-background);

        .ui-icon {
          color: var(--smart-color);
        }
      }
    }

    &.outline {
      &.hasSmartColor {
        border: 1px solid var(--smart-color);

        .ui-icon {
          color: var(--smart-color);
        }
      }
    }
  }

  .ui-primary_bg {
    background: var(--light-primary-100);
    border: 1px solid var(--light-primary-100);

    .ui-icon {
      color: var(--light-primary-500);
    }
  }

  .ui-card__bordered {
    border: 1px solid #cbd5e1;

    .ui-icon {
      color: #94a3b8;
    }
  }

  .ui-static__stats__heading {
    color: #8c97a7;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }

  .ui-static__stats__text {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #2a2e33;
    margin: 0;
  }
}
</style>

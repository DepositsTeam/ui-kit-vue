<template>
  <d-box class="ui-custom__color__config">
    <d-label v-if="!!label">
      {{ label }}
    </d-label>
    <d-box margin-top="24px">
      <d-box class="ui-colors">
        <d-box
          class="ui-color"
          @click="handleChangeEvents(color)"
          :border="`1px solid ${
            modelValue === color ? modelValue : 'transparent'
          }`"
          v-for="(color, index) in colors"
          :key="index"
        >
          <d-box
            class="ui-color_inner"
            :background="color"
            :height="colorHeight"
            :width="colorWidth"
            :border="`1.45px solid ${color}`"
          ></d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-textfield
      readonly
      :size="computedInputSize"
      class="ui-color__input__field"
      v-model="payload.activeColor"
      @click="copyCode"
      cursor="copy"
    >
      <template #rightSection>
        <d-box class="ui-color__input__field__right">
          <d-box
            class="ui-color__input__field__square"
            :background="modelValue"
            :border="`1px solid ${modelValue}`"
          ></d-box>
        </d-box>
      </template>
    </d-textfield>
  </d-box>
</template>

<script setup>
import { DBox, DTextfield } from "../main";
import { onBeforeMount, reactive } from "vue";
import copy from "copy-to-clipboard";
import { useInputSize } from "@/utils/composables/useInputSize";
import DLabel from "@/components/forms/DLabel.vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  colorHeight: {
    type: String,
    default: "28.997px",
  },
  colorWidth: {
    type: String,
    default: "28.997px",
  },
  colors: {
    type: Array,
  },
  size: {
    type: String,
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
  },
});
const emit = defineEmits(["update:modelValue"]);
const payload = reactive({
  activeColor: props.modelValue,
});

onBeforeMount(() => {
  if (!payload.activeColor && props.colors.length > 0) {
    emit("update:modelValue", props.colors[0]);
  }
});

const { computedInputSize } = useInputSize(props);

const handleChangeEvents = (color) => {
  emit("update:modelValue", color);

  payload.activeColor = color;
};

const copyCode = () => {
  copy(payload.activeColor);

  alert("Code copied to clipboard!");
};
</script>

<style scoped lang="scss">
.ui-custom__color__config {
  .ui-colors {
    //background-color: red;
    display: flex;
    align-items: flex-start;
    gap: 18.848px;
    flex-wrap: wrap;

    .ui-color {
      border-radius: 10.79px;
      padding: 3.924px;
      background: transparent;
      cursor: pointer;

      .ui-color_inner {
        border-radius: 7.847px;
      }
    }
  }

  .ui-color__input__field {
    margin-top: 16px;
    width: 390px;
    border-radius: 4px;
    cursor: copy;

    .ui-color__input__field__right {
      display: flex;
      height: 100%;
      width: 100%;
      padding: 12px 15px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 0px 4px 4px 0px;
      border-left: 1px solid #ced6de;
      background: #fff;
      box-shadow: 0 1px 2px 0px rgba(63, 63, 68, 0.1);

      .ui-color__input__field__square {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        border-radius: 6px;
      }
    }
  }
}
</style>

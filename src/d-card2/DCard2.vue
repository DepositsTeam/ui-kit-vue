<template>
  <d-card
    cursor="pointer"
    flex-grow="1"
    :class="isChecked ? 'checked' : ''"
    class="ui-d__card2"
    @click="handleClick"
  >
    <d-box display="flex" padding="1rem" gap="30px">
      <d-box>
        <d-box is="img" :src="icon" width="50px"></d-box>
      </d-box>
      <d-box>
        <slot name="title">
          <d-heading scale="h5" margin-bottom="0.5rem" class="text-gray-700"
            >{{ title }}
          </d-heading>
        </slot>
        <slot name="description">
          <d-text font-face="circularSTD" class="text-gray-600" scale="subhead"
            >{{ description }}
          </d-text>
        </slot>
        <d-box display="flex" gap="20px">
          <slot name="links">
            <d-box
              is="a"
              :href="docLink"
              target="_blank"
              display="flex"
              align-items="center"
              margin-top="1rem"
              class="text-gray-700"
              text-decoration="none"
            >
              <book-filled-icon
                height="20px"
                width="20px"
                class="text-gray-400"
              />
              <d-text
                class="text-cyan-500"
                padding-right=".3rem"
                padding-left=".3rem"
              >
                Docs
              </d-text>
              <external-link-icon
                height="20px"
                width="20px"
                class="text-cyan-500"
              />
            </d-box>
            <d-box
              is="a"
              :href="demoLink"
              target="_blank"
              display="flex"
              align-items="center"
              margin-top="1rem"
              class="text-gray-700"
              text-decoration="none"
            >
              <eye-filled-icon
                height="20px"
                width="20px"
                class="text-gray-400"
              />
              <d-text
                class="text-cyan-500"
                padding-right=".3rem"
                padding-left=".3rem"
              >
                Demo
              </d-text>
            </d-box>
          </slot>
        </d-box>
      </d-box>
    </d-box>
  </d-card>
</template>

<script setup>
import { DBox, DText, DCard, DHeading } from "@/main";
import BookFilledIcon from "@/icons/filled/BookFilledIcon.vue";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon.vue";
import EyeFilledIcon from "@/icons/filled/EyeFilledIcon.vue";
import { onBeforeMount, ref } from "vue";

const emit = defineEmits(["update:modelValue"]);
const newValue = ref("");
const isChecked = ref(false);

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  docLink: {
    type: String,
  },
  demoLink: {
    type: String,
  },
  icon: {
    type: Object,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

onBeforeMount(() => {
  newValue.value = props.value;

  checkStatus();
});

const handleClick = () => {
  emit("update:modelValue", newValue.value);

  checkStatus();
};

const checkStatus = () => {
  if (props.modelValue && newValue.value) {
    if (props.modelValue === newValue.value) {
      isChecked.value = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-d__card2 {
  transition: 0.3s ease-in-out;
  border-radius: 5px;
}

.ui-d__card2.checked {
  border: 1px solid #0cb9e9;
  box-shadow: 0 0 0 4px rgba(12, 185, 233, 0.35);
}
</style>

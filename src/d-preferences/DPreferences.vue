<template>
  <d-box class="ui-preferences" v-for="list in payload.preferences" :key="list.title">
    <d-box class="card" display="flex" flex-direction="column">
      <d-box class="ui-card-header ui-rounded-top">
        <d-text class="ui-card-header-text">{{ list.title }}</d-text>
      </d-box>
      <!-- Switches -->
      <d-box class="ui-card-body" v-for="item in list.items" :key="item.id">
        <d-box class="ui-card__inner">
          <d-text class="ui-card-text">{{ item.key }}</d-text>
          <d-switch v-model="item.value" @change="handleChange" />
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DSwitch } from "@/main";
import { onMounted, reactive } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  lists: {
    type: Array,
  },
  modelValue: {
    type: Array,
  },
});

const payload = reactive({
  preferences: [],
});

onMounted(() => {
  payload.preferences = props.lists;
});

const handleChange = () => {
  emit("update:modelValue", payload.preferences);
};
</script>

<style scoped lang="scss">
.ui-card-text {
  font-size: 16px;
}

.ui-card-header {
  padding: 12px 24px;
  gap: 8px;
  background: #f7fafc;
  box-shadow: inset 0px -1px 0px #e1e7ec;

  &.ui-rounded-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .ui-card-header-text {
    color: #2a2e33;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    text-transform: uppercase;
  }
}

.ui-card-body-two {
  padding: 12px 24px;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.ui-card__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  gap: 8px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e1e7ec;
}

p,
h3 {
  margin: 0;
}
</style>

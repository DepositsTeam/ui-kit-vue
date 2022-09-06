<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M19.8478 7.18091H4.15221C3.51586 7.18091 3 7.68827 3 8.31414V10.3447C3 10.9706 3.51586 11.4779 4.15221 11.4779H19.8478C20.4841 11.4779 21 10.9706 21 10.3447V8.31414C21 7.68827 20.4841 7.18091 19.8478 7.18091Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M19.3984 13.8162V18.133C19.3984 18.6547 19.1876 19.1552 18.8126 19.5241C18.4375 19.893 17.9288 20.1 17.3984 20.1H6.60485C6.07442 20.1 5.56576 19.893 5.19069 19.5241C4.81561 19.1552 4.60488 18.6547 4.60488 18.133V11.4779"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12 6.34985C12 5.70014 12.2624 5.07704 12.7295 4.61762C13.1966 4.15821 13.8301 3.90015 14.4907 3.90015V3.90015C15.1513 3.90015 15.7849 4.15821 16.252 4.61762C16.7191 5.07704 16.9817 5.70014 16.9817 6.34985"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12 11.7782V20.1001"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M7.01748 6.34985C7.01748 5.70014 7.27986 5.07704 7.74697 4.61762C8.21409 4.15821 8.84762 3.90015 9.50821 3.90015V3.90015C10.1688 3.90015 10.8023 4.15821 11.2694 4.61762C11.7366 5.07704 11.9989 5.70014 11.9989 6.34985"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
defineProps({
  smartColor: {
    type: String,
    default: "currentcolor",
  },
  fill: {
    type: String,
  },
  stroke: {
    type: String,
  },
  strokeWidth: {
    type: String,
    default: "1.5",
  },
  strokeLineCap: {
    type: String,
    default: "round",
  },
  strokeLineJoin: {
    type: String,
    default: "round",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>

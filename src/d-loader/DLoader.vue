<template>
  <d-box
    :class="{ fullPage, loading, translucent }"
    class="ui-d-loader"
    :style="{
      '--smart-color': computedColor,
      '--loader-size': loaderSize,
      '--ring-thickness': ringThickness,
    }"
  >
    <d-box v-if="loading" class="ui-d-loader__wrapper">
      <d-box v-if="loader === 'ring'" class="ring-loader">
        <d-box></d-box>
        <d-box></d-box>
        <d-box></d-box>
        <d-box></d-box>
      </d-box>
      <d-box v-else-if="loader === 'equalizer'" class="equalizer-loader" />
      <d-box
        v-else-if="loader === 'ringed-circle'"
        class="ringed-circle-loader"
      />
    </d-box>
    <slot v-else></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { computed, inject, unref } from "vue";
import { defaultThemeVars } from "../providers/default-theme";

const props = defineProps({
  fullPage: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: true,
  },
  loader: {
    type: String,
    validator: (value) =>
      ["ring", "equalizer", "ringed-circle"].includes(value),
    default: "ring",
  },
  ringThickness: {
    type: String,
    default: "8px",
  },
  loaderSize: {
    type: String,
    default: "80px",
  },
  smartColor: {
    type: String,
  },
  translucent: {
    type: Boolean,
  },
});

const d__theme = inject("d__theme", defaultThemeVars);
const darkMode = inject("d__darkMode");

const darkModeIsEnabled = computed(
  () => darkMode !== null && darkMode !== undefined && darkMode.value
);

const computedColor = computed(() => {
  if (props.smartColor) {
    return props.smartColor;
  } else {
    return darkModeIsEnabled.value
      ? unref(d__theme)["--dark-primary-color"]
      : unref(d__theme)["--light-primary-color"];
  }
});
</script>

<style scoped lang="sass">
.ui-d-loader.loading.fullPage
  display: flex
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100vh
  z-index: 99999999999999
  background: var(--light-background-color)
  align-items: center
  justify-content: center
  &.translucent
    background: rgba(var(--light-background-color), 0.5)

  &.dark_mode
    background: var(--dark-background-color)
    &.translucent
      background: rgba(var(--dark-background-color), 0.5)

    .ring-loader div
      border-color: var(--dark-primary-action-color) transparent transparent transparent

.ui-d-loader__wrapper
  height: var(--loader-size)
  width: var(--loader-size)


// HEIGHT = 80PX
.ring-loader
  display: inline-block
  position: relative
  width: var(--loader-size)
  height: var(--loader-size)
  div
    box-sizing: border-box
    display: block
    position: absolute
    width: calc(var(--loader-size) * 0.8)
    height: calc(var(--loader-size) * 0.8)
    margin: calc(var(--loader-size) / 10)
    border: calc(var(--loader-size) * 0.1) solid
    border-radius: 50%
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
    border-color: var(--smart-color) transparent transparent transparent
    &:nth-child(1)
      animation-delay: -0.45s

    &:nth-child(2)
      animation-delay: -0.3s

    &:nth-child(3)
      animation-delay: -0.15s



@keyframes lds-ring
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)


// ORIGINAL HEIGHT = 40PX NEW HEIGHT = 80PX
.equalizer-loader
  width: calc(var(--loader-size) * 0.2)
  height: var(--loader-size)
  border-radius: calc(var(--loader-size) * 0.1)
  display: block
  margin: calc(var(--loader-size) / 3)
  position: relative
  background: var(--smart-color)
  color: #FFF
  box-sizing: border-box
  animation: equalizerLoader 0.3s 0.3s ease-in-out infinite alternate

  &::after
    content: ''
    width: calc(var(--loader-size) * 0.2)
    height: var(--loader-size)
    border-radius: calc(var(--loader-size) * 0.1)
    background: var(--smart-color)
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: calc(var(--loader-size) / 3)
    box-sizing: border-box
    animation: equalizerLoader 0.3s  0.45s  ease-in-out infinite alternate

  &::before
    content: ''
    width: calc(var(--loader-size) * 0.2)
    height: var(--loader-size)
    border-radius: calc(var(--loader-size) * 0.1)
    background: var(--smart-color)
    position: absolute
    top: 50%
    transform: translateY(-50%)
    box-sizing: border-box
    animation: equalizerLoader 0.3s  0.45s  ease-in-out infinite alternate
    left: calc(var(--loader-size) / 3 * -1)
    animation-delay: 0s

@keyframes equalizerLoader
  0%
    height: calc(var(--loader-size) + calc(var(--loader-size) * 0.2))

  100%
    height: calc(var(--loader-size) * 0.1)


.ringed-circle-loader
  width: var(--loader-size)
  height: var(--loader-size)
  background: var(--smart-color)
  border-radius: 50%
  position: relative
  animation: ringedCircleAnimate 1s ease-in-out infinite alternate

  &:after
    content: ""
    position: absolute
    inset: 5px
    border-radius: 50%
    border: 5px solid transparent
    border-top-color: #fff

@keyframes ringedCircleAnimate
  95% ,100%
    transform: rotate(840deg)
</style>

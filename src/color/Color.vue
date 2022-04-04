<template>
  <d-box
    class="ui-color"
    :class="[`bg-${getProperColorName(colorName)}`, `text-${textColor}`]"
  >
    <div v-if="colors && colors.length">
      <div
        v-for="(color, index) in colors"
        :key="`ui-color__${index}__${keyGen()}`"
        :class="`ui-color__container bg-${getProperColorName(
          color.colorName
        )} text-${color.textColor}`"
      >
        <p>{{ color.colorName }}</p>
        <p>{{ color.colorCode }}</p>
      </div>
    </div>
    <div v-else>
      <div class="ui-color__container">
        <p>{{ colorName }}</p>
        <p>{{ colorCode }}</p>
      </div>
    </div>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import keyGen from "../utils/keyGen";
export default {
  name: "Color",
  components: {
    DBox,
  },
  props: {
    colorName: {
      type: String,
      default: "Cyan 100",
    },
    colorCode: {
      type: String,
      default: "#F2FAFC",
    },
    textColor: {
      type: String,
    },
    colors: {
      type: Array,
    },
  },
  methods: {
    keyGen,
    getProperColorName(colorName) {
      const colorNameArray = colorName.split(" ");
      return `${colorNameArray[0].toLowerCase()}-${colorNameArray[1]}`;
    },
  },
};
</script>

<style scoped>
.ui-color {
  font-size: 12px;
  line-height: 16px;
  width: 394px;
  height: 48px;
  display: block;
}

.ui-color__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
</style>

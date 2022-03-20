<script>
import { h } from "vue";

export default {
  props: {
    is: {
      type: String,
      default: "div",
    },
    fontFace: {
      type: String,
      default: "heroNew",
      validator: (value) => ["heroNew", "circularSTD"].includes(value),
    },
    modelValue: {
      type: [Number, String],
    },
  },
  emits: ["change", "click", "input", "keydown", "keyup", "keypress"],
  setup(props, { slots, emit }) {
    return () =>
      h(
        props.is,
        {
          onChange: function (e) {
            emit("change", e);
          },
          onFocus: function (e) {
            emit("focus", e);
          },
          onBlur: function (e) {
            emit("blur", e);
          },
          onClick: function (e) {
            emit("click", e);
          },
          onInput: function (e) {
            emit("input", e);
          },
          onKeydown: function (e) {
            emit("keydown", e);
          },
          onKeyup: function (e) {
            emit("keyup", e);
          },
          onKeypress: function (e) {
            emit("keypress", e);
          },
          class: { [props.fontFace]: props.fontFace },
        },
        [...(slots.default ? [slots.default()] : [])]
      );
  },
};
</script>
<style lang="scss">
@import url("https://assets.deposits.com/fonts/css/CircularSTD.css");
@import url("https://assets.deposits.com/fonts/css/HeroNew.css");

.heroNew {
  font-family: "Hero New", sans-serif;
}

.circularSTD {
  font-family: "Circular Std", sans-serif;
}
</style>

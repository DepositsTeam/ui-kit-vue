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
  },
  setup(props, { slots }) {
    return () =>
      h(props.is, { class: { [props.fontFace]: props.fontFace } }, [
        ...(slots.default ? [slots.default()] : []),
      ]);
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

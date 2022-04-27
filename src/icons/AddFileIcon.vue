<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-bind="$attrs"
    >
      <path
        :fill-rule="fillRule"
        :clip-rule="clipRule"
        :fill="smartColor || fill"
        d="M4.85707 3.85483C5.08826 3.62889 5.40567 3.4989 5.74011 3.4989H11.1442V7.00002C11.1442 7.59144 11.3847 8.15482 11.8071 8.56757C12.2287 8.97962 12.7972 9.20858 13.3866 9.20858H17.0597V9.58078C17.0597 9.99499 17.3955 10.3308 17.8097 10.3308C18.224 10.3308 18.5597 9.99499 18.5597 9.58078V8.49478C18.5603 8.48278 18.5606 8.47071 18.5606 8.45858C18.5606 8.44644 18.5603 8.43437 18.5597 8.42238V7.71852C18.5597 7.51146 18.4741 7.31361 18.3232 7.17185L13.0324 2.20224C12.8934 2.07161 12.7097 1.9989 12.5189 1.9989H5.74011C5.01905 1.9989 4.32383 2.2786 3.80867 2.78206C3.29291 3.28609 3.00009 3.97353 3.00009 4.69372V18.3065C3.00009 19.0268 3.29299 19.714 3.80867 20.2179C4.32383 20.7214 5.01905 21.0011 5.74011 21.0011H15.8207C16.2349 21.0011 16.5707 20.6653 16.5707 20.2511C16.5707 19.8369 16.2349 19.5011 15.8207 19.5011H5.74011C5.40567 19.5011 5.08826 19.3711 4.85707 19.1451C4.6264 18.9197 4.50009 18.6177 4.50009 18.3065V4.69372C4.50009 4.38239 4.62647 4.08019 4.85707 3.85483ZM16.7037 7.70858L12.6442 3.8955V7.00002C12.6442 7.18225 12.718 7.36049 12.8555 7.49479C12.9936 7.6298 13.1845 7.70858 13.3866 7.70858H16.7037Z"
      />
      <path
        d="M17.8368 12.1666V18.5741"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M14.5371 15.3708H20.9994"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
    </svg>
</template>

<script setup>
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

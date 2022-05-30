<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7472 12.75H5.72946C5.32535 12.75 4.99023 12.41 4.99023 12V4.5C4.99023 2.98 6.20256 1.75 7.70072 1.75H12.7472C15.7336 1.75 18.1681 4.22 18.1681 7.25C18.1681 10.28 15.7336 12.75 12.7472 12.75ZM6.45883 11.25H12.7472C14.9254 11.25 16.6897 9.46 16.6897 7.25C16.6897 5.04 14.9254 3.25 12.7472 3.25H7.70072C7.02064 3.25 6.46868 3.81 6.46868 4.5V11.25H6.45883Z"
      :fill="smartColor || fill"
    />
    <path
      d="M15.093 22.25H7.70072C6.20256 22.25 4.99023 21.02 4.99023 19.5V12C4.99023 11.59 5.32535 11.25 5.72946 11.25H15.093C18.0794 11.25 20.5139 13.72 20.5139 16.75C20.5139 19.78 18.0794 22.25 15.093 22.25ZM6.45883 12.75V19.5C6.45883 20.19 7.01078 20.75 7.69087 20.75H15.0831C17.2614 20.75 19.0256 18.96 19.0256 16.75C19.0256 14.54 17.2614 12.75 15.0831 12.75H6.45883Z"
      :fill="smartColor || fill"
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

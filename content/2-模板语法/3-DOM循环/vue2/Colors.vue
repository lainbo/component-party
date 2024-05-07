<script>
export default {
  data() {
    return {
      colors: ["红", "绿", "蓝"],
    };
  },
};
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>

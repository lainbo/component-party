<script>
export default {
  data() {
    return {
      picked: "red",
    };
  },
};
</script>

<template>
  <div>
    <div>你选择了: {{ picked }}</div>

    <input
      id="blue-pill"
      v-model="picked"
      type="radio"
      value="blue"
    >
    <label for="blue-pill">蓝色</label>

    <input
      id="red-pill"
      v-model="picked"
      type="radio"
      value="red"
    >
    <label for="red-pill">红色</label>
  </div>
</template>

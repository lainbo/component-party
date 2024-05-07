<script>
export default {
  data() {
    return {
      text: "这是一段示范文字",
    };
  },
};
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <input v-model="text">
  </div>
</template>

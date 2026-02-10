<script>
export default {
  data() {
    return {
      text: "你好世界",
    };
  },
};
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <input v-model="text" />
  </div>
</template>

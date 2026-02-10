<script setup>
import { ref } from "vue";
const text = ref("你好世界");
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>

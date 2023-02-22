<script setup>
import { ref } from "vue";
const text = ref("这是一段示范文字");
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text">
</template>

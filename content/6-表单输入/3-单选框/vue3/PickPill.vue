<script setup>
import { ref } from "vue";

const picked = ref("red");
</script>

<template>
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
</template>

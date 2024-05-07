<script setup>
import { ref } from "vue";

const selectedColorId = ref(2);

const colors = [
  { id: 1, text: "红" },
  { id: 2, text: "蓝" },
  { id: 3, text: "绿" },
  { id: 4, text: "灰", isDisabled: true },
];
</script>

<template>
  <select v-model="selectedColorId">
    <option
      v-for="color in colors"
      :key="color.id"
      :value="color.id"
      :disabled="color.isDisabled"
    >
      {{ color.text }}
    </option>
  </select>
</template>

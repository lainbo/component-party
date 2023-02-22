<script setup>
import { ref } from "vue";
const count = ref(0);

function incrementCount() {
  count.value++;
}
</script>

<template>
  <p>计数器: {{ count }}</p>
  <button @click="incrementCount">
    +1
  </button>
</template>

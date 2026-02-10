<script setup>
import { ref, onMounted } from "vue";
const pageTitle = ref("");
onMounted(() => {
  pageTitle.value = document.title;
});
</script>

<template>
  <p>页面标题: {{ pageTitle }}</p>
</template>

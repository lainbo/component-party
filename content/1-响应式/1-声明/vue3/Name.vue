<script setup>
import { ref } from "vue";
const name = ref("张三");
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>

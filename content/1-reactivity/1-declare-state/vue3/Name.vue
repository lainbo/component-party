<script setup>
import { ref } from "vue";
const name = ref("张三");
</script>

<template>
  <h1>你好 {{ name }}</h1>
</template>

<script setup>
const emit = defineEmits(["yes", "no"]);

function clickYes() {
  emit("yes");
}

function clickNo() {
  emit("no");
}
</script>

<template>
  <button @click="clickYes">
    是的！
  </button>

  <button @click="clickNo">
    不是！
  </button>
</template>

<script setup>
import { ref, computed } from "vue";
const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];
const lightIndex = ref(0);

const light = computed(() => TRAFFIC_LIGHTS[lightIndex.value]);

function nextLight() {
  if (lightIndex.value + 1 > TRAFFIC_LIGHTS.length - 1) {
    lightIndex.value = 0;
  } else {
    lightIndex.value++;
  }
}
</script>

<template>
  <button @click="nextLight">
    下一个灯
  </button>
  <p>现在亮着的是: {{ light }}</p>
  <p>
    你应该
    <span v-if="light === '红灯'">停下</span>
    <span v-else-if="light === '黄灯'">慢行</span>
    <span v-else-if="light === '绿灯'">赶紧走</span>
  </p>
</template>

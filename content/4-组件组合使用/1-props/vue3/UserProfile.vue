<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  age: {
    type: Number,
    required: true,
    default: null,
  },
  favouriteColors: {
    type: Array,
    required: true,
    default: () => [],
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<template>
  <p>我的名字是 {{ props.name }}!</p>
  <p>我的年龄是 {{ props.age }}!</p>
  <p>我喜欢的颜色是 {{ props.favouriteColors.join(", ") }}!</p>
  <p>我现在 {{ props.isAvailable ? '离职状态' : '在职' }}</p>
</template>

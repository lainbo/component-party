<script>
export default {
  props: {
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
    favoriteColors: {
      type: Array,
      required: true,
      default: () => [],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <p>我的名字是 {{ props.name }}!</p>
    <p>我的年龄是 {{ props.age }}!</p>
    <p>My favorite colors are {{ props.favoriteColors.join(", ") }}!</p>
    <p>我现在 {{ props.isAvailable ? '离职状态' : '在职' }}</p>
  </div>
</template>

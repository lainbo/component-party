<script>
export default {
  data() {
    return {
      name: "张三",
    };
  },
  created() {
    this.name = "李四";
  },
};
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>

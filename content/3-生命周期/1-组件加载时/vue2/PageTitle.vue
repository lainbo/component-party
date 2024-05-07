<script>
export default {
  data() {
    return {
      pageTitle: "",
    };
  },
  mounted() {
    this.pageTitle = document.title;
  },
};
</script>

<template>
  <p>页面标题: {{ pageTitle }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<template>
  <div>
    <p>计数器: {{ count }}</p>
    <button @click="incrementCount">
      +1
    </button>
  </div>
</template>

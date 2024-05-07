<script>
export default {
  methods: {
    clickYes() {
      this.$emit("yes");
    },
    clickNo() {
      this.$emit("no");
    },
  },
};
</script>

<template>
  <div>
    <button @click="clickYes">
      是的！
    </button>

    <button @click="clickNo">
      不是！
    </button>
  </div>
</template>

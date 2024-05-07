<script>
export default {
  data() {
    return {
      isAvailable: true,
    };
  },
};
</script>

<template>
  <div>
    <input
      id="is-available"
      v-model="isAvailable"
      type="checkbox"
    >
    <label for="is-available">这是一个checkbox</label>
  </div>
</template>

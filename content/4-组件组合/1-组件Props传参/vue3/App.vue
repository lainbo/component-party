<script setup>
import UserProfile from "./UserProfile.vue";
</script>

<template>
  <UserProfile
    name="张三"
    :age="20"
    :favourite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>

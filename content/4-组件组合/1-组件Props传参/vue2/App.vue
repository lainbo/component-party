<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
};
</script>

<template>
  <UserProfile
    name="张三"
    :age="20"
    :favorite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>

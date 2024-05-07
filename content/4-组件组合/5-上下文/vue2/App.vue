<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: { UserProfile },
  provide() {
    return {
      user: Object.assign(this.user, {
        updateUsername: this.updateUsername,
      }),
    };
  },
  data() {
    return {
      user: {
        id: 1,
        username: "abcdefg",
        email: "abcdefg@example.com",
      },
    };
  },
  methods: {
    updateUsername(newUsername) {
      this.user.username = newUsername;
    },
  },
};
</script>

<template>
  <div>
    <h1>欢迎回来, {{ user.username }}</h1>
    <UserProfile />
  </div>
</template>

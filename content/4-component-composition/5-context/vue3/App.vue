<script setup>
import { ref, provide } from "vue";
import UserProfile from "./UserProfile.vue";

const user = ref({
  id: 1,
  username: "abcdefg",
  email: "abcdefg@example.com",
});

function updateUsername(username) {
  user.value.username = username;
}

provide("user", { user, updateUsername });
</script>

<template>
  <h1>欢迎回来, {{ user.username }}</h1>
  <UserProfile />
</template>

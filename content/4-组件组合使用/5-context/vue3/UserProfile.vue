<script setup>
import { inject } from "vue";
const { user, updateUsername } = inject("user");
</script>

<template>
  <div>
    <h2>My Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="() => updateUsername('李四')">
      Update username to 李四
    </button>
  </div>
</template>

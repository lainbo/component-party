<script>
export default {
  inject: ["user"],
};
</script>

<template>
  <div>
    <h2>My Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="() => user.updateUsername('李四')">
      Update username to 李四
    </button>
  </div>
</template>

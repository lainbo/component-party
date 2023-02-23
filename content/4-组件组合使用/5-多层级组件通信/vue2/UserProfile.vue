<script>
export default {
  inject: ["user"],
};
</script>

<template>
  <div>
    <h2>我的简介</h2>
    <p>用户名: {{ user.username }}</p>
    <p>邮箱: {{ user.email }}</p>
    <button @click="() => user.updateUsername('李四')">
      更新用户名为李四
    </button>
  </div>
</template>

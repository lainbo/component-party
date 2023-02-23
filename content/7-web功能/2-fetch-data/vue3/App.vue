<script setup>
import useFetchUsers from "./useFetchUsers";

const { isLoading, error, data: users } = useFetchUsers();
</script>

<template>
  <p v-if="isLoading">
    正在获取用户信息
  </p>
  <p v-else-if="error">
    获取用户信息出错
  </p>
  <ul v-else-if="users">
    <li
      v-for="user in users"
      :key="user.login.uuid"
    >
      <img
        :src="user.picture.thumbnail"
        alt="user"
      >
      <p>
        {{ user.name.first }}
        {{ user.name.last }}
      </p>
    </li>
  </ul>
</template>

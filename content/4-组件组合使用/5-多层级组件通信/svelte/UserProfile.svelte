<script>
  import { getContext } from "svelte";

  const userStore = getContext("user");
</script>

<div>
  <h2>我的简介</h2>
  <p>用户名: {$userStore.username}</p>
  <p>邮箱: {$userStore.email}</p>
  <button on:click={() => userStore.updateUsername("李四")}>
    更新用户名为李四
  </button>
</div>

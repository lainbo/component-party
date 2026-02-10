<script>
  import useFetchUsers from "./useFetchUsers.svelte.js";

  const response = useFetchUsers();
</script>

{#if response.isLoading}
  <p>正在获取用户信息……</p>
{:else if response.error}
  <p>获取用户信息出错</p>
{:else if response.users}
  <ul>
    {#each response.users as user}
      <li>
        <img src={user.picture.thumbnail} alt="user" />
        <p>
          {user.name.first}
          {user.name.last}
        </p>
      </li>
    {/each}
  </ul>
{/if}

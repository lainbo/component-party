<script>
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import createUserStore from "./createUserStore.js";

  // 在实际项目，你会从接口获取用户数据
  const userStore = createUserStore({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  setContext("user", userStore);
</script>

<h1>欢迎回来, {$userStore.username}</h1>
<UserProfile />

<script>
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import createUserState from "./createUserState.svelte.js";

  const user = createUserState({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  setContext("user", user);
</script>

<h1>欢迎回来, {user.username}</h1>
<UserProfile />

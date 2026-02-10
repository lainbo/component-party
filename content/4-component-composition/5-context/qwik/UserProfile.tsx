import { component$, useContext } from "@builder.io/qwik";
import { UserContext } from "./App";

const UserProfile = component$(() => {
  const { user, updateUsername } = useContext(UserContext);

  return (
    <div>
      <h2>我的简介</h2>
      <p>用户名: {user.username}</p>
      <p>邮箱: {user.email}</p>
      <button onClick$={() => updateUsername("李四")}>
        更新用户名为 李四
      </button>
    </div>
  );
});

export default UserProfile;

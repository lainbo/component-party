import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
  const { username, email, updateUsername } = useContext(UserContext);

  return (
    <div>
      <h2>我的简介</h2>
      <p>用户名: {username}</p>
      <p>邮箱: {email}</p>
      <button onClick={() => updateUsername("李四")}>
        更新用户名为 李四
      </button>
    </div>
  );
}

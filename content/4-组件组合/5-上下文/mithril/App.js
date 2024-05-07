import m from "mithril";
import UserProfile from "./UserProfile.jsx";

export default function App() {
  // 在实际项目，你会从接口获取用户数据
  const user = {
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  };

  const updateUsername = (username) => (user.username = username);

  return {
    view: () =>
      m(
        "",
        m("h1", `欢迎回来, ${user.username}`),
        m(UserProfile, { user, updateUsername })
      ),
  };
}

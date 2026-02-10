import m from "mithril";
import UserProfile from "./UserProfile";

export default function App() {
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
        m(UserProfile, { user, updateUsername }),
      ),
  };
}

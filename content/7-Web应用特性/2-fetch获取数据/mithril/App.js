import m from "mithril";
import { fetchUsers } from "./useFetchUsers";

export default function App() {
  let isLoading = false;
  let error = null;
  let users = [];

  const onSuccess = (data) => (users = data);
  const onError = (err) => (error = err);
  fetchUsers(isLoading, onSuccess, onError);

  return {
    view: () =>
      m(
        "",
        isLoading && m("p", "正在获取用户信息……"),
        error
          ? m("p", "获取用户信息出错")
          : users.map((user) =>
              m(
                "li",
                { key: user.login.uuid },
                m("img", { src: user.picture.profile, alt: "user" }),
                m("p", `${user.name.first} ${user.name.last}`)
              )
            )
      ),
  };
}

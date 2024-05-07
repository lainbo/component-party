import m from "mithril";
export default function UserProfile() {
  return {
    view: ({
      attrs: {
        user: { username, email },
        updateUsername,
      },
    }) =>
      m(
        "div",
        m("h2", "我的简介"),
        m("p", `用户名: ${username}`),
        m("p", `邮箱 : ${email}`),
        m(
          "button",
          { onclick: () => updateUsername("李四") },
          "更新用户名为 李四"
        )
      ),
  };
}

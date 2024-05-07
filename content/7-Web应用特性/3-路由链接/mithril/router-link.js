import m from "mithril";

export default function App() {
  const navigateTo = (loc) => m.route.set(loc);

  return {
    view: () =>
      m(
        "ul",
        m("li", m("button", { onclick: navigateTo("/") }, "首页")),
        m("li", m("button", { onclick: navigateTo("/about") }, "关于"))
      ),
  };
}

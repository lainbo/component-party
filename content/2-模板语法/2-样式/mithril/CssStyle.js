import "./style.css";
import m from "mithril";

export default function CssStyle() {
  return {
    view: () =>
      m(
        "div",
        m("h1.title", "我是红色的"),
        m("button", { style: { fontSize: "10rem" } }, "我是一个按钮")
      ),
  };
}

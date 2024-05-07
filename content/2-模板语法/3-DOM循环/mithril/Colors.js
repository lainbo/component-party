import m from "mithril";

export default function Colors() {
  const colors = ["红", "绿", "蓝"];
  return {
    view: () =>
      m(
        "ul",
        colors.map((color, idx) => m("li", { key: idx }, color))
      ),
  };
}

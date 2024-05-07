import m from "mithril";

export default function PageTitle() {
  return {
    view: () => m("p", `页面标题: ${document.title}`),
  };
}

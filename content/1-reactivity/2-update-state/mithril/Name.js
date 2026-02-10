import m from "mithril";

export default function Name() {
  let name = "张三";
  name = "李四";
  return {
    view: () => m("h1", `你好 ${name}`),
  };
}

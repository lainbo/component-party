import m from "mithril";

export default function Time() {
  let time = new Date().toLocaleTimeString();

  const timer = setInterval(() => {
    time = new Date().toLocaleTimeString();
    m.redraw();
  }, 1000);

  return {
    view: () => m("p", `当前时间: ${time}`),
    onremove: () => clearInterval(timer),
  };
}

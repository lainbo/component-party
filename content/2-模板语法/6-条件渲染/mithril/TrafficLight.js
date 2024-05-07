import m from "mithril";
const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export default function TrafficLight() {
  let lightIndex = 0;
  let currentLight = () => TRAFFIC_LIGHTS[lightIndex];

  const nextLight = () => (lightIndex + 1) % TRAFFIC_LIGHTS.length;

  const instructions = () => {
    switch (currentLight()) {
      case "红灯":
        return "停下";
      case "黄灯":
        return "慢行";
      case "绿灯":
        return "赶紧走";
    }
  };

  return {
    view: () =>
      m(
        "div",
        m("button", { onclick: nextLight }, "下一个灯"),
        m("p", `现在亮着的是: ${currentLight()}`),
        m("p", "你应该 ", m("span", instructions()))
      ),
  };
}

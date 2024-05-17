import { createSignal, Switch, Match } from "solid-js";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export default function TrafficLight() {
  const [lightIndex, setLightIndex] = createSignal(0);

  const light = () => TRAFFIC_LIGHTS[lightIndex()];

  function nextLight() {
    setLightIndex((lightIndex() + 1) % TRAFFIC_LIGHTS.length);
  }

  return (
    <>
      <button onClick={nextLight}>下一个灯</button>
      <p>现在亮着的是: {light()}</p>
      <p>
        你应该
        <Switch>
          <Match when={light() === "红灯"}>
            <span>停下</span>
          </Match>
          <Match when={light() === "黄灯"}>
            <span>慢行</span>
          </Match>
          <Match when={light() === "绿灯"}>
            <span>赶紧走</span>
          </Match>
        </Switch>
      </p>
    </>
  );
}

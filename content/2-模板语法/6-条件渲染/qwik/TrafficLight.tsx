import { $, component$, useStore } from "@builder.io/qwik";

export const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export const App = component$(() => {
  const store = useStore({
    lightIndex: 0,
  });

  const light = TRAFFIC_LIGHTS[store.lightIndex];

  const nextLight = $(() => {
    store.lightIndex = (store.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  });

  return (
    <>
      <button onClick$={nextLight}>下一个灯</button>
      <p>现在亮着的是: {light}</p>
      <p>
        你应该
        {light === "red" && <span>停下</span>}
        {light === "orange" && <span>慢行</span>}
        {light === "green" && <span>赶紧走</span>}
      </p>
    </>
  );
});

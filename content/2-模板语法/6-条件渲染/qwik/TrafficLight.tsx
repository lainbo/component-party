import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";

export const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export const TrafficLight = component$(() => {
  const lightIndex = useSignal(0);

  const light = useComputed$(() => TRAFFIC_LIGHTS[lightIndex.value]);

  const nextLight = $(() => {
    lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
  });

  return (
    <>
      <button onClick$={nextLight}>下一个灯</button>
      <p>现在亮着的是: {light.value}</p>
      <p>
        你应该
        {light.value === "红灯" && <span>停下</span>}
        {light.value === "黄灯" && <span>慢行</span>}
        {light.value === "绿灯" && <span>赶紧走</span>}
      </p>
    </>
  );
});

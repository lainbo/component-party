import { useState } from "react";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export default function TrafficLight() {
  const [lightIndex, setLightIndex] = useState(0);

  const light = TRAFFIC_LIGHTS[lightIndex];

  function nextLight() {
    setLightIndex((lightIndex + 1) % TRAFFIC_LIGHTS.length);
  }

  return (
    <>
      <button onClick={nextLight}>下一个灯</button>
      <p>现在亮着的是: {light}</p>
      <p>
        你应该
        {light === "红灯" && <span>停下</span>}
        {light === "黄灯" && <span>慢行</span>}
        {light === "绿灯" && <span>赶紧走</span>}
      </p>
    </>
  );
}

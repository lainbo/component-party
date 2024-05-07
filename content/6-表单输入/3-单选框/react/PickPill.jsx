import { useState } from "react";

export default function PickPill() {
  const [picked, setPicked] = useState("red");

  function handleChange(event) {
    setPicked(event.target.value);
  }

  return (
    <>
      <div>你选择了: {picked}</div>

      <input
        id="blue-pill"
        checked={picked === "blue"}
        type="radio"
        value="blue"
        onChange={handleChange}
      />
      <label htmlFor="blue-pill">蓝色</label>

      <input
        id="red-pill"
        checked={picked === "red"}
        type="radio"
        value="red"
        onChange={handleChange}
      />
      <label htmlFor="red-pill">红色</label>
    </>
  );
}

import { component$, useSignal } from "@builder.io/qwik";

const PickPill = component$(() => {
  const pickedColor = useSignal("red");

  return (
    <>
      <div>你选择了: {pickedColor.value}</div>
      <input
        id="blue-pill"
        type="radio"
        bind:value={pickedColor}
        checked={pickedColor.value === "blue"}
        value="blue"
      />
      <label for="blue-pill">蓝色</label>

      <input
        id="red-pill"
        type="radio"
        checked={pickedColor.value === "red"}
        bind:value={pickedColor}
        value="red"
      />
      <label for="red-pill">红色</label>
    </>
  );
});
export default PickPill;

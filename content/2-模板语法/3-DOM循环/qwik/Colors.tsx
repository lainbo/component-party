import { component$ } from "@builder.io/qwik";

export const Colors = component$(() => {
  const colors = ["红", "绿", "蓝"];
  return (
    <>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
});

import { For } from "solid-js";

export default function Colors() {
  const colors = ["红", "绿", "蓝"];

  return (
    <ul>
      <For each={colors}>{(color) => <li>{color}</li>}</For>
    </ul>
  );
}

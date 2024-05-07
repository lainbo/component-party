import { createSignal, For } from "solid-js";

const colors = [
  { id: 1, text: "红" },
  { id: 2, text: "蓝" },
  { id: 3, text: "绿" },
  { id: 4, text: "灰", isDisabled: true },
];

export default function ColorSelect() {
  const [selectedColorId, setSelectedColorId] = createSignal(2);

  function handleChange(event) {
    setSelectedColorId(event.target.value);
  }

  return (
    <select value={selectedColorId()} onChange={handleChange}>
      <For each={colors}>
        {(color) => (
          <option value={color.id} disabled={color.isDisabled}>
            {color.text}
          </option>
        )}
      </For>
    </select>
  );
}

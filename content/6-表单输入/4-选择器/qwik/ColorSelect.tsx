import { component$, useStore, $ } from "@builder.io/qwik";

export const colors = [
  { id: 1, text: "红" },
  { id: 2, text: "蓝" },
  { id: 3, text: "绿" },
  { id: 4, text: "灰", isDisabled: true },
];

const ColorSelect = component$(() => {
  const store = useStore({ selectedColorId: 2 });

  const handleChange = $((event: Event) => {
    store.selectedColorId = Number((event.target as HTMLInputElement).value);
  });

  return (
    <select value={store.selectedColorId} onChange$={handleChange}>
      {colors.map((color) => (
        <option value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  );
});

export default ColorSelect;

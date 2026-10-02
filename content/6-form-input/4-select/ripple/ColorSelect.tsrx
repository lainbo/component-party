import { bindValue, track } from "ripple";

const colors = [
  { id: 1, text: "红" },
  { id: 2, text: "蓝" },
  { id: 3, text: "绿" },
  { id: 4, text: "灰", isDisabled: true },
];

export default function ColorSelect() {
  let &[selectedColorId, selectedColorIdTracked] = track(2);

  return <select ref={bindValue(selectedColorIdTracked)}>
    for (const color of colors; key color.id) {
      <option value={color.id} disabled={color.isDisabled}>
        {color.text}
      </option>
    }
  </select>;
}

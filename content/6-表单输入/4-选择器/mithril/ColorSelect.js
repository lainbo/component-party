import m from "mithril";
const colors = [
  { id: 1, text: "红" },
  { id: 2, text: "蓝" },
  { id: 3, text: "绿" },
  { id: 4, text: "灰", isDisabled: true },
];

export default function ColorSelect() {
  let selectedColorId = 2;

  const handleSelect = ({ target: { value } }) => (selectedColorId = value);

  return {
    view: () =>
      m(
        "select",
        { value: selectedColorId, onchange: handleSelect },
        colors.map(({ id, text, isDisabled }) =>
          m("option", { key: id, id, disabled: isDisabled, value: id }, text)
        )
      ),
  };
}

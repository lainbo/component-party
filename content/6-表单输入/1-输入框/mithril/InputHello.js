import m from "mithril";

export default function InputHello() {
  let text = "这是一段示例文字";
  const handleChange = ({ target: { value } }) => (text = value);

  return {
    view: () =>
      m("", m("p", text), m("input", { value: text, onchange: handleChange })),
  };
}

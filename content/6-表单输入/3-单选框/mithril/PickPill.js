import m from "mithril";

export default function PickPill() {
  let picked = "red";
  let pills = ["蓝色", "红色"];
  const handleChange = ({ target: { value } }) => (picked = value);

  return {
    view: () =>
      m(
        "",
        m("", `你选择了: ${picked}`),
        pills.map((pill) =>
          m(
            ".",
            m("input", {
              id: pill,
              checked: picked == pill,
              type: "radio",
              value: pill,
              onchange: handleChange,
            }),
            m("label", { for: pill }, pill)
          )
        )
      ),
  };
}

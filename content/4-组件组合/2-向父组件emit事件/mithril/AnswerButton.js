import m from "mithril";
export const AnswerButton = ({ attrs: { onYes, onNo } }) => ({
  view: () =>
    m(
      "div",
      m("button", { onclick: onYes }, "是的！"),
      m("button", { onclick: onNo }, "不是！")
    ),
});

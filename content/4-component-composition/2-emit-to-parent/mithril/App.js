import m from "mithril";
import AnswerButton from "./AnswerButton.js";

export default function App() {
  let isHappy = true;
  const onAnswerNo = () => (isHappy = false);
  const onAnswerYes = () => (isHappy = true);

  return {
    view: () =>
      m(
        "",
        m("p", "你快乐吗?"),
        m("p", { style: { fontSize: 50 } }, isHappy ? "😀" : "😥"),
        m(AnswerButton, { onYes: onAnswerYes, onNo: onAnswerNo }),
      ),
  };
}

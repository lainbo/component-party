import { track } from "ripple";

import { AnswerButton } from "./AnswerButton.tsrx";

export function App() {
  let &[isHappy] = track(true);

  function onAnswerNo() {
    isHappy = false;
  }

  function onAnswerYes() {
    isHappy = true;
  }

  return <>
    <p>"你快乐吗?"</p>
    <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
    <p style={{ fontSize: "50px" }}>{isHappy ? "😀" : "😥"}</p>
  </>;
}

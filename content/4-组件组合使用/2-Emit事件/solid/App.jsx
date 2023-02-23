import { createSignal } from "solid-js";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [happy, setHappy] = createSignal(true);

  function onAnswerNo() {
    setHappy(false);
  }

  function onAnswerYes() {
    setHappy(true);
  }

  return (
    <>
      <p>你快乐吗?</p>
      <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
      <p style={{ "font-size": "50px" }}>{happy() ? "😀" : "😥"}</p>
    </>
  );
}

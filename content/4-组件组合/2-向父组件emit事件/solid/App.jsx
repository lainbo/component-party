import { createSignal } from "solid-js";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [isHappy, setIsHappy] = createSignal(true);

  function onAnswerNo() {
    setIsHappy(false);
  }

  function onAnswerYes() {
    setIsHappy(true);
  }

  return (
    <>
      <p>你快乐吗?</p>
      <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
      <p style={{ "font-size": "50px" }}>{isHappy() ? "😀" : "😥"}</p>
    </>
  );
}

import { useState } from "react";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [happy, setHappy] = useState(true);

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
      <p style={{ fontSize: 50 }}>{happy ? "😀" : "😥"}</p>
    </>
  );
}

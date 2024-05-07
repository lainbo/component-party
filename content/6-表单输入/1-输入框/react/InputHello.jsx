import { useState } from "react";

export default function InputHello() {
  const [text, setText] = useState("这是一段示例文字");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={handleChange} />
    </>
  );
}

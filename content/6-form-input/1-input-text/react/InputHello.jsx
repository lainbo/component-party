import { useState } from "react";

export default function InputHello() {
  const [text, setText] = useState("你好世界");

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

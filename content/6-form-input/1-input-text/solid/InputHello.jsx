import { createSignal } from "solid-js";

export default function InputHello() {
  const [text, setText] = createSignal("你好世界");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <p>{text()}</p>
      <input value={text()} onInput={handleChange} />
    </>
  );
}

import { createSignal } from "solid-js";

export default function InputHello() {
  const [text, setText] = createSignal("这是一段示范文字");

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

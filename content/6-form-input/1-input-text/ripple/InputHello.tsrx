import { bindValue, track } from "ripple";

export default function InputHello() {
  let &[text, textTracked] = track("你好，世界");

  return <>
    <p>{text}</p>
    <input ref={bindValue(textTracked)} />
  </>;
}

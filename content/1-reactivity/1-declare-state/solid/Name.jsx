import { createSignal } from "solid-js";

export default function Name() {
  const [name] = createSignal("张三");

  return <h1>你好 {name()}</h1>;
}

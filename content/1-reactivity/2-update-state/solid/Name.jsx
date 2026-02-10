import { createSignal } from "solid-js";

export default function Name() {
  const [name, setName] = createSignal("张三");
  setName("李四");

  return <h1>你好 {name()}</h1>;
}

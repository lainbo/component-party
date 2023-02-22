import { createSignal } from "solid-js";

export default function Name() {
  const [name] = createSignal("张三");

  return <h1>Hello {name()}</h1>;
}

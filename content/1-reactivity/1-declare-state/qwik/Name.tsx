import { component$, useSignal } from "@builder.io/qwik";

export const Name = component$(() => {
  const name = useSignal("张三");

  return <h1>你好 {name.value}</h1>;
});

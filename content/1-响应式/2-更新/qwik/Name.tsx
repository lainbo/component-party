import { component$, useStore } from "@builder.io/qwik";

export const Name = component$(() => {
  const store = useStore({ name: "张三" });
  store.name = "李四";

  return <h1>Hello {store.name}</h1>;
});

import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      <p>计数器: {store.count}</p>
      <button onClick$={() => store.count++}>Increment</button>
    </>
  );
});

import { component$, useSignal, $ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  const incrementCount = $(() => {
    count.value++;
  });

  return (
    <>
      <p>计数器: {count.value}</p>
      <button onClick$={incrementCount}>+1</button>
    </>
  );
});

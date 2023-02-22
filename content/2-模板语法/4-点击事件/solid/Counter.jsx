import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  function incrementCount() {
    setCount(count() + 1);
  }

  return (
    <>
      <p>计数器: {count()}</p>
      <button onClick={incrementCount}>+1</button>
    </>
  );
}

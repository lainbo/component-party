import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>计数器: {count}</p>
      <button onClick={incrementCount}>+1</button>
    </>
  );
}

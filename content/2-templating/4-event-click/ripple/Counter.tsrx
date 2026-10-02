import { track } from "ripple";

export default function Counter() {
  let &[count] = track(0);

  function incrementCount() {
    count++;
  }

  return <>
    <p>"计数器: "{count}</p>
    <button onClick={incrementCount}>"+1"</button>
  </>;
}

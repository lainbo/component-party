import { bindChecked, track } from "ripple";

export default function IsAvailable() {
  let &[isAvailable, isAvailableTracked] = track(false);

  return <>
    <input
      id="is-available"
      type="checkbox"
      ref={bindChecked(isAvailableTracked)}
    />
    <label for="is-available">"这是一个checkbox"</label>
  </>;
}

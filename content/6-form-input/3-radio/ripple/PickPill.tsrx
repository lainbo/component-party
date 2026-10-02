import { bindGroup, track } from "ripple";

export default function PickPill() {
  let &[picked, pickedTracked] = track("red");

  return <>
    <div>"你选择了: "{picked}</div>

    <input
      id="blue-pill"
      type="radio"
      value="blue"
      ref={bindGroup(pickedTracked)}
    />
    <label for="blue-pill">"蓝色"</label>

    <input
      id="red-pill"
      type="radio"
      value="red"
      ref={bindGroup(pickedTracked)}
    />
    <label for="red-pill">"红色"</label>
  </>;
}

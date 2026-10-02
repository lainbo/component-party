import { track } from "ripple";

export default function Name() {
  let &[name] = track("张三");
  name = "李四";

  return <h1>"你好 "{name}</h1>;
}

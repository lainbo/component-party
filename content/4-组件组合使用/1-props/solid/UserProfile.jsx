import { mergeProps } from "solid-js";

export default function UserProfile(props) {
  const merged = mergeProps(
    { name: "", age: null, favouriteColors: [], isAvailable: false },
    props
  );

  return (
    <>
      <p>我的名字是 {merged.name}!</p>
      <p>我的年龄是 {merged.age}!</p>
      <p>我喜欢的颜色是 {merged.favouriteColors.join(", ")}!</p>
      <p>我现在 {merged.isAvailable ? '离职状态' : '在职'}</p>
    </>
  );
}

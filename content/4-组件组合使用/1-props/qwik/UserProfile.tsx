import { component$ } from "@builder.io/qwik";

type Props = {
  name: string;
  age: number;
  favouriteColors: string[];
  isAvailable: boolean;
};

const UserProfile = component$((props: Props) => {
  const {
    name = "",
    age = null,
    favouriteColors = [],
    isAvailable = false,
  } = props;

  return (
    <>
      <p>我的名字是 {name}!</p>
      <p>我的年龄是 {age}!</p>
      <p>我喜欢的颜色是 {favouriteColors.join(", ")}!</p>
      <p>我现在 {isAvailable ? '离职状态' : '在职'}</p>
    </>
  );
});

export default UserProfile;

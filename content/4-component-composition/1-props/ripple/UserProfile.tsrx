interface UserProfileProps {
  name?: string;
  age?: number | null;
  favouriteColors?: string[];
  isAvailable?: boolean;
}

export function UserProfile(&{
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}: UserProfileProps) {
  return <>
    <p>"我的名字是 "{name}"!"</p>
    <p>"我的年龄是 "{age}"!"</p>
    <p>"我喜欢的颜色是 "{favouriteColors.join(", ")}"!"</p>
    <p>"我现在"{isAvailable ? "有空" : "没空"}</p>
  </>;
}

import { UserProfile } from "./UserProfile.tsrx";

export function App() {
  return <UserProfile
    name="张三"
    age={20}
    favouriteColors={["绿", "蓝", "红"]}
    isAvailable
  />;
}

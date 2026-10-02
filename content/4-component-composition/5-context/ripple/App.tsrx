import { RippleObject } from "ripple";

import { UserContext } from "./UserContext.tsrx";
import { UserProfile } from "./UserProfile.tsrx";

export function App() {
  const user = new RippleObject({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  UserContext.set(user);

  return <>
    <h1>"欢迎回来, "{user.username}</h1>
    <UserProfile />
  </>;
}

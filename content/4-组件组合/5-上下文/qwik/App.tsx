import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  $,
} from "@builder.io/qwik";
import UserProfile from "./UserProfile";

export const UserContext = createContext("user-context");

const App = component$(() => {
  const user = useStore({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  const updateUsername = $((newUsername) => {
    user.username = newUsername;
  });

  useContextProvider(UserContext, { user, updateUsername });

  return (
    <>
      <h1>欢迎回来, {user.username}</h1>
      <UserProfile />
    </>
  );
});

export default App;

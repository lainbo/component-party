import { useState } from "react";
import UserProfile from "./UserProfile";
import { UserContext } from "./UserContext";

export default function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  function updateUsername(newUsername) {
    setUser((userData) => ({ ...userData, username: newUsername }));
  }

  return (
    <>
      <h1>欢迎回来, {user.username}</h1>
      <UserContext.Provider value={{ ...user, updateUsername }}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}

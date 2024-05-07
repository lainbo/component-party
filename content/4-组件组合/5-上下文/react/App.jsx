import { useState, createContext } from "react";
import UserProfile from "./UserProfile";

export const UserContext = createContext();

export default function App() {
  // 在实际项目，你会从接口获取用户数据
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

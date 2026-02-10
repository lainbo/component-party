import UserProfile from "./UserProfile.jsx";

export default function App() {
  return (
    <UserProfile
      name="张三"
      age={20}
      favouriteColors={["green", "blue", "red"]}
      isAvailable
    />
  );
}

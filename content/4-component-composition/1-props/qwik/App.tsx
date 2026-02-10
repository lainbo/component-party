import { component$ } from "@builder.io/qwik";
import UserProfile from "./UserProfile";

const App = component$(() => {
  return (
    <UserProfile
      name="张三"
      age={20}
      favouriteColors={["green", "blue", "red"]}
      isAvailable
    />
  );
});

export default App;

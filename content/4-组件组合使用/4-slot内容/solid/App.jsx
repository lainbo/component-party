import FunnyButton from "./FunnyButton.jsx";

export default function App() {
  return (
    <>
      <FunnyButton />
      <FunnyButton>这是传到slot的内容!</FunnyButton>
    </>
  );
}

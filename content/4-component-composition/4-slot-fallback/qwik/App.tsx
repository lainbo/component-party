import FunnyButton from "./FunnyButton";

export default function App() {
  return (
    <>
      <FunnyButton />
      <FunnyButton>这是传到slot的内容!</FunnyButton>
    </>
  );
}

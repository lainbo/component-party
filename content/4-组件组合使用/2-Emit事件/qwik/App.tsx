import { $, component$, useStore } from "@builder.io/qwik";
import AnswerButton from "./AnswerButton";

const App = component$(() => {
  const store = useStore({
    happy: true,
  });

  const onAnswerNo = $(() => {
    store.happy = false;
  });

  const onAnswerYes = $(() => {
    store.happy = true;
  });

  return (
    <>
      <p>你快乐吗?</p>
      <AnswerButton onYes$={onAnswerYes} onNo$={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{store.happy ? "😀" : "😥"}</p>
    </>
  );
});

export default App;

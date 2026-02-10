import { component$, PropFunction } from "@builder.io/qwik";

type Props = {
  onYes$: PropFunction<() => void>;
  onNo$: PropFunction<() => void>;
};

const AnswerButton = component$((props: Props) => {
  return (
    <>
      <button onClick$={props.onYes$}>是的！</button>

      <button onClick$={props.onNo$}>不是！</button>
    </>
  );
});

export default AnswerButton;

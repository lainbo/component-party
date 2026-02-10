export default function AnswerButton(props) {
  return (
    <>
      <button onClick={() => props.onYes()}>是的！</button>
      <button onClick={() => props.onNo()}>不是！</button>
    </>
  );
}

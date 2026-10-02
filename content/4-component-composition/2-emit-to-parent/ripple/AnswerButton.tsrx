interface AnswerButtonProps {
  onYes: () => void;
  onNo: () => void;
}

export function AnswerButton(&{ onYes, onNo }: AnswerButtonProps) {
  return <>
    <button onClick={onYes}>"是的！"</button>
    <button onClick={onNo}>"不是！"</button>
  </>;
}

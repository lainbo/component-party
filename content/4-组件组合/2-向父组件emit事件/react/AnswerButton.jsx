import PropTypes from "prop-types";

export default function AnswerButton({ onYes, onNo }) {
  return (
    <>
      <button onClick={onYes}>是的！</button>

      <button onClick={onNo}>不是！</button>
    </>
  );
}

AnswerButton.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func,
};

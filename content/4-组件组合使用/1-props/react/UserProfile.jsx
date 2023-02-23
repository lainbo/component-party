import PropTypes from "prop-types";

export default function UserProfile({
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}) {
  return (
    <>
      <p>我的名字是 {name}!</p>
      <p>我的年龄是 {age}!</p>
      <p>我喜欢的颜色是 {favouriteColors.join(", ")}!</p>
      <p>我现在 {isAvailable ? '离职状态' : '在职'}</p>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

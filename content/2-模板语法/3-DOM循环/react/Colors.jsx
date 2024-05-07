export default function Colors() {
  const colors = ["红", "绿", "蓝"];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}

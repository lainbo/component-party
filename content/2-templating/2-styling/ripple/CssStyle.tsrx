export default function CssStyle() {
  return <>
    <h1 class="title">"我是红色的"</h1>
    <button style={{ fontSize: "10rem" }}>"我是一个按钮"</button>

    <style>
      .title {
        color: red;
      }
    </style>
  </>;
}

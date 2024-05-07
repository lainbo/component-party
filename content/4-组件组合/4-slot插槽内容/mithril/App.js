import m from "mithril";
import FunnyButton from "./FunnyButton.jsx";

export default function App() {
  return {
    view: () => m("", m(FunnyButton), m(FunnyButton, "这是传到slot的内容!")),
  };
}

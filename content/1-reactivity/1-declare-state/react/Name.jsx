import { useState } from "react";

export default function Name() {
  const [name] = useState("张三");

  return <h1>你好 {name}</h1>;
}

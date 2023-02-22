import { useState } from "react";

export default function Name() {
  const [name, setName] = useState("张三");
  setName("李四");

  return <h1>Hello {name}</h1>;
}

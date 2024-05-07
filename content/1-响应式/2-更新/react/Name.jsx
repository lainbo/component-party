import { useEffect, useState } from "react";

export default function Name() {
  const [name, setName] = useState("张三");

  useEffect(() => {
    setName("李四");
  }, []);

  return <h1>你好 {name}</h1>;
}

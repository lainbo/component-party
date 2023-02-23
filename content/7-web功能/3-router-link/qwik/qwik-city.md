With [qwik-city](https://qwik.builder.io/qwikcity/overview/)

```jsx
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const Home = component$(() => {
  return (
    <ul>
      <li>
        <Link href="/">首页</Link>
      </li>
      <li>
        <Link href="/about">关于</Link>
      </li>
    </ul>
  );
});

export default Home;
```

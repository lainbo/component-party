With [solid-app-router](https://github.com/solidjs/solid-app-router)

```jsx
import { Link } from "solid-app-router";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">首页</Link>
      </li>
      <li>
        <Link href="/about">关于 us</Link>
      </li>
    </ul>
  );
}
```

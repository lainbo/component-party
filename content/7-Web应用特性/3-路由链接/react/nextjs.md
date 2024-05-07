With <a href="https://nextjs.org/docs/api-reference/next/link">NextJS</a>

```jsx
import Link from "next/link";

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

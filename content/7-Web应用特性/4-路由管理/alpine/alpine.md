Using [location.hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)

```html
<nav>
    <a href="#">首页</a>
    <a href="#about">关于</a>
</nav>
<div x-data="{page: location.hash}" @hashchange.window="page = location.hash">
    <span x-show="page === ''">
        <h1>欢迎</h1>
    </span>
    <span x-show="page === '#about'">
        <p>
        <ul>
            <li>1. xxxxxx</li>
            <li>2. xxxxxxx</li>
        </ul>
        </p>
    </span>
</div>
```

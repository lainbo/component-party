Built-in <a href="https://guides.emberjs.com/release/routing/">routing</a>

Given an `app/router.js` config of:

```js
Router.map(function () {
  this.route("about");
  this.route("fallback", { path: "*" });
});
```

```
|-- routes/
    |-- application.js // 全局设置
    |-- index.js // 处理显示"/"的最低要求数据
    |-- about.js // 处理显示"/about "的最低要求数据
    |-- fallback.js // 兜底页面
|-- templates/
    |-- application.hbs // 全局layout
    |-- index.hbs // 首页 "/"
    |-- about.hbs // 关于页面 "/about"
    |-- fallback.hbs // 兜底layout
```

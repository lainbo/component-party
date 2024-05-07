With [`@marko/run`](https://github.com/marko-js/run/tree/main/packages/serve)

```
routes/
|-- +page.marko // 首页 "/"
|-- about/
    |-- +page.marko // 关于页面 "/about"
|-- +layout.marko // 全局layout
|-- +handler.{js,ts,*} // 条件性渲染 HTML、API 路由、运行任意代码
|-- +middleware.{js,ts,*} // 添加到 HTTP 框架的中间件链中
|-- +meta.{js,ts,*} // 为路由添加meta数据
|-- +404.marko // 在未找到合适路由时显示（404页面）
|-- +500.marko // 在任何路由抛出异常时显示（500页面）
|-- /path/_less/
    |-- +page.marko // 无路径目录，页面 "/path"
|-- /$dynamic/
    |-- +page.marko // 动态参数，可用作特定路由的 404 页面
|-- /$$catchall/ // 类似于动态参数，但会匹配直到末尾的所有路径段
```

import { expect, test } from "@playwright/test";

test("静态对比页包含中文内容和本站元信息", async ({ page, request }, testInfo) => {
  const response = await request.get("/compare/react-vs-vue3/");
  expect(response.ok()).toBe(true);
  const html = await response.text();
  expect(html).toContain('lang="zh-CN"');
  expect(html).toContain("声明状态");
  expect(html).toContain("张三");
  expect(html).toContain('"inLanguage":"zh-CN"');

  await page.goto("/compare/react-vs-vue3/");
  await expect(page).toHaveTitle("React vs Vue 3 - JavaScript 框架语法对比");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://component-party.lainbo.com/compare/react-vs-vue3/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://component-party.lainbo.com/og/react-vs-vue3.png",
  );
  await expect(page.getByTestId("framework-snippet-react-声明状态")).toContainText("你好");
  await page.screenshot({ path: testInfo.outputPath("chinese-comparison.png") });
  await testInfo.attach("中文框架对比页", {
    path: testInfo.outputPath("chinese-comparison.png"),
    contentType: "image/png",
  });
});

test("Ripple 新示例支持中文展示、文件切换和代码复制", async ({ page, context }, testInfo) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/?f=ripple");

  const declaration = page.getByTestId("framework-snippet-ripple-声明状态");
  await expect(declaration).toContainText("张三");
  await expect(declaration.getByRole("button", { name: "Name.tsrx", exact: true })).toBeVisible();
  await declaration.hover();
  await declaration.getByRole("button", { name: "复制到剪贴板" }).click();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain("张三");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain("你好");

  const profile = page.getByTestId("framework-snippet-ripple-上下文");
  await profile.getByRole("button", { name: "UserProfile.tsrx", exact: true }).click();
  await expect(profile.locator("pre")).toContainText("更新用户名为 李四");
  await expect(profile.locator("pre")).toContainText("UserContext.get()");
  const fetchUsers = page.getByTestId("framework-snippet-ripple-fetch获取数据");
  await expect(fetchUsers.locator("pre")).toContainText("正在获取用户信息……");
  await expect(fetchUsers.locator("pre")).toContainText("获取用户信息出错");
  await expect(fetchUsers.getByRole("link", { name: "打开 Ripple 在线演练场" })).toHaveAttribute(
    "href",
    /^https:\/\/www\.ripple-ts\.com\/playground/,
  );
  await profile.scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("ripple-context.png") });
  await testInfo.attach("Ripple 中文上下文示例", {
    path: testInfo.outputPath("ripple-context.png"),
    contentType: "image/png",
  });
});

test("Alpine 上下文和新版 Angular 请求示例保留中文译文", async ({ page }) => {
  await page.goto("/?f=alpine-angularClassic-angularRenaissance");
  const alpine = page.getByTestId("framework-snippet-alpine-上下文");
  await expect(alpine.locator("pre")).toContainText('Alpine.store("user"');
  await expect(alpine.locator("pre")).toContainText("欢迎回来");
  await expect(alpine.locator("pre")).toContainText("更新用户名为 李四");

  const angular = page.getByTestId("framework-snippet-angularRenaissance-fetch获取数据");
  await angular.getByRole("button", { name: "users.component.ts", exact: true }).click();
  await expect(angular.locator("pre")).toContainText("usersResource.isLoading()");
  await expect(angular.locator("pre")).toContainText("未找到用户");
  await expect(page.getByTestId("framework-snippet-angularClassic-声明状态")).toContainText("张三");
});

test("错误页提供中文提示和返回入口", async ({ page }, testInfo) => {
  await page.goto("/this-page-does-not-exist/");
  await expect(page.getByTestId("error-status")).toHaveText("404");
  await expect(page.getByRole("heading", { name: "页面不存在" })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("chinese-404.png") });
  await testInfo.attach("中文错误页", {
    path: testInfo.outputPath("chinese-404.png"),
    contentType: "image/png",
  });
  await page.getByRole("link", { name: "返回框架对比" }).click();
  await expect(page.getByTestId("framework-selection-bar")).toBeVisible();
});

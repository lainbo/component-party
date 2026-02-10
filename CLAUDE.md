# Component Party 中文版 - 项目维护指南

## 项目概述

本项目是 [component-party.dev](https://github.com/matschik/component-party.dev) 的中文汉化 fork，用于对比不同 JavaScript 框架的语法差异，面向中文母语开发者。

## 分支策略

- **main**: 与上游 `matschik/component-party.dev` 的 main 分支保持完全同步，不做任何修改
- **deploy**: 基于 main 的汉化分支，包含所有中文翻译，用于部署
- **upstream**: 远程仓库，指向 `https://github.com/matschik/component-party.dev.git`

## 同步上游与汉化工作流

```bash
# 1. 同步上游到 main
git fetch upstream
git checkout main
git merge upstream/main --ff-only
git push origin main

# 2. 将 main 合并到 deploy
git checkout deploy
git merge main
# 解决冲突（通常是代码内容冲突，不会有 rename 冲突）
# 汉化新增内容
git push origin deploy
```

## 汉化架构（重要）

汉化分为两层，设计目标是最小化与上游的合并冲突：

### 第一层：标题翻译（零冲突）

- 翻译映射文件: `i18n/zh-CN.json`
- 构建脚本修改: `build/lib/generateContent.ts` 中的 `dirNameToTitle()` 函数
- **不修改 content 目录名**，通过映射表将英文标题转换为中文
- 上游新增的 section/snippet 会自动显示英文原文，只需在 JSON 中补充翻译即可

### 第二层：代码内容汉化（可控冲突）

- 直接修改 `content/` 目录下各框架代码文件中的**字符串字面量**
- **不改文件名和路径**，只改文件内容
- 翻译规则参考 `i18n/zh-CN.json` 中的约定

### UI 文案汉化

- `src/components/Header.svelte` - 站点标题
- `src/Index.svelte` - 页面文案、SEO meta、空状态提示等

## 常用翻译对照表

| 英文                      | 中文           |
| ------------------------- | -------------- |
| John                      | 张三           |
| Jane                      | 李四           |
| Hello {name}              | 你好 {name}    |
| Hello world               | 你好，世界     |
| red/green/blue            | 红/绿/蓝       |
| red/orange/green (交通灯) | 红灯/黄灯/绿灯 |
| Counter:                  | 计数器:        |
| Page title:               | 页面标题:      |
| Current time:             | 当前时间:      |
| Are you happy?            | 你快乐吗?      |
| YES / NO                  | 是的！/ 不是！ |
| Click me!                 | 点我!          |
| unicorn42                 | abcdefg        |

完整对照见 `i18n/zh-CN.json`。

## 技术栈

- 包管理器: pnpm
- 框架: Svelte 5 + Vite
- 构建: `content/` 目录由 Vite 插件在 `buildStart` 时扫描生成到 `src/generatedContent/`
- `src/generatedContent/` 是自动生成的，不要手动编辑，不需要提交

## 关键文件

| 文件                                 | 说明                                       |
| ------------------------------------ | ------------------------------------------ |
| `i18n/zh-CN.json`                    | 标题翻译映射 + UI 文案翻译                 |
| `build/lib/generateContent.ts`       | 内容生成脚本（已添加翻译查表逻辑）         |
| `build/generateContentVitePlugin.ts` | Vite 插件，负责触发内容生成                |
| `content/`                           | 各框架代码示例（汉化在此目录的文件内容中） |
| `frameworks.ts`                      | 框架定义列表                               |
| `src/Index.svelte`                   | 主页面组件                                 |
| `src/components/Header.svelte`       | 头部组件                                   |

## 注意事项

- content 目录下的文件**只改内容不改路径**，这是避免合并地狱的核心原则
- 翻译只针对用户可见的字符串字面量，不翻译变量名、API 名、组件名
- 上游可能会新增框架目录（如 emberPolaris、svelte5），合并后需要检查新文件是否需要汉化

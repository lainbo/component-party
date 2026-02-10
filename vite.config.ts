import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "node:fs/promises";
import path from "node:path";
import { Eta } from "eta";
import { minify as htmlMinify } from "html-minifier-terser";
import { frameworks } from "./frameworks";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";
import generateSitemap from "./scripts/generateSitemap";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import tailwindcss from "@tailwindcss/vite";
import { FRAMEWORK_SEPARATOR } from "./src/constants.ts";

// Helper function to create framework comparison URLs
const createFrameworkUrl = (frameworks: string[]) =>
  `/?f=${frameworks.join(FRAMEWORK_SEPARATOR)}`;

const footerNavigation = [
  {
    title: "最热门框架对比",
    links: [
      { name: "React vs Vue", url: createFrameworkUrl(["react", "vue3"]) },
      {
        name: "React vs Angular",
        url: createFrameworkUrl(["react", "angularRenaissance"]),
      },
      { name: "Vue vs React", url: createFrameworkUrl(["vue3", "react"]) },
      {
        name: "Vue vs Angular",
        url: createFrameworkUrl(["vue3", "angularRenaissance"]),
      },
      {
        name: "Angular vs React",
        url: createFrameworkUrl(["angularRenaissance", "react"]),
      },
      {
        name: "Angular vs Vue",
        url: createFrameworkUrl(["angularRenaissance", "vue3"]),
      },
      {
        name: "Ember vs React",
        url: createFrameworkUrl(["emberPolaris", "react"]),
      },
      {
        name: "Ember vs Vue",
        url: createFrameworkUrl(["emberPolaris", "vue3"]),
      },
    ],
  },
  {
    title: "热门框架 vs 新兴框架",
    links: [
      {
        name: "React vs Svelte",
        url: createFrameworkUrl(["react", "svelte5"]),
      },
      { name: "React vs Solid", url: createFrameworkUrl(["react", "solid"]) },
      { name: "Vue vs Svelte", url: createFrameworkUrl(["vue3", "svelte5"]) },
      { name: "Vue vs Solid", url: createFrameworkUrl(["vue3", "solid"]) },
      {
        name: "Angular vs Svelte",
        url: createFrameworkUrl(["angularRenaissance", "svelte5"]),
      },
      {
        name: "Angular vs Solid",
        url: createFrameworkUrl(["angularRenaissance", "solid"]),
      },
    ],
  },
  {
    title: "旧版本 vs 当前版本",
    links: [
      {
        name: "Svelte 4 vs Svelte 5",
        url: createFrameworkUrl(["svelte4", "svelte5"]),
      },
      { name: "Vue 2 vs Vue 3", url: createFrameworkUrl(["vue2", "vue3"]) },
      {
        name: "Angular vs Angular Renaissance",
        url: createFrameworkUrl(["angular", "angularRenaissance"]),
      },
      {
        name: "Aurelia 1 vs Aurelia 2",
        url: createFrameworkUrl(["aurelia1", "aurelia2"]),
      },
    ],
  },
  {
    title: "当前版本 vs 即将发布版本",
    links: [
      {
        name: "Ember Octane vs Ember Polaris",
        url: createFrameworkUrl(["emberOctane", "emberPolaris"]),
      },
    ],
  },
];

const templateDataDefaults = {
  title: "Component Party 中文版",
  url: "https://component-party.lainbo.com/",
  description: `JavaScript 框架语法对比：React、Vue、Angular、Svelte、Solid.js 等。查看 Web 开发框架的语法差异、特性和代码示例。`,
  keywords:
    "JavaScript 框架, React, Vue, Angular, Svelte, Solid.js, 框架对比, Web 开发, 前端框架, 组件库, JavaScript 库, 代码对比, 编程工具, 开发者工具, Web 组件, JSX, TypeScript, 现代 JavaScript",
  image: "https://component-party.lainbo.com/banner2.png",
  frameworkCount: frameworks.length,
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@frameworks": path.resolve(import.meta.dirname, "frameworks"),
    },
  },
  plugins: [
    pluginGenerateFrameworkContent(),
    svelte(),
    svelteInspector(), // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
    generateHtmlPagesPlugin([
      {
        outputPath: "index.html",
        template: "dist/index.html",
        templateData: {
          ...templateDataDefaults,
          navigations: footerNavigation,
        },
      },
    ]),
    tailwindcss(),
  ],
  optimizeDeps: {
    entries: ["src/**/*"],
  },
  build: {
    rollupOptions: {
      external: (id) => {
        return id.includes("/content/");
      },
      output: {
        manualChunks: {
          vendor: ["svelte"],
          frameworks: ["@frameworks"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: false,
    target: "esnext",
  },
});

async function generateHtmlPagesPlugin(pages: unknown[]) {
  const eta = new Eta({ views: "." });

  const template = {
    footer: await fs.readFile(
      path.resolve(import.meta.dirname, "build/template/footer.html"),
      "utf8",
    ),
  };

  const htmlTransform = {
    include(html: string) {
      for (const [templateName, templateContent] of Object.entries(template)) {
        html = html.replace(
          `<!--template:${templateName}-->`,
          eta.renderString(templateContent, { navigations: footerNavigation }),
        );
      }
      return html;
    },
    render(htmlEta: string, data: unknown) {
      return eta.renderString(htmlEta, data as object);
    },
  };

  return {
    name: "generate-html-pages",
    transformIndexHtml(html: string, ctx: unknown) {
      html = htmlTransform.include(html);
      if ((ctx as { server?: unknown }).server) {
        const matchedPage = pages.find(
          (page: unknown) =>
            (ctx as { originalUrl?: string }).originalUrl ===
            filePathToUrl((page as { outputPath: string }).outputPath),
        );
        if (matchedPage) {
          html = htmlTransform.render(
            html,
            (matchedPage as { templateData: unknown }).templateData,
          );
        } else {
          html = htmlTransform.render(html, templateDataDefaults);
        }
      }
      return html;
    },
    async closeBundle() {
      // Generate sitemap
      await generateSitemap();

      for (const page of pages) {
        const template =
          (page as { template?: string }).template || "index.html";
        const templateData =
          (page as { templateData?: unknown }).templateData || {};
        const templatePath = path.join(import.meta.dirname, template);
        const outputPath = path.join(
          import.meta.dirname,
          "dist",
          (page as { outputPath: string }).outputPath,
        );

        const templateContent = await fs.readFile(templatePath, "utf8");
        const compiledHtml = eta.renderString(templateContent, templateData);
        const minifiedHtml = await htmlMinify(compiledHtml);
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true });
        await fs.writeFile(outputPath, minifiedHtml, "utf8");
      }
    },
  };
}

function filePathToUrl(filePath: string) {
  const normalizedPath = path.normalize(filePath);
  const baseName = path.basename(normalizedPath);

  if (baseName === "index.html") {
    return path.dirname(normalizedPath) === "."
      ? "/"
      : path.dirname(normalizedPath) + "/";
  } else {
    return normalizedPath.replace(/.html$/, "");
  }
}

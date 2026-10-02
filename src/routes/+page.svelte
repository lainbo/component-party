<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL } from "$lib/frameworkUrl";
  import { webApplicationJsonLd } from "$lib/seo";
  import { BUILD_DATE } from "$lib/buildDate";
  let { data } = $props();
  const webAppLd = webApplicationJsonLd(BUILD_DATE);
</script>

<svelte:head>
  <title>JavaScript 框架语法对比</title>
  <meta
    name="description"
    content="对比 JavaScript 框架的语法差异：React、Vue、Angular、Svelte、Solid.js 等。查看各 Web 开发框架的语法差异、特性和代码示例。"
  />
  <link rel="canonical" href={`${BASE_URL}/`} />
  <meta property="og:url" content={`${BASE_URL}/`} />
  <meta property="og:title" content="JavaScript 框架语法对比" />
  <meta property="og:image" content={`${BASE_URL}/banner2.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="twitter:image" content={`${BASE_URL}/banner2.png`} />
  {@html `<script type="application/ld+json">${JSON.stringify(webAppLd)}<\/script>`}
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={true}
/>

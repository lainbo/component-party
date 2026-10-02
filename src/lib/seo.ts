export const SITE_PUBLISHED_DATE = "2024-01-01";

const ORG = {
  "@type": "Organization",
  name: "Component Party 中文版",
  url: "https://component-party.lainbo.com",
  logo: { "@type": "ImageObject", url: "https://component-party.lainbo.com/popper.svg" },
} as const;

export function webApplicationJsonLd(buildDate: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Component Party 中文版",
    description:
      "对比 JavaScript 框架的语法差异：React、Vue、Angular、Svelte、Solid.js 等。查看各 Web 开发框架的语法差异、特性和代码示例。",
    url: "https://component-party.lainbo.com/",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: ORG,
    publisher: ORG,
    inLanguage: "zh-CN",
    isAccessibleForFree: true,
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: buildDate,
  };
}

export function techArticleJsonLd(opts: {
  titleA: string;
  titleB: string;
  description: string;
  url: string;
  image: string;
  buildDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${opts.titleA} vs ${opts.titleB} - 代码对比`,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    inLanguage: "zh-CN",
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: opts.buildDate,
    author: ORG,
    publisher: ORG,
    about: [
      {
        "@type": "SoftwareApplication",
        name: opts.titleA,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: opts.titleB,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  };
}

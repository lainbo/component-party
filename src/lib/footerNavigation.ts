import { createSearchParamUrl } from "./frameworkUrl";

const u = (ids: string[]) => createSearchParamUrl(ids);

export const footerNavigation: { title: string; links: { name: string; url: string }[] }[] = [
  {
    title: "最热门框架对比",
    links: [
      { name: "React vs Vue", url: u(["react", "vue3"]) },
      {
        name: "React vs Angular",
        url: u(["react", "angularRenaissance"]),
      },
      { name: "Vue vs React", url: u(["vue3", "react"]) },
      {
        name: "Vue vs Angular",
        url: u(["vue3", "angularRenaissance"]),
      },
      {
        name: "Angular vs React",
        url: u(["angularRenaissance", "react"]),
      },
      {
        name: "Angular vs Vue",
        url: u(["angularRenaissance", "vue3"]),
      },
      {
        name: "Ember vs React",
        url: u(["emberPolaris", "react"]),
      },
      {
        name: "Ember vs Vue",
        url: u(["emberPolaris", "vue3"]),
      },
    ],
  },
  {
    title: "热门框架 vs 新兴框架",
    links: [
      {
        name: "React vs Svelte",
        url: u(["react", "svelte5"]),
      },
      { name: "React vs Solid", url: u(["react", "solid"]) },
      { name: "Vue vs Svelte", url: u(["vue3", "svelte5"]) },
      { name: "Vue vs Solid", url: u(["vue3", "solid"]) },
      {
        name: "Angular vs Svelte",
        url: u(["angularRenaissance", "svelte5"]),
      },
      {
        name: "Angular vs Solid",
        url: u(["angularRenaissance", "solid"]),
      },
    ],
  },
  {
    title: "旧版本 vs 当前版本",
    links: [
      {
        name: "Svelte 4 vs Svelte 5",
        url: u(["svelte4", "svelte5"]),
      },
      { name: "Vue 2 vs Vue 3", url: u(["vue2", "vue3"]) },
      {
        name: "Angular vs Angular Renaissance",
        url: u(["angular", "angularRenaissance"]),
      },
      {
        name: "Aurelia 1 vs Aurelia 2",
        url: u(["aurelia1", "aurelia2"]),
      },
    ],
  },
  {
    title: "当前版本 vs 即将发布版本",
    links: [
      {
        name: "Ember Octane vs Ember Polaris",
        url: u(["emberOctane", "emberPolaris"]),
      },
    ],
  },
];

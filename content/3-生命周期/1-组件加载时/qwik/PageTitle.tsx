import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    pageTitle: "",
  });

  useClientEffect$(() => {
    store.pageTitle = document.title;
  });

  return <p>页面标题: {store.pageTitle}</p>;
});

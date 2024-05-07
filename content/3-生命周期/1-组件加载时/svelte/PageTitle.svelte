<script>
  import { onMount } from "svelte";
  let pageTitle = "";
  onMount(() => {
    pageTitle = document.title;
  });
</script>

<p>页面标题: {pageTitle}</p>

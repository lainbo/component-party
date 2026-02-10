<script>
  let pageTitle = $state("");
  $effect(() => {
    pageTitle = document.title;
  });
</script>

<p>页面标题: {pageTitle}</p>

<script>
  const colors = ["红", "绿", "蓝"];
</script>

<ul>
  {#each colors as color (color)}
    <li>{color}</li>
  {/each}
</ul>

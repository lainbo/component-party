<script>
  let count = 0;

  function incrementCount() {
    count++;
  }
</script>

<p>计数器: {count}</p>
<button on:click={incrementCount}>+1</button>

<script>
  let count = $state(0);

  function incrementCount() {
    count++;
  }
</script>

<p>计数器: {count}</p>
<button onclick={incrementCount}>+1</button>

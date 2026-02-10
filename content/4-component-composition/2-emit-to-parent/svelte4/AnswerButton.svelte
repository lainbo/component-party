<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clickYes() {
    dispatch("yes");
  }

  function clickNo() {
    dispatch("no");
  }
</script>

<button on:click={clickYes}> 是的！ </button>

<button on:click={clickNo}> 不是！ </button>

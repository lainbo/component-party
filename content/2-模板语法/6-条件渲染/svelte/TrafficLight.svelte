<script>
  const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];
  let lightIndex = 0;

  $: light = TRAFFIC_LIGHTS[lightIndex];

  function nextLight() {
    lightIndex = (lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
</script>

<button on:click={nextLight}>下一个灯</button>
<p>现在亮着的是: {light}</p>
<p>
  你应该
  {#if light === "red"}
    <span>停下</span>
  {:else if light === "orange"}
    <span>慢行</span>
  {:else if light === "green"}
    <span>赶紧走</span>
  {/if}
</p>

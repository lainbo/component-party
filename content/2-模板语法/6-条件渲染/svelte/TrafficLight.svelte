<script>
  const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];
  let lightIndex = 0;

  $: light = TRAFFIC_LIGHTS[lightIndex];

  function nextLight() {
    if (lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      lightIndex = 0;
    } else {
      lightIndex++;
    }
  }
</script>

<button on:click={nextLight}>下一个灯</button>
<p>现在亮着的是: {light}</p>
<p>
  你应该
  {#if light === "红灯"}
    <span>停下</span>
  {:else if light === "黄灯"}
    <span>慢行</span>
  {:else if light === "绿灯"}
    <span>赶紧走</span>
  {/if}
</p>

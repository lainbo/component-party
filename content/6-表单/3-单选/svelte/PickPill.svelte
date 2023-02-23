<script>
  let picked = "red";
</script>

<div>你选择了: {picked}</div>

<input id="blue-pill" bind:group={picked} type="radio" value="blue" />
<label for="blue-pill">蓝色</label>

<input id="red-pill" bind:group={picked} type="radio" value="red" />
<label for="red-pill">红色</label>

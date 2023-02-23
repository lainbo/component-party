<script>
  let selectedColorId = 2;

  const colors = [
    { id: 1, text: "红" },
    { id: 2, text: "蓝" },
    { id: 3, text: "绿" },
    { id: 4, text: "灰", isDisabled: true },
  ];
</script>

<select bind:value={selectedColorId}>
  {#each colors as color}
    <option value={color.id} disabled={color.isDisabled}>
      {color.text}
    </option>
  {/each}
</select>

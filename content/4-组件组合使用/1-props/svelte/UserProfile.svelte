<script>
  export let name = "";
  export let age = null;
  export let favouriteColors = [];
  export let isAvailable = false;
</script>

<p>我的名字是 {name}!</p>
<p>我的年龄是 {age}!</p>
<p>我喜欢的颜色是 {favouriteColors.join(", ")}!</p>
<p>我现在 {isAvailable ? '离职状态' : '在职'}</p>

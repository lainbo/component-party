const colors = ["红", "绿", "蓝"];

<template>
  <ul>
    {{#each colors as |color|}}
      <li>{{color}}</li>
    {{/each}}
  </ul>
</template>
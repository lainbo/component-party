<template>
  <button>
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      <span>默认slot内容</span>
    {{/if}}
  </button>
</template>
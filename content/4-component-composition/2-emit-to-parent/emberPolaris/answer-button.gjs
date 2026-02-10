import { on } from "@ember/modifier";

<template>
  <button {{on "click" @onYes}}> 是的！ </button>
  <button {{on "click" @onNo}}> 不是！ </button>
</template>
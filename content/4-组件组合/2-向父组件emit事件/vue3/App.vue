<script setup>
import { ref } from "vue";
import AnswerButton from "./AnswerButton.vue";

let isHappy = ref(true);

function onAnswerNo() {
  isHappy.value = false;
}

function onAnswerYes() {
  isHappy.value = true;
}
</script>

<template>
  <p>你快乐吗?</p>
  <AnswerButton
    @yes="onAnswerYes"
    @no="onAnswerNo"
  />
  <p style="font-size: 50px">
    {{ isHappy ? "😀" : "😥" }}
  </p>
</template>

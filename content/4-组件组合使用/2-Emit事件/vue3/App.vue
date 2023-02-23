<script setup>
import { ref } from "vue";
import AnswerButton from "./AnswerButton.vue";

let happy = ref(true);

function onAnswerNo() {
  happy.value = false;
}

function onAnswerYes() {
  happy.value = true;
}
</script>

<template>
  <p>你快乐吗?</p>
  <AnswerButton
    @yes="onAnswerYes"
    @no="onAnswerNo"
  />
  <p style="font-size: 50px">
    {{ happy ? "😀" : "😥" }}
  </p>
</template>

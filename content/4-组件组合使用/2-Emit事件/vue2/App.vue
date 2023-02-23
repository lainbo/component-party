<script>
import AnswerButton from "./AnswerButton.vue";
export default {
  components: {
    AnswerButton,
  },
  data() {
    return {
      happy: true,
    };
  },
  methods: {
    onAnswerNo() {
      this.happy = false;
    },
    onAnswerYes() {
      this.happy = true;
    },
  },
};
</script>

<template>
  <div>
    <p>你快乐吗?</p>
    <AnswerButton
      @yes="onAnswerYes"
      @no="onAnswerNo"
    />
    <p style="font-size: 50px">
      {{ happy ? "😀" : "😥" }}
    </p>
  </div>
</template>

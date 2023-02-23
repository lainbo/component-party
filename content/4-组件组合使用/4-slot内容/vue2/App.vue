<script>
import FunnyButton from "./FunnyButton.vue";
export default {
  components: {
    FunnyButton,
  },
};
</script>

<template>
  <div>
    <FunnyButton />
    <FunnyButton> 这是传到slot的内容! </FunnyButton>
  </div>
</template>

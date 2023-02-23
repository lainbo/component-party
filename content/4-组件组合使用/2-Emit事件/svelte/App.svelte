<script>
  import AnswerButton from "./AnswerButton.svelte";

  let happy = true;

  function onAnswerNo() {
    happy = false;
  }

  function onAnswerYes() {
    happy = true;
  }
</script>

<p>你快乐吗?</p>
<AnswerButton on:yes={onAnswerYes} on:no={onAnswerNo} />
<p style="font-size: 50px;">{happy ? "😀" : "😥"}</p>

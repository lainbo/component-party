import { component$, useSignal } from "@builder.io/qwik";

const IsAvailable = component$(() => {
  const isAvailable = useSignal(false);

  return (
    <>
      <input id="is-available" type="checkbox" bind:checked={isAvailable} />
      <label for="is-available">这是一个checkbox</label>
    </>
  );
});
export default IsAvailable;

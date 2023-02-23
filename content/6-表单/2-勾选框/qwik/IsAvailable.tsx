import { component$, useStore, $ } from "@builder.io/qwik";

const IsAvailable = component$(() => {
  const store = useStore({ isAvailable: false });

  const handleChange = $(() => {
    store.isAvailable = !store.isAvailable;
  });

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        checked={store.isAvailable}
        onChange$={handleChange}
      />
      <label for="is-available">这是一个checkbox</label>
    </>
  );
});

export default IsAvailable;

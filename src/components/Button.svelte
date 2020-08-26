<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let disabled: boolean = false;
  export let name: String = "";
  let upperName: String;

  const disp = createEventDispatcher();

  let touched = false;

  function touch(e: any) {
    touched = true;
    disp("click", e);
    console.log(e);
  }

  function down(e: any) {
    !touched && touch(e);
  }

  $: upperName = (name || "BUTTON").toLocaleLowerCase();
</script>

<style>
  button {
    color: red;
    font-size: 11pt;
    @apply rounded-lg;
  }
</style>

<button
  on:touchstart={touch}
  on:mouseup={() => {
    touched = false;
  }}
  on:mousedown={down}
  class="border-gray-600 border-2 px-8 py-4 text-red-400 hover:bg-pink-700 m-2
  outline-none focus:outline-none"
  {disabled}>
  {upperName}
</button>

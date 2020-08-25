<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let name: String;
  let upperName: String;

  const disp = createEventDispatcher();

  function clk(e: any) {
    disp("click", e);
    console.log(e);
  }

  $: upperName = (name || "BUTTON").toUpperCase();
</script>

<style>
  button {
    color: red;
    font-size: 11pt;
    @apply rounded;
  }
</style>

<button
  on:click={clk}
  class="border-gray-600 border-8 px-8 py-4 text-red-400 hover:bg-pink-700 m-2
  outline-none focus:outline-none">
  {upperName}
</button>

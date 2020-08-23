<script lang="ts">
  export let name = "";
  let upperName = "";

  $: upperName = (name || "BUTTON").toUpperCase();
</script>

<style>
  button {
    font-size: 10pt;
  }
</style>

<button
  class="border-gray-600 border-2 px-8 py-4 text-red-400 hover:bg-pink-700 m-2">
  {upperName}
</button>

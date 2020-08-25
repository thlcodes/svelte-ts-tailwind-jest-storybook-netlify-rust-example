<script lang="ts">
  import Button from "./components/Button.svelte";
  import "./tailwind.svelte";

  let goPrefix = "Go ";
  let rustPrefix = "Rust ";
  let jsPrefix = "JS ";
  let tsPrefix = "TS ";

  let goName: string;
  let rustName: string;
  let jsName: string;
  let tsName: string;

  let times = {
    go: 0,
    rust: 0,
    js: 0,
    ts: 0,
  };

  $: goName = goPrefix + times.go.toString() + "s";
  $: rustName = rustPrefix + times.rust.toString() + "s";
  $: jsName = jsPrefix + times.js.toString() + "s";
  $: tsName = tsPrefix + times.ts.toString() + "s";

  const run = async (typ: string) => {
    const start = Date.now();
    await fetch(`/api/${typ}/test`);
    const diff = Date.now() - start;
    times = { ...times, [typ]: diff };
  };

  export let name: string;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hi {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Button name={goName} on:click={() => run('go')} />
  <Button name={rustName} on:click={() => run('rust')} />
  <Button name={jsName} on:click={() => run('js')} />
  <Button name={tsName} on:click={() => run('ts')} />

</main>

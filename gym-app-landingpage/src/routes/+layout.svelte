<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";

  import { openModal } from "../store";

  let y;
  $: outerHeight = 0;

  function reroute(href) {}
</script>

{#if $openModal}
  <div
    class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8"
  >
    <div class="flex items-center justify-between gap-4 border-b pb-2">
      <h1 class="font-semibold">
        Swoley <span class="text-indigo-400">Moley</span>
      </h1>
      <button
        on:click={() => ($openModal = false)}
        class="outline-none border-none"
      >
        <i class="fas fa-times text-2xl"></i>
      </button>
    </div>
  </div>
{/if}
<slot />
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight />

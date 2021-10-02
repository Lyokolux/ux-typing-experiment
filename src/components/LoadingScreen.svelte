<script lang="ts">
  import { fly } from 'svelte/transition'

  export let visible: boolean
</script>

{#if visible}
  <div 
    class="loading-screen position-absolute h-100 w-100 bg-background d-flex align-items-center justify-content-center"
    out:fly={{ y: -200, duration: 500 }}
  >
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
{/if}

<style>
  .loading-screen {
    z-index: 101;
  }
</style>
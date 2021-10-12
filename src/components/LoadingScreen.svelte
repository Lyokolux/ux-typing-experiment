<script lang="ts">
  import { fade } from 'svelte/transition'
  import { _ } from 'svelte-i18n'
  import { CHUNK_SIZES } from '../const'
  import { getRandomInArray } from '../utils'

  export let visible: boolean

  const AMOUNT_OF_ITEMS = 4
  let inputSizes = Array(AMOUNT_OF_ITEMS).fill(undefined).map(() => getRandomInArray(CHUNK_SIZES))

  let intervalId = setInterval(() => {
    inputSizes = Array(AMOUNT_OF_ITEMS).fill(undefined).map(() => getRandomInArray(CHUNK_SIZES))
  }, 1000)

  $: {
    if (!visible) {
      clearInterval(intervalId)
    }
  }
</script>

{#if visible}
  <div 
    class="loading-screen position-absolute h-100 w-100 bg-background align-items-center justify-content-center"
    out:fade={{ duration: 500 }}
  >
    <h1 class="mb-3 text-center">{ $_('loading') }</h1>
    <div class="d-flex row">
      {#each inputSizes as element}
        <input
          type="text"
          class={'chunk form-control mx-1 p-0 p-md-2'}
          style={`--width: ${element / 1.7}em`}
        />
      {/each}
    </div>
  </div>
{/if}

<style>
  .loading-screen {
    z-index: 101;
    display: flex;
    flex-direction: column;
  }

  .chunk {
    width: var(--width);
    transition: width ease-out 0.6s;
  }
</style>
<script lang="ts">
	import { fade } from 'svelte/transition'

let className = ''
export { className as class }
export let type: string = 'primary'
export let onClick: () => void
export let isLoading: boolean = false
</script>

<button
  class={`btn btn-${type} ${className} position-relative`}
  on:click={onClick}
  class:loading={isLoading}
>
  <slot />

  {#if isLoading}
    <div class="position-absolute top-50 start-50 translate-middle" transition:fade>
      <div class="spinner-border spinner-border-sm text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {/if}
</button>

<style lang="scss">
  button.loading {
    color: transparent;
  }
</style>
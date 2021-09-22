<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  let className = ''
  export { className as class }
  export let value: string | undefined
  export let values: string[]
  export let icon: SvelteComponent | undefined
</script>

<div 
  class={`select position-relative btn btn-light d-flex justify-content-center align-items-center p-1 ${className}`}
  title="Update language"
>
  <select bind:value={value} class="opacity-0 p-0 position-absolute w-100 h-100">
    {#each values as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  {#if icon}
     <svelte:component this={icon} />
  {/if}
  <span class="ms-1">{value}</span>
</div>

<style lang="scss">
  select {
    opacity: 0;
    cursor: pointer;
  }
</style>
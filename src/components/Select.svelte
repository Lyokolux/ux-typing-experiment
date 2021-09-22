<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  interface Value {
    value: string
    label: string
  }

  let className = ''
  export { className as class }
  export let value: string | undefined
  export let values: string[] | Value[]
  export let icon: SvelteComponent | undefined

  const getValues = (): Value[] => {
    if (typeof values[0] === 'string') {
      return values.map((value) => {
        return {
          value,
          label: value
        }
      })
    }

    return values as Value[]
  }
</script>

<div 
  class={`select position-relative btn btn-light d-flex justify-content-center align-items-center p-1 ${className}`}
  title="Update language"
>
  <select bind:value={value} class="opacity-0 p-0 position-absolute w-100 h-100">
    {#each getValues() as { value, label }}
      <option {value}>{label}</option>
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
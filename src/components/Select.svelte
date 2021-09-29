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

  let selectedLabel: string

  // TODO: refactor this as reactive declaration
  const getValues = (): Value[] => {
    if (typeof values[0] === 'string') {
      return values.map((v: any) => {
        return {
          value: v,
          label: v
        }
      })
    }

    return values as Value[]
  }

  $: selectedLabel = getValues().find((_value) => {
    return _value.value === value
  })?.label
</script>

<div 
  class={`select position-relative btn btn-light d-flex justify-content-center align-items-center p-1 ${className}`}
  title="Update language"
>
  <select bind:value class="opacity-0 p-0 position-absolute w-100 h-100">
    {#each getValues() as { value, label }}
      <option {value}>{label}</option>
    {/each}
  </select>

  {#if icon}
     <svelte:component this={icon} />
  {/if}
  <span class="ms-1">{selectedLabel}</span>
</div>

<style lang="scss">
  .select {
    width: fit-content;
  }

  select {
    opacity: 0;
    cursor: pointer;
  }
</style>
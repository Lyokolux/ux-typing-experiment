<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
  import Globe2 from 'svelte-bootstrap-icons/lib/Globe2'

  let className = ''
  export { className as class }
</script>

<div 
  class={`locale-select position-relative btn btn-light d-flex justify-content-center align-items-center p-1 m-2 ${className}`}
  title="Update language"
>
  <select bind:value={$locale} class="opacity-0 p-0 position-absolute w-100 h-100">
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>

  <Globe2 />
  <span class="ms-1">{$locale}</span>
</div>

<style lang="scss">
  .locale-select {
    z-index: 1000;
    width: fit-content;
    min-width: 50px;
  }

  select {
    opacity: 0;
    cursor: pointer;
  }
</style>
<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
  import Globe2 from 'svelte-bootstrap-icons/lib/Globe2'
  import Select from './Select.svelte'
</script>

<Select 
  class="locale-select position-absolute top-0 end-0 m-2 btn-outline-primary"
  bind:value={$locale}
  values={$locales}
  icon={Globe2}
/>

<style lang="scss">
  @media screen and (max-width: 992px) {
    :global(.locale-select .label) {
      display: none;
    }
  }
</style>
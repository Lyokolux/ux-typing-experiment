<script lang="ts">
  import { EXPERIENCES_AMOUNT } from '../const'
  import Blob from './Blob/Blob.svelte'

  export let count: number

  let className = ''
  export { className as class }
</script>

<h2 class={`experience-count position-relative fs-3 fw-bold w-fit-content ${className}`}>
  {count}/{EXPERIENCES_AMOUNT}

  <Blob
    type="blob-1"
    class="position-absolute top-50 start-0 translate-middle"
  />
</h2>

<style lang="scss">
  .experience-count {
    color: black;
  }

  .experience-count :global(.blob-1) {
    color: var(--bs-yellow);
    width: 3.4em;
    z-index: -1;
    transform: translate(-.6em, -1.8em)!important;
  }
</style>
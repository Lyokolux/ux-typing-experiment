<script lang="ts">
  import Blob from '../../components/Blob/Blob.svelte'
</script>

<Blob type="stacked-waves" class="position-absolute w-100 top-0 start-0" />
<slot />

<style>
  :global(h1) {
    position: relative;
  }
</style>
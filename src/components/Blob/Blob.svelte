<script lang="ts">
  import EggOutline from './blobs/egg-outline.svelte'
  import StackedWaves from './blobs/stacked-waves.svelte'
  import Blob1 from './blobs/blob-1.svelte'

  let className = ''
  export { className as class }

  type Blob = 'egg-outline' | 'stacked-waves' | 'blob-1'
  export let type: Blob = 'egg-outline'

  const BLOBS: {[blobType in Blob]: any} = {
    'egg-outline': EggOutline,
    'stacked-waves': StackedWaves,
    'blob-1': Blob1
  }
</script>

<i class={`blob ${type} ${className}`}>
  <svelte:component this={BLOBS[type]} />
</i>

<style>
  i :global(svg) {
    height: 100%;
    width: 100%;
  }
</style>
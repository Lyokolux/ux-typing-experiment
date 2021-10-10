<script lang="ts">
  import EggOutline from './blobs/egg-outline.svelte'
  import StackedWaves from './blobs/stacked-waves.svelte'
  import Blob1 from './blobs/blob-1.svelte'
  import Blob2 from './blobs/blob-2.svelte'
  import Blob3 from './blobs/blob-3.svelte'
  import BlobRain from './blobs/blob-rain.svelte'
  import BlobLineTop from './blobs/blob-line-top.svelte'
  import BlobLineBottom from './blobs/blob-line-bottom.svelte'

  let className = ''
  export { className as class }

  type Blob = 'egg-outline' | 'stacked-waves' | 'blob-1' | 'blob-2' | 'blob-3' | 'blob-line-top' | 'blob-line-bottom' | 'blob-rain'
  export let type: Blob = 'egg-outline'

  const BLOBS: {[blobType in Blob]: any} = {
    'egg-outline': EggOutline,
    'stacked-waves': StackedWaves,
    'blob-1': Blob1,
    'blob-2': Blob2,
    'blob-3': Blob3,
    'blob-line-bottom': BlobLineBottom,
    'blob-line-top': BlobLineTop,
    'blob-rain': BlobRain
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
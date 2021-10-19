<script lang="ts">
  import type { ChunkLength } from '../types'

  import { getChunk } from '../utils'

  let className = ''
  export { className as class }

  export let value: string
  export let chunkLength: ChunkLength
</script>

<p class={`alphanumeric-display font-digit-readable ${className}`}>
  {getChunk(value, chunkLength).join(' ')}
</p>

<style>
  .alphanumeric-display {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
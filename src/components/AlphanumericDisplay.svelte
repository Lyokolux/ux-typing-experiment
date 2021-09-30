<script lang="ts">
  import type { ChunkLength } from '../const'

  import { getChunk } from '../utils'

  let className = ''
  export { className as class }

  export let value: string
  export let chunkLength: ChunkLength
</script>

<p class={`alphanumeric-display font-digit-readable ${className}`}>
  {getChunk(value, chunkLength).join(' ')}
</p>
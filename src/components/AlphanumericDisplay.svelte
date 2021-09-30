<script lang="ts">
  import type { ChunkLength } from '../const'

  import { getChunk } from '../utils'

  export let value: string
  export let chunkLength: ChunkLength
</script>

<p class="alphanumeric-display font-digit-readable">
  {getChunk(value, chunkLength).join(' ')}
</p>
<script lang="ts">
  import type { ChunkSize } from '../const'

  import { getChunk } from '../utils'

  export let value: string
  export let chunkSize: ChunkSize
</script>

<p class="alphanumeric-display font-digit-readable">
  {getChunk(value, chunkSize).join(' ')}
</p>
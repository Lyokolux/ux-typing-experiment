<script lang="ts">
  import type { ChunkSize } from '../const'

  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'

  export let value: string
  export let displayChunkSize: ChunkSize
  export let inputChunkSize: ChunkSize
</script>

<AlphanumericDisplay
  {value}
  chunkSize={displayChunkSize}
/>
<AlphanumericInput 
  {value}
  chunkLength={inputChunkSize}
  onFilled={() => console.log('success')}
/>

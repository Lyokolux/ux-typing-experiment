<script lang="ts">
  import { ChunkSize, EXPERIENCES_AMOUNT } from '../const'

  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'

  export let value: string
  export let displayChunkSize: ChunkSize
  export let inputChunkSize: ChunkSize
  export let currentIndex: number
</script>

<h2 class="mt-5">{currentIndex + 1}/{EXPERIENCES_AMOUNT}</h2>
<AlphanumericDisplay
  {value}
  chunkSize={displayChunkSize}
/>
<AlphanumericInput 
  {value}
  chunkLength={inputChunkSize}
  onFilled={() => console.log('success')}
  onCancel={() => console.log('cancel')}
/>

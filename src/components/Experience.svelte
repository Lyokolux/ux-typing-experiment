<script lang="ts">
  import { ChunkLength, EXPERIENCES_AMOUNT } from '../const'

  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'

  export let value: string
  export let displayChunkLength: ChunkLength
  export let inputChunkLength: ChunkLength
  export let currentIndex: number
</script>

<h2 class="mt-5">{currentIndex + 1}/{EXPERIENCES_AMOUNT}</h2>
<AlphanumericDisplay
  {value}
  chunkLength={displayChunkLength}
/>
<AlphanumericInput 
  {value}
  chunkLength={inputChunkLength}
  onFilled={() => console.log('filled')}
  onCancel={() => console.log('cancel')}
/>

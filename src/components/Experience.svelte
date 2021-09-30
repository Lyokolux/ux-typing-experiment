<script lang="ts">
  import { ChunkLength, EXPERIENCES_AMOUNT } from '../const'

  import type { Event } from '../components/AlphanumericInput/utils'

  import { swiper } from '../stores'
  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'

  export let value: string
  export let displayChunkLength: ChunkLength
  export let inputChunkLength: ChunkLength
  export let currentIndex: number

  let events: Event[]

  const onFilled = (): void => {
    $swiper.slideNext()
    // TODO: Store events in firestore
  }
  const onCancel = (): void => {
    // TODO: smthg
  }
</script>

<h2 class="mt-5">{currentIndex + 1}/{EXPERIENCES_AMOUNT}</h2>
<AlphanumericDisplay
  {value}
  chunkLength={displayChunkLength}
/>
<AlphanumericInput 
  {value}
  bind:events
  chunkLength={inputChunkLength}
  {onFilled}
  {onCancel}
/>

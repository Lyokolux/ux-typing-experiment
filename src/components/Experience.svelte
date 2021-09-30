<script lang="ts">
  import type { ChunkLength } from '../types'

  import type { Event } from '../components/AlphanumericInput/utils'

  import { swiper } from '../stores'
  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'
  import ExperienceCount from './ExperienceCount.svelte'

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

<ExperienceCount count={currentIndex + 1} />
<AlphanumericDisplay
  {value}
  chunkLength={displayChunkLength}
  class="fs-2 fw-bold mt-4 text-center"
/>
<AlphanumericInput 
  {value}
  bind:events
  chunkLength={inputChunkLength}
  {onFilled}
  {onCancel}
/>

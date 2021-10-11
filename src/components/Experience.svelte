<script lang="ts">
  import type { ChunkLength } from '../types'

  import type { Event } from '../components/AlphanumericInput/utils'

  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'
  import ExperienceCount from './ExperienceCount.svelte'

  export let value: string
  export let displayChunkLength: ChunkLength
  export let inputChunkLength: ChunkLength
  export let currentIndex: number
  export let onSuccess: () => void

  export let events: Event[]

  const onFilled = (): void => { onSuccess() }
  const onCancel = (): void => {
    // TODO: smthg
  }
</script>

<ExperienceCount count={currentIndex + 1} />
<AlphanumericDisplay
  {value}
  chunkLength={displayChunkLength}
  class="fs-2 fw-bold mt-4"
/>
<AlphanumericInput 
  {value}
  bind:events
  chunkLength={inputChunkLength}
  {onFilled}
  {onCancel}
/>

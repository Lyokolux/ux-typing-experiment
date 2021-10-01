<script lang="ts">
  import type { ChunkLength, Experiment } from '../types'

  import type { Event } from '../components/AlphanumericInput/utils'
  import type { DocumentData, DocumentReference } from 'firebase/firestore'

  import { swiper } from '../store'
  import { api } from '../store/api'
  import AlphanumericDisplay from './AlphanumericDisplay.svelte'
  import AlphanumericInput from './AlphanumericInput/AlphanumericInput.svelte'
  import ExperienceCount from './ExperienceCount.svelte'

  export let value: string
  export let displayChunkLength: ChunkLength
  export let inputChunkLength: ChunkLength
  export let currentIndex: number

  let events: Event[]
  let userDoc: DocumentReference<DocumentData>
  api.currentUserDoc((v) => { userDoc = v })

  const sendResults = () => {
    const experimentResult: Experiment = {
      id: `${displayChunkLength}-${inputChunkLength}`,
      events
    }
    api.addExperimentRequest(userDoc, experimentResult)
  }

  const onFilled = (): void => {
    $swiper.slideNext()
    sendResults()
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

<script lang="ts">
  import { _ } from 'svelte-i18n'
  import type { Event } from './utils'

  import { screen } from '../../stores'
  import { getChunk, getWithAlphanumericOnly, isAlphanumeric } from '../../utils'
  import { getNewEventFromInput } from './utils'
  import { KEY } from '../../const'

  export let value: string
  export let events: Event[] = []
  export let chunkLength: number
  let className = ''
  export { className as class }
  export let chunkClass: string = ''
  export let onFilled: () => void
  export let onCancel: () => void

  const TRACK_EVENTS_LIMIT = 70

  let chunks: string[] = getChunk(value, chunkLength)
  let chunksRef: HTMLInputElement[] = []
  let enteredChunks: string[] = Array(chunks.length).join('.').split('.') // Create array of n empty strings
  let isLimitReached = false

  $: allChunksFilled = enteredChunks.join('').length === value.length
  $: {
    if (allChunksFilled) {
      onFilled()
    }
  }
  $: {
    isLimitReached = events.length >= TRACK_EVENTS_LIMIT
    if (isLimitReached) {
      onCancel()
    }
  }

  const getEnteredAlphanumeric = (): string => {
    return enteredChunks.join('').toUpperCase()
  }

  const jumpToChunk = (index: number): void => {
    chunksRef[index].focus()
  }

  const handleKeydown = (e: KeyboardEvent, chunkIndex: number): void => {
    setTimeout(() => {
      const key = e.key
      const chunkValue = enteredChunks[chunkIndex]
      const isChunkFull = chunkValue.length >= chunkLength
      const isChunkEmpty = chunkValue.length <= 0
      const isFirstChunck = chunkIndex <= 0
      const isLastChunck = chunkIndex >= chunks.length - 1
      const isKeyAnArrow = key === KEY.left || key === KEY.right
      const isKeyIgnored = key === KEY.shift || key === KEY.tab

      if (isKeyIgnored) return

      if (isChunkFull
          && !isLastChunck
          && !isKeyAnArrow) {
        jumpToChunk(chunkIndex + 1)
        return
      }
      if (isChunkEmpty && key === KEY.backspace && !isFirstChunck) {
        jumpToChunk(chunkIndex - 1)
      }
    }, 0)
  }

  const normalizeChunk = (i: number): void => {
    const chunckValue = enteredChunks[i]
    const lastEvent = events[events.length - 1]

    let newChunckValue = chunckValue.toUpperCase()

    const isValueAlphanumeric = isAlphanumeric(newChunckValue)

    if (!isValueAlphanumeric) {
      newChunckValue = getWithAlphanumericOnly(newChunckValue)
      enteredChunks[i] = newChunckValue
      return
    }

    if (newChunckValue.length > chunkLength) {
      newChunckValue = newChunckValue.substring(0, chunkLength)
    }

    const newEvent = getNewEventFromInput(value, getEnteredAlphanumeric(), lastEvent)

    events = [...events, newEvent]
    enteredChunks[i] = newChunckValue
  }
</script>

<div class={`d-flex flex-column ${className}`}>
  <div class="chunks-ctn d-flex overflow-auto">
    {#each chunks as chunk, i}
      <input
        type="text"
        class={`alphanumeric-input chunk font-digit-readable form-control m-1 text-center fs-4 p-0 p-md-2 fw-bold ${chunkClass}`}
        class:fs-5={$screen.device === 'mobile'}
        class:danger={isLimitReached}
        style={`--width: ${chunk.length / ($screen.device === 'mobile' ? 1.8 : 1.2) + 0.7}em`}
        disabled={isLimitReached || allChunksFilled}
        bind:this={chunksRef[i]}
        bind:value={enteredChunks[i]}
        on:keydown={(e) => {
          handleKeydown(e, i)
        }}
        on:input={() => {
          normalizeChunk(i)
        }}
      />
    {/each}
  </div>

  {#if isLimitReached}
    <p class="text-danger">{$_('events_limit_reached')}</p>
  {/if}
</div>

<style lang="scss">
  .chunk {
    width: var(--width);
  }  
</style>

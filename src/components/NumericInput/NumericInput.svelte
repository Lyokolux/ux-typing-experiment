<script lang="ts">
  import { chunk, isNumeric, removeAllNonNumeric } from "../../utils";
  import { KEY } from '../../const';

  export let number: string;
  export let chunkLength: number;
  let className = ''
  export { className as class }
  export let chunkClass: string = ''
  export let onSuccess: () => void;

  let chunks: string[] = chunk(number, chunkLength);
  let chunksRef: EventTarget[] = [];
  let enteredChunks: string[] = Array(chunks.length).join(".").split("."); // Create array of n empty strings

  const jumpToChunk = (index: number): void => {
    chunksRef[index].focus()
  }

  const handleKeydown = (e: KeyboardEvent, chunkIndex: number): void => {
    setTimeout(() => {
      const chunkValue = enteredChunks[chunkIndex]
      const isChunkFull = chunkValue.length >= chunkLength
      const isChunkEmpty = chunkValue.length <= 0
      const isFirstChunck = chunkIndex <= 0
      const isLastChunck = chunkIndex >= chunks.length - 1
      const isKeyAnArrow = e.key === KEY.left || e.key === KEY.right
      
      if (isChunkFull 
          && !isLastChunck
          && !isKeyAnArrow) {
        jumpToChunk(chunkIndex + 1)
        return
      }
      if (isChunkEmpty && e.key === KEY.backspace && !isFirstChunck) {
        jumpToChunk(chunkIndex - 1)
        return
      }
    }, 0)
  };

  const checkChunk = (i: number): void => {
    const chunckValue = enteredChunks[i]
    
    if (!isNumeric(chunckValue)) {
      enteredChunks[i] = removeAllNonNumeric(enteredChunks[i]);
    }
    if (chunckValue.length > chunkLength) {
      enteredChunks[i] = chunckValue.substring(0, chunkLength);
    }
  };
</script>

<div class={`numeric-input ${className}`}>
  {#each chunks as digits, i}
    <input
      type="text"
      class={`chunk form-control m-2 text-center ${chunkClass}`}
      style={`--width: ${chunkLength + 1}em`}
      bind:this={chunksRef[i]}
      bind:value={enteredChunks[i]}
      on:keydown={(e) => {
        handleKeydown(e, i);
      }}
      on:input={() => {
        checkChunk(i);
      }}
    />
  {/each}
</div>

<style lang="scss">
  .numeric-input {
    display: flex;
  }

  .chunk {
    width: var(--width);
  }  
</style>

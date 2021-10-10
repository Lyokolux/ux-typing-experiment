<script lang="ts" context="module">
  /* eslint-disable no-multiple-empty-lines */
  export const BLOBS_ARRANGEMENT_IDS = [1, 2] as const
  export type BlobArrangementId = typeof BLOBS_ARRANGEMENT_IDS
</script>

<script lang="ts">
  import Blob from './Blob.svelte'

  export let type: BlobArrangementId[0] = 1
</script>

<div class={`blobs-arrangement-${type} position-absolute w-100 h-100`}>
  {#if type === 1}
    <Blob type='blob-line-bottom' />
    <Blob type='blob-line-top' />
    <Blob type='blob-2' />
  {:else if type === 2}
    <span class="ctn position-absolute">
      <Blob type='blob-3' />
      <Blob type='blob-3' />
    </span>
    <Blob type='blob-3' />
  {/if}
  
</div>

<style lang="scss">
  div[class^="blobs-arrangement"],
  div[class*=" blobs-arrangement"] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -110;

    :global(.blob) {
      position: absolute;
    }
  }

  .blobs-arrangement-1 {
    :global(.blob-line-bottom),
    :global(.blob-line-top) {
      bottom: 0;
      width: 100vw;
      color: #FAE3CA;
      opacity: 0.5;
    }

    :global(.blob-line-top) {
      transform: translateY(99%) rotateY(180deg);
    }

    :global(.blob-2)  {
      bottom: -25%;
      right: -25%;

      :global(path) {
        stroke-width: 2;
        stroke: "currentColor";
        fill: none;
        color: #FA92A0;
        opacity: 0.8;
      }
    }
  }

  .blobs-arrangement-2 {
    > :global(.blob) {
      width: 100vw;
      bottom: -25%;
      right: -35%;
      transform: rotate(85deg);
      color: #B6E3FA;
      opacity: 0.4;
    }

    .ctn {
      width: 50vw;
      top: 70%;
      left: -10%;

      :global(.blob:first-of-type) {
        color: #FEDC77;
      }
      :global(.blob:last-of-type) {
        transform: translate(2%, 2%) rotate(5deg);
        opacity: 0.9;

        :global(path) {
          fill: none;
          stroke-width: 2;
        }
      }
    }
  }

</style>
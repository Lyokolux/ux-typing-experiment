<script lang="ts" context="module">
  /* eslint-disable no-multiple-empty-lines */
  export const BLOBS_ARRANGEMENT_IDS = [1, 2, 3, 4, 5, 6, null, null, null, null] as const
  export type BlobArrangementId = typeof BLOBS_ARRANGEMENT_IDS
</script>

<script lang="ts">
  import Blob from './Blob.svelte'

  export let type: BlobArrangementId[0] = 1
</script>

<div class={`blobs-arrangement-${type} position-absolute w-100 h-100`}>
  {#if type === 1 || type === 4}
    <Blob type='blob-line-bottom' />
    <Blob type='blob-line-top' />
    <Blob type='blob-2' />
  {:else if type === 2 || type === 5}
    <span class="ctn position-absolute">
      <Blob type='blob-3' />
      <Blob type='blob-3' />
    </span>
    <Blob type='blob-3' />
  {:else if type === 3 || type === 6 }
    <Blob type='blob-3' />
    <Blob type='blob-rain' />
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

  .blobs-arrangement-1, .blobs-arrangement-4 {
    :global(.blob-line-bottom),
    :global(.blob-line-top) {
      bottom: 0;
      width: 100vw;
      color: #F1F2DF;
    }

    :global(.blob-line-top) {
      transform: translateY(99%) rotateY(180deg);
    }

    :global(.blob-2)  {
      width: 30vw;
      bottom: -15%;
      right: -15%;

      :global(path) {
        stroke-width: 1.5;
        stroke: "currentColor";
        fill: none;
        color: #603f8b;
        opacity: 0.8;
      }
    }
  }

  .blobs-arrangement-2, .blobs-arrangement-5 {
    > :global(.blob) {
      width: max(150px, 30vw);
      bottom: 0;
      right: -10%;
      transform: rotate(85deg);
      color: #B6E3FA;
      opacity: 0.4;
    }

    .ctn {
      width: max(30vw, 200px);
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
  .blobs-arrangement-3, .blobs-arrangement-6 {
    :global(.blob-3) {
      width: max(225px, 30vw);
      top: 70%;
      left: -10%;
      color: #FEDC77;

      :global(path) {
        fill: none;
        stroke-width: 2;
      }
    }

    :global(.blob-rain) {
      width: max(20vw, 115px);
      top: 50%;
      right: -3%;
      color: #79CDAA;
      opacity: 0.8;
    }
  }

  .blobs-arrangement-4, .blobs-arrangement-5, .blobs-arragement-6 {
    transform: rotateY(180deg);
  }
</style>
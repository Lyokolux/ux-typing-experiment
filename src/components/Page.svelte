<script lang="ts">

  /* eslint-disable no-use-before-define */
  import BlobsArrangement, { BLOBS_ARRANGEMENT_IDS } from './Blob/BlobsArrangement.svelte'

  import { getRandomInArray } from '../utils'

  export let id: string = undefined
  let className = ''
  export { className as class }
</script>

<div class={`page swiper-slide position-relative d-flex justify-content-center h-100 w-100 m-0 ${className}`} {id}>
  <section class="mx-1 mx-md-5"><slot></slot></section>

  <BlobsArrangement type={getRandomInArray(BLOBS_ARRANGEMENT_IDS)}/>
</div>

<style lang="scss">
  .page {
    padding-top: 3rem;
  }
  section {
    max-width: min(92vw);
  }

  @media screen and (min-width: 992px) {
    section {
      max-width: 900px;
    }
  
    .page {
      padding-top: 20vh;
    }
  }

  @media screen and (max-width: 992px), (min-height: 620px) {
    .page {
      padding-top: 15vh;
    }
  }
</style>

<script lang="ts">

  /* eslint-disable no-use-before-define */
  import BlobsArrangement, { BLOBS_ARRANGEMENT_IDS } from './Blob/BlobsArrangement.svelte'

  import { getRandomInArray } from '../utils'

  export let id: string = undefined
  let className = ''
  export { className as class }
</script>

<div class={`page swiper-slide position-relative h-100 w-100 container m-0 ${className}`} {id}>
  <section class="col mx-1 mx-md-5"><slot></slot></section>

  <BlobsArrangement type={getRandomInArray(BLOBS_ARRANGEMENT_IDS)}/>
</div>

<style lang="scss">
  section {
    margin-top: 3rem;
  }

  @media screen and (min-width: 992px), (min-height: 600px) {
    section {
      margin-top: 20vh!important;
    }
  }
</style>

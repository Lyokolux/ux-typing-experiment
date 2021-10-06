<script lang="ts">
  /* eslint-disable no-use-before-define */
  export let id: string = undefined
  let className = ''
  export { className as class }
</script>

<div class={`page swiper-slide h-100 w-100 container overflow-auto ${className}`} {id}>
  <section class="col"><slot></slot></section>
</div>

<style>
  section {
    margin-top: 3rem;
  }

  @media screen and (min-width: 992px), (min-height: 600px) {
    section {
      margin-top: 20vh!important;
    }
  }
</style>

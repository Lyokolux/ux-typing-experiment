<script lang="ts">
  /* eslint-disable no-use-before-define */
  export let id: string = undefined
  let className = ''
  export { className as class }
</script>
<div class={`page swiper-slide h-100 w-100 container ${className}`} {id}><slot></slot></div>

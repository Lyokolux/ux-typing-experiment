<script lang="ts">
  let className = ''
  export { className as class }
</script>
<div class={`page swiper-slide h-100 w-100 container ${className}`}><slot></slot></div>

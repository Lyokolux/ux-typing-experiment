<script context="module" lang="ts">
  import '../i18n' 
  import { waitLocale } from 'svelte-i18n'

  export async function load() {
    await waitLocale()
    return {}
  }
</script>
<script lang="ts">
  import '../global.scss'
</script>

<div class="swiper w-100 h-100 bg-dark text-light">
  <div class="swiper-wrapper">
    <slot></slot>
  </div>
</div>

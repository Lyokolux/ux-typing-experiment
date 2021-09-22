<script context="module" lang="ts">
  import '../i18n' 
  import { waitLocale } from 'svelte-i18n'

  export async function load(): Promise<void> {
    await waitLocale()
  }
</script>
<script lang="ts">
  import '../global.scss'
  import LocaleSelect from '../components/LocaleSelect.svelte'
</script>

<div class="swiper w-100 h-100 bg-dark text-light position-relative">
  <LocaleSelect class="position-absolute top-0 end-0" />

  <div class="swiper-wrapper">
    <slot></slot>
  </div>
</div>

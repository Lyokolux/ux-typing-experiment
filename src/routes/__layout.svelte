<script context="module" lang="ts">
  import '../i18n'
  import { waitLocale } from 'svelte-i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }
</script>

<script lang="ts">
  import '../global.scss'
  import LocaleSelect from '../components/LocaleSelect.svelte'
</script>

<div class="swiper w-100 h-100 bg-dark text-light position-relative">
  <LocaleSelect />

  <div class="swiper-wrapper">
    <slot />
  </div>
</div>

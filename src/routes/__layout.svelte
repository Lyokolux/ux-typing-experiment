<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
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

  const onPageAppLeave = (e): void => {
    // here browser show default message --> not possible to use a custom one
    (e || window.event).returnValue = ''
  }
</script>

<svelte:window on:beforeunload={onPageAppLeave}/>

<div class="swiper w-100 h-100 bg-dark text-light position-relative">
  <LocaleSelect />

  <div class="swiper-wrapper">
    <slot />
  </div>
</div>
